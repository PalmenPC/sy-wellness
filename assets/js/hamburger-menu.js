/* Hamburger menu */
const hamburgerButton = document.getElementById("hamburger-btn");
const hamburgerMenu = document.getElementById("hamburger-nav");

const initHamburgerMenu = () => {
  hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
  });
};

export { initHamburgerMenu };
