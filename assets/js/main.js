/* Hamburger menu */
const hamburgerButton = document.getElementById("hamburger-btn");
const hamburgerMenu = document.getElementById("hamburger-nav");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});
