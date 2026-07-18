(() => {
  const body = document.body;
  const navToggle = document.querySelector('.nav-toggle');
  const navClose = document.querySelector('[data-nav-close]');
  const navFilter = document.querySelector('#nav-filter');

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
})();