(() => {
  const body = document.body;
  const root = document.documentElement;
  const navToggle = document.querySelector('.nav-toggle');
  const navClose = document.querySelector('[data-nav-close]');
  const navFilter = document.querySelector('#nav-filter');
  const themePicker = document.querySelector('#theme-picker');
  const backToTop = document.querySelector('.back-to-top');

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
    }
  });

  document.querySelectorAll('.docs-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 980px)').matches) {
        closeNavigation();
      }
    });
  });

  if (navFilter) {
    navFilter.addEventListener('input', () => {
      const query = navFilter.value.trim().toLowerCase();

      document.querySelectorAll('[data-nav-group]').forEach((group) => {
        const title = group.querySelector('.nav-section__title');
        const items = Array.from(group.querySelectorAll('[data-nav-item]'));
        const titleMatches = title && title.textContent.toLowerCase().includes(query);
        let hasVisibleItem = false;

        items.forEach((item) => {
          const matches = !query || item.textContent.toLowerCase().includes(query) || titleMatches;
          item.hidden = !matches;
          hasVisibleItem = hasVisibleItem || matches;
        });

        group.hidden = Boolean(query) && !titleMatches && !hasVisibleItem;
      });
    });
  }

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

  const content = document.querySelector('.content-prose');
  const contentWrap = document.querySelector('.content-wrap');

  if (content && contentWrap) {
    const headings = Array.from(content.querySelectorAll('h2, h3'));

    if (headings.length >= 2) {
      const usedIds = new Set();
      const slugify = (value) => value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

      headings.forEach((heading, index) => {
        if (!heading.id) {
          const baseId = slugify(heading.textContent) || `section-${index + 1}`;
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
        item.className = `toc-level-${heading.tagName === 'H3' ? '3' : '2'}`;

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
