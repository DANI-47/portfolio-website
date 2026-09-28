(() => {
  const panel = document.querySelector("#projects");
  const cards = [...document.querySelectorAll(".portfolio-project-card")];

  if (!panel || cards.length !== 3) {
    console.error("Projects section must contain exactly three project cards.");
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let cardsObserved = false;

  function revealCards() {
    if (cardsObserved) {
      return;
    }
    cardsObserved = true;

    if (reducedMotion.matches) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    panel.classList.add("project-reveal-ready");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    cards.forEach((card) => observer.observe(card));
  }

  const sectionObserver = new MutationObserver(() => {
    if (panel.classList.contains("is-active")) {
      revealCards();
      sectionObserver.disconnect();
    }
  });

  if (panel.classList.contains("is-active")) {
    revealCards();
  } else {
    sectionObserver.observe(panel, { attributes: true, attributeFilter: ["class"] });
  }
})();
