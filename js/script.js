const hamburger = document.querySelector(".hamburger");
const globalNav = document.querySelector(".global-nav");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("is-open");

  globalNav.classList.toggle("is-open", isOpen);
  overlay.classList.toggle("is-open", isOpen);

  hamburger.setAttribute("aria-expanded", isOpen);
});

const closeMenu = () => {
  hamburger.classList.remove("is-open");
  globalNav.classList.remove("is-open");
  overlay.classList.remove("is-open");
  hamburger.setAttribute("aria-expanded", "false");
};

overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && hamburger.classList.contains("is-open")) {
    closeMenu();
  }
});
