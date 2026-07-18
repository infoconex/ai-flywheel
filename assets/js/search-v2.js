(() => {
  const searchRoot = document.querySelector('[data-site-search]');
  const originalInput = document.querySelector('#site-search-input');
  const searchResults = document.querySelector('#site-search-results');

  if (!searchRoot || !originalInput || !searchResults) {
    return;
  }

  // Replace the original input so the previous search listeners are removed cleanly.
  const searchInput = originalInput.cloneNode(true);
  originalInput.replaceWith(searchInput);

  const normalize = (value) => value.toLowerCase().replace(/\s+/g, ' ').trim();
  const navLinks = Array.from(document.querySelectorAll('.docs-nav a[href]'));

  const baseIndex = Array.from(new Map(navLinks.map((link) => {
    const url = new URL(link.href, window.location.href).href;
    const title = link.textContent.trim();
    return [url, {
      title,
      url,
      text: title,
      normalizedTitle: normalize(title),
      normalizedText: normalize(title)
    }];
  })).values());

  const currentUrl = window.location.href.split('#')[0];
  if (!baseIndex.some((page) => page.url === currentUrl)) {
    const currentTitle = document.querySelector('.content-prose h1')?.textContent?.trim() || document.title;
    baseIndex.push({
      title: currentTitle,
      url: currentUrl,
      text: document.querySelector('.content-prose')?.textContent?.replace(/\s+/g, ' ').trim() || currentTitle,
      normalizedTitle: normalize(currentTitle),
      normalizedText: normalize(document.querySelector('.content-prose')?.textContent || currentTitle)
    });
  }

  let enrichedIndexPromise;

  const enrichIndex = async () => {
    const enriched = await Promise.all(baseIndex.map(async (page) => {
      try {
        const response = await fetch(page.url);
        if (!response.ok) {
          return page;
        }

        const html = await response.text();
        const parsed = new DOMParser().parseFromString(html, 'text/html');
        const content = parsed.querySelector('.content-prose');
        if (!content) {
          return page;
        }

        const title = content.querySelector('h1')?.textContent?.trim() || page.title;
        const text = content.textContent.replace(/\s+/g, ' ').trim();

        return {
          title,
          url: page.url,
          text,
          normalizedTitle: normalize(title),
          normalizedText: normalize(text)
        };
      } catch {
        return page;
      }
    }));

    return enriched;
  };

  const ensureEnrichedIndex = () => {
    if (!enrichedIndexPromise) {
      enrichedIndexPromise = enrichIndex();
    }
    return enrichedIndexPromise;
  };

  const getSnippet = (text, query) => {
    const normalizedText = text.toLowerCase();
    const matchIndex = normalizedText.indexOf(query.toLowerCase());
    const start = Math.max(0, matchIndex === -1 ? 0 : matchIndex - 80);
    const end = Math.min(text.length, start + 190);
    return `${start > 0 ? '…' : ''}${text.slice(start, end).trim()}${end < text.length ? '…' : ''}`;
  };

  const findMatches = (index, query) => {
    const terms = normalize(query).split(' ').filter(Boolean);

    return index
      .map((page) => {
        const titleMatches = terms.filter((term) => page.normalizedTitle.includes(term)).length;
        const textMatches = terms.filter((term) => page.normalizedText.includes(term)).length;
        return { ...page, score: (titleMatches * 5) + textMatches };
      })
      .filter((page) => page.score > 0 && terms.every((term) => page.normalizedTitle.includes(term) || page.normalizedText.includes(term)))
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  };

  const renderResults = (matches, query, isLoading = false) => {
    searchResults.replaceChildren();

    if (!query) {
      searchResults.hidden = true;
      searchInput.setAttribute('aria-expanded', 'false');
      return;
    }

    if (matches.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'site-search__empty';
      empty.textContent = isLoading ? 'Searching documentation…' : 'No matching documentation found.';
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

  let searchSequence = 0;

  const runSearch = async () => {
    const query = searchInput.value.trim();
    const sequence = ++searchSequence;

    if (!query) {
      renderResults([], '');
      return;
    }

    // Show useful title matches immediately.
    const immediateMatches = findMatches(baseIndex, query);
    renderResults(immediateMatches, query, immediateMatches.length === 0);

    const enrichedIndex = await ensureEnrichedIndex();
    if (sequence !== searchSequence || searchInput.value.trim() !== query) {
      return;
    }

    renderResults(findMatches(enrichedIndex, query), query);
  };

  searchInput.addEventListener('focus', () => {
    ensureEnrichedIndex();
    if (searchInput.value.trim()) {
      runSearch();
    }
  });

  searchInput.addEventListener('input', runSearch);

  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const firstResult = searchResults.querySelector('.site-search__result');
      if (firstResult) {
        event.preventDefault();
        window.location.href = firstResult.href;
      }
    }

    if (event.key === 'Escape') {
      searchResults.hidden = true;
      searchInput.setAttribute('aria-expanded', 'false');
    }
  });
})();
