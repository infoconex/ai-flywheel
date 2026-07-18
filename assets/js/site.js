(() => {
  const body = document.body;
  const root = document.documentElement;
  const navToggle = document.querySelector('.nav-toggle');
  const navClose = document.querySelector('[data-nav-close]');
  const themePicker = document.querySelector('#theme-picker');
  const backToTop = document.querySelector('.back-to-top');
  const searchRoot = document.querySelector('[data-site-search]');
  const searchInput = document.querySelector('#site-search-input');
  const searchResults = document.querySelector('#site-search-results');

  const closeNavigation = () => {
    body.classList.remove('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
    }
  };

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  if (navClose) {
    navClose.addEventListener('click', closeNavigation);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
      if (searchResults) {
        searchResults.hidden = true;
      }
      if (searchInput) {
        searchInput.setAttribute('aria-expanded', 'false');
      }
    }
  });

  document.querySelectorAll('.docs-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 980px)').matches) {
        closeNavigation();
      }
    });
  });

  const applyTheme = (theme) => {
    if (theme === 'light') {
      delete root.dataset.theme;
    } else {
      root.dataset.theme = theme;
    }

    localStorage.setItem('ai-flywheel-theme', theme);
  };

  if (themePicker) {
    const currentTheme = root.dataset.theme || 'light';
    themePicker.value = currentTheme;

    themePicker.addEventListener('change', () => {
      applyTheme(themePicker.value);
    });
  }

  const updateReadingProgress = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollableHeight) * 100)) : 0;

    root.style.setProperty('--reading-progress', `${progress}%`);

    if (backToTop) {
      backToTop.classList.toggle('is-visible', scrollTop > 500);
    }
  };

  window.addEventListener('scroll', updateReadingProgress, { passive: true });
  window.addEventListener('resize', updateReadingProgress);
  updateReadingProgress();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (searchRoot && searchInput && searchResults) {
    let searchIndexPromise;

    const normalize = (value) => value.toLowerCase().replace(/\s+/g, ' ').trim();

    const getSearchableUrls = () => {
      const urls = Array.from(document.querySelectorAll('.docs-nav a[href]'))
        .map((link) => new URL(link.href, window.location.href).href);

      urls.push(window.location.href.split('#')[0]);
      return Array.from(new Set(urls));
    };

    const buildSearchIndex = async () => {
      const urls = getSearchableUrls();
      const pages = await Promise.all(urls.map(async (url) => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            return null;
          }

          const html = await response.text();
          const documentPage = new DOMParser().parseFromString(html, 'text/html');
          const content = documentPage.querySelector('.content-prose');
          if (!content) {
            return null;
          }

          const heading = content.querySelector('h1');
          const navLink = Array.from(document.querySelectorAll('.docs-nav a[href]'))
            .find((link) => new URL(link.href, window.location.href).href === url);
          const title = heading?.textContent?.trim() || navLink?.textContent?.trim() || documentPage.title || url;
          const text = content.textContent.replace(/\s+/g, ' ').trim();

          return {
            title,
            url,
            text,
            normalizedTitle: normalize(title),
            normalizedText: normalize(text)
          };
        } catch {
          return null;
        }
      }));

      return pages.filter(Boolean);
    };

    const ensureSearchIndex = () => {
      if (!searchIndexPromise) {
        searchIndexPromise = buildSearchIndex();
      }
      return searchIndexPromise;
    };

    const getSnippet = (text, query) => {
      const normalizedText = text.toLowerCase();
      const index = normalizedText.indexOf(query.toLowerCase());
      const start = Math.max(0, index === -1 ? 0 : index - 80);
      const end = Math.min(text.length, start + 190);
      const prefix = start > 0 ? '…' : '';
      const suffix = end < text.length ? '…' : '';
      return `${prefix}${text.slice(start, end).trim()}${suffix}`;
    };

    const renderResults = (matches, query) => {
      searchResults.replaceChildren();

      if (!query) {
        searchResults.hidden = true;
        searchInput.setAttribute('aria-expanded', 'false');
        return;
      }

      if (matches.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'site-search__empty';
        empty.textContent = 'No matching documentation found.';
        searchResults.appendChild(empty);
      } else {
        matches.slice(0, 8).forEach((page) => {
          const link = document.createElement('a');
          link.className = 'site-search__result';
          link.href = page.url;
          link.setAttribute('role', 'option');

          const title = document.createElement('strong');
          title.textContent = page.title;

          const snippet = document.createElement('span');
          snippet.textContent = getSnippet(page.text, query);

          link.append(title, snippet);
          searchResults.appendChild(link);
        });
      }

      searchResults.hidden = false;
      searchInput.setAttribute('aria-expanded', 'true');
    };

    const runSearch = async () => {
      const query = normalize(searchInput.value);
      if (!query) {
        renderResults([], '');
        return;
      }

      searchResults.hidden = false;
      searchResults.innerHTML = '<div class="site-search__empty">Searching…</div>';
      searchInput.setAttribute('aria-expanded', 'true');

      const index = await ensureSearchIndex();
      const terms = query.split(' ');

      const matches = index
        .map((page) => {
          const titleMatches = terms.filter((term) => page.normalizedTitle.includes(term)).length;
          const textMatches = terms.filter((term) => page.normalizedText.includes(term)).length;
          return {
            ...page,
            score: (titleMatches * 4) + textMatches
          };
        })
        .filter((page) => page.score > 0 && terms.every((term) => page.normalizedText.includes(term) || page.normalizedTitle.includes(term)))
        .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

      renderResults(matches, searchInput.value.trim());
    };

    searchInput.addEventListener('focus', ensureSearchIndex);
    searchInput.addEventListener('input', runSearch);

    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        const firstResult = searchResults.querySelector('.site-search__result');
        if (firstResult) {
          window.location.href = firstResult.href;
        }
      }
    });

    document.addEventListener('click', (event) => {
      if (!searchRoot.contains(event.target)) {
        searchResults.hidden = true;
        searchInput.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const content = document.querySelector('.content-prose');
  const contentWrap = document.querySelector('.content-wrap');

  if (content && contentWrap) {
    const pageTitle = content.querySelector('h1');
    const sectionHeadings = Array.from(content.querySelectorAll('h2, h3'));
    const headings = pageTitle ? [pageTitle, ...sectionHeadings] : sectionHeadings;

    if (sectionHeadings.length >= 2 && headings.length > 0) {
      const usedIds = new Set();
      const slugify = (value) => value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

      headings.forEach((heading, index) => {
        if (!heading.id) {
          const baseId = heading.tagName === 'H1'
            ? 'page-top'
            : (slugify(heading.textContent) || `section-${index + 1}`);
          let id = baseId;
          let suffix = 2;

          while (usedIds.has(id) || document.getElementById(id)) {
            id = `${baseId}-${suffix}`;
            suffix += 1;
          }

          heading.id = id;
        }

        usedIds.add(heading.id);
      });

      const aside = document.createElement('aside');
      aside.className = 'on-this-page';
      aside.setAttribute('aria-label', 'On this page');

      const title = document.createElement('p');
      title.className = 'on-this-page__title';
      title.textContent = 'On this page';
      aside.appendChild(title);

      const list = document.createElement('ul');
      const links = [];

      headings.forEach((heading) => {
        const item = document.createElement('li');
        const level = heading.tagName === 'H1' ? '1' : (heading.tagName === 'H3' ? '3' : '2');
        item.className = `toc-level-${level}`;

        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.dataset.targetId = heading.id;

        item.appendChild(link);
        list.appendChild(item);
        links.push(link);
      });

      aside.appendChild(list);
      document.body.appendChild(aside);
      contentWrap.classList.add('has-on-this-page');

      const setActiveLink = (id) => {
        links.forEach((link) => {
          link.classList.toggle('is-active', link.dataset.targetId === id);
        });
      };

      const observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveLink(visible[0].target.id);
        }
      }, {
        rootMargin: `-${68 + 24}px 0px -70% 0px`,
        threshold: 0
      });

      headings.forEach((heading) => observer.observe(heading));
      setActiveLink(headings[0].id);
    }
  }
})();
