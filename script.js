document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.querySelector("#about-dialog");

  if (!dialog) {
    return;
  }

  const documentElement = document.documentElement;
  const aboutHeader = document.querySelector(".about-header");

  if (aboutHeader) {
    const updateHeaderState = () => {
      aboutHeader.classList.toggle("is-scrolled", window.scrollY > 0);
    };

    window.addEventListener("scroll", updateHeaderState, { passive: true });
    updateHeaderState();
  }

  const cards = [...document.querySelectorAll(".about-card")];
  const pages = [...dialog.querySelectorAll(".about-dialog-page")];
  const closeButton = dialog.querySelector(".about-dialog-close");
  const controls = dialog.querySelector(".about-dialog-controls");
  const dialogFooter = dialog.querySelector(".about-dialog-footer");
  const dialogShell = dialog.querySelector(".about-dialog-shell");
  const dialogHeaderKicker = dialog.querySelector(".about-dialog-header-kicker");
  const previousButton = dialog.querySelector(".about-dialog-button--previous");
  const nextButton = dialog.querySelector(".about-dialog-button--next");
  const currentPage = dialog.querySelector("[data-dialog-current]");
  const totalPages = dialog.querySelector("[data-dialog-total]");
  let activePages = [];
  let activeIndex = 0;
  let lastTrigger;

  const setPage = (index) => {
    activeIndex = (index + activePages.length) % activePages.length;

    pages.forEach((page) => {
      page.classList.toggle("is-active", page === activePages[activeIndex]);
    });

    currentPage.textContent = String(activeIndex + 1);
    totalPages.textContent = String(activePages.length);
    controls.hidden = activePages.length < 2;
    dialogFooter.hidden = activePages.length < 2;
  };

  const positionTabletDialog = () => {
    if (!dialog.open || !window.matchMedia("(min-width: 701px) and (max-width: 1100px)").matches) {
      dialogShell.style.removeProperty("--about-dialog-lift");
      return;
    }

    dialogShell.style.setProperty("--about-dialog-lift", "0px");

    const rootFontSize = parseFloat(getComputedStyle(documentElement).fontSize);
    const dialogRect = dialog.getBoundingClientRect();
    const shellRect = dialogShell.getBoundingClientRect();
    const availableLift = Math.max(0, (shellRect.top - dialogRect.top) * 2);
    const lift = Math.min(15 * rootFontSize, availableLift);

    dialogShell.style.setProperty("--about-dialog-lift", `-${lift}px`);
  };

  window.addEventListener("resize", positionTabletDialog);


  cards.forEach((card) => {
    card.addEventListener("click", () => {
      activePages = pages.filter((page) => page.dataset.section === card.dataset.dialog);

      if (!activePages.length) {
        return;
      }

      lastTrigger = card;
      dialogHeaderKicker.textContent = card.dataset.dialogTitle;
      setPage(0);
      documentElement.classList.add("about-dialog-open");
      aboutHeader?.classList.add("is-dialog-open");
      dialog.showModal();
      positionTabletDialog();
      closeButton.focus();
    });
  });

  previousButton.addEventListener("click", () => {
    setPage(activeIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    setPage(activeIndex + 1);
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", () => {
    documentElement.classList.remove("about-dialog-open");
    aboutHeader?.classList.remove("is-dialog-open");
    dialogShell.style.removeProperty("--about-dialog-lift");
    lastTrigger?.focus();
  });
});
