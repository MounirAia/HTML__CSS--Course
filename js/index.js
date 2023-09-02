// STICKY NAVIGATION
const navigationBar = document.querySelector(".header__nav");
const heroSection = document.querySelector(".hero");

const observer = new IntersectionObserver(
  (entries) => {
    const isHeroSectionVisible = entries[0].isIntersecting;
    if (isHeroSectionVisible) {
      navigationBar.classList.remove("header__nav--sticky");
      heroSection.classList.remove("hero--sticky");
    } else {
      heroSection.classList.add("hero--sticky");
      navigationBar.classList.add("header__nav--sticky");
    }
  },
  { rootMargin: "-100px" }
);

observer.observe(heroSection);

// MOBILE NAVBARD
const navToggleButton = document.querySelector(".header__nav__toggle__bar");
const navCloseButton = document.querySelector(".header__nav__close__bar");

navToggleButton.addEventListener("click", () => {
  toggleNavMenu();
});
navCloseButton.addEventListener("click", () => {
  toggleNavMenu();
});

const navigationLinks = document.querySelector(
  ".header__nav__options__container"
).children;

for (const link of navigationLinks) {
  link.addEventListener("click", () => {
    toggleNavMenu();
  });
}

const navMobileMenu = document.querySelector(".header__nav__options");

function toggleNavMenu() {
  const openNavClassName = "header__nav__options--mobile--toggled";
  const closeNavClassName = "header__nav__options--mobile--closed";
  const stickyBodyClassName = "body--sticky";
  if (navMobileMenu.classList.contains(openNavClassName)) {
    // CLOSE THE NAVBAR
    navMobileMenu.classList.remove(openNavClassName);
    navMobileMenu.classList.add(closeNavClassName);
    document.body.classList.remove(stickyBodyClassName);
    document.documentElement.classList.remove(stickyBodyClassName);
    changeNavButtonState({ isNavClosed: true });
  } else {
    // OPEN THE NAVBAR
    navMobileMenu.classList.remove(closeNavClassName);
    navMobileMenu.classList.add(openNavClassName);
    document.body.classList.add(stickyBodyClassName);
    document.documentElement.classList.add(stickyBodyClassName);
    changeNavButtonState({ isNavClosed: false });
  }
}

function changeNavButtonState(parameters) {
  const { isNavClosed } = parameters;
  const openToggleButtonClassName = "header__nav__close__bar--open";
  const closeToggleButtonClassName = "header__nav__close__bar--close";
  const openCloseButtonClassName = "header__nav__close__bar--open";
  const closeCloseButtonClassName = "header__nav__close__bar--close";

  if (isNavClosed) {
    // open the navigation
    navToggleButton.classList.add(openToggleButtonClassName);
    navToggleButton.classList.remove(closeToggleButtonClassName);
    navCloseButton.classList.add(closeCloseButtonClassName);
    navCloseButton.classList.remove(openCloseButtonClassName);
  } else {
    // close the navigation
    navToggleButton.classList.remove(openToggleButtonClassName);
    navToggleButton.classList.add(closeToggleButtonClassName);
    navCloseButton.classList.remove(closeCloseButtonClassName);
    navCloseButton.classList.add(openCloseButtonClassName);
  }
}
