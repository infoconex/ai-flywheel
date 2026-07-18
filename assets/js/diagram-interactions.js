(() => {
  const resetIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 1 0 2.34-5.66L4 8.68M4 4v4.68h4.68" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const initializeDiagram = (wrapper) => {
    if (wrapper.dataset.interactionsReady === 'true') {
      return;
    }

    const canvas = wrapper.querySelector('.mermaid');
    if (!canvas) {
      return;
    }

    wrapper.dataset.interactionsReady = 'true';
    wrapper.classList.add('is-interactive');

    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startTranslateX = 0;
    let startTranslateY = 0;

    const applyTransform = () => {
      canvas.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    };

    const resetView = () => {
      scale = 1;
      translateX = 0;
      translateY = 0;
      applyTransform();
    };

    const resetButton = document.createElement('button');
    resetButton.className = 'mermaid-diagram__reset';
    resetButton.type = 'button';
    resetButton.innerHTML = resetIcon;
    resetButton.setAttribute('aria-label', 'Reset diagram view');
    resetButton.setAttribute('title', 'Reset diagram view');
    resetButton.addEventListener('click', (event) => {
      event.stopPropagation();
      resetView();
    });

    const fullscreenButton = wrapper.querySelector('.mermaid-diagram__fullscreen');
    if (fullscreenButton) {
      wrapper.insertBefore(resetButton, fullscreenButton);
    } else {
      wrapper.prepend(resetButton);
    }

    wrapper.addEventListener('wheel', (event) => {
      if (event.target.closest('button')) {
        return;
      }

      event.preventDefault();

      const rect = wrapper.getBoundingClientRect();
      const pointerX = event.clientX - rect.left;
      const pointerY = event.clientY - rect.top;
      const previousScale = scale;
      const zoomFactor = event.deltaY < 0 ? 1.12 : 0.89;
      scale = Math.min(4, Math.max(0.5, scale * zoomFactor));

      const scaleRatio = scale / previousScale;
      translateX = pointerX - ((pointerX - translateX) * scaleRatio);
      translateY = pointerY - ((pointerY - translateY) * scaleRatio);
      applyTransform();
    }, { passive: false });

    wrapper.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || event.target.closest('button')) {
        return;
      }

      isDragging = true;
      startX = event.clientX;
      startY = event.clientY;
      startTranslateX = translateX;
      startTranslateY = translateY;
      wrapper.classList.add('is-dragging');
      wrapper.setPointerCapture(event.pointerId);
    });

    wrapper.addEventListener('pointermove', (event) => {
      if (!isDragging) {
        return;
      }

      translateX = startTranslateX + (event.clientX - startX);
      translateY = startTranslateY + (event.clientY - startY);
      applyTransform();
    });

    const stopDragging = (event) => {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      wrapper.classList.remove('is-dragging');

      if (wrapper.hasPointerCapture?.(event.pointerId)) {
        wrapper.releasePointerCapture(event.pointerId);
      }
    };

    wrapper.addEventListener('pointerup', stopDragging);
    wrapper.addEventListener('pointercancel', stopDragging);
    wrapper.addEventListener('dblclick', (event) => {
      if (!event.target.closest('button')) {
        resetView();
      }
    });
  };

  const initializeAll = () => {
    document.querySelectorAll('.mermaid-diagram').forEach(initializeDiagram);
  };

  initializeAll();

  const observer = new MutationObserver(initializeAll);
  observer.observe(document.body, { childList: true, subtree: true });
})();
