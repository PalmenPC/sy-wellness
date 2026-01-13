function loadHandler() {
  fetch("../assets/data/testimonials.json")
    .then((res) => res.json())
    .then((data) => {
      data.testimonials.forEach((item) => {
        const testimonial = document.createElement("div");
        testimonial.classList.add("testimonial-container");
        testimonial.innerText = JSON.stringify(item);
        testimonial.innerHTML = `
          <p class="testimonial-text">"${item.message}"</p>
          <p class="testimonial-author">${item.author}</p>
        `;

        const testimonialGallery = document.getElementById(
          "testimonial-gallery"
        );

        testimonialGallery.appendChild(testimonial);
      });
    });
}
window.addEventListener("load", loadHandler);
