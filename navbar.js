let isMenuOpen = false;

const header = document.querySelector("header");
const navHolder = document.querySelector(".nav-holder");
const navLinksHolder = document.querySelector("#nav__links-holder");
const hamburgerButton = document.querySelector("#hamburger-button");
const hamburgerIconClosed = document.querySelector("#hamburger-icon--closed");
const hamburgerIconOpened = document.querySelector("#hamburger-icon--opened");

function openMenu() {
  isMenuOpen = true;
  hamburgerIconClosed.classList.remove("visible");
  hamburgerIconOpened.classList.add("visible");
  navLinksHolder.classList.add("visible");
  header.classList.add("header--expanded");
  navHolder.classList.add("border");
}

function closeMenu() {
  isMenuOpen = false;
  hamburgerIconClosed.classList.add("visible");
  hamburgerIconOpened.classList.remove("visible");
  navLinksHolder.classList.remove("visible");
  header.classList.remove("header--expanded");
  navHolder.classList.remove("border");
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
