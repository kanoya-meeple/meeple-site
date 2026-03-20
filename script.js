const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const backToTopButton = document.querySelector(".back-to-top");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (backToTopButton) {
  const toggleBackToTop = () => {
    const isMobile = window.innerWidth <= 520;
    const isVisible = isMobile && window.scrollY > 520;
    backToTopButton.classList.toggle("visible", isVisible);
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  window.addEventListener("resize", toggleBackToTop);
  toggleBackToTop();

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
