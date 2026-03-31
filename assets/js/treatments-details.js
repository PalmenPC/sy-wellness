/* Treatment details functionality */
document.addEventListener("click", (e) => {
  const bookBtns = e.target.closest(".treatment-dropdown");

  if (!bookBtns) return;

  const content = bookBtns.nextElementSibling;
  content.classList.toggle("open");
});
