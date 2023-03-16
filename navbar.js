let isMenuOpen = false;

const navLinksHolder = document.querySelector("#nav__links-holder");
const hamburgerButton = document.querySelector("#hamburger-button");
const hamburgerIconClosed = document.querySelector("#hamburger-icon--closed");
const hamburgerIconOpened = document.querySelector("#hamburger-icon--opened");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

function openMenu() {
  isMenuOpen = true;
  hamburgerIconClosed.classList.remove("visible");
  hamburgerIconOpened.classList.add("visible");
  navLinksHolder.classList.add("visible");
  main.classList.add("hidden");
  footer.classList.add("hidden");
}

function closeMenu() {
  isMenuOpen = false;
  hamburgerIconClosed.classList.add("visible");
  hamburgerIconOpened.classList.remove("visible");
  navLinksHolder.classList.remove("visible");
  main.classList.remove("hidden");
  footer.classList.remove("hidden");
}

hamburgerButton.addEventListener("click", () => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});
