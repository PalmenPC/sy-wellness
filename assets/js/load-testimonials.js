function loadHandler() {
  fetch("../assets/data/testimonials.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch testimonials.json: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      data.testimonials.forEach((item) => {
        const testimonial = document.createElement("div");
        testimonial.classList.add("testimonial-container");
        testimonial.innerHTML = `
          <p class="testimonial-text">"${item.message}"</p>
          <p class="testimonial-author">${item.author}</p>
        `;

        const testimonialGallery = document.getElementById(
          "testimonial-gallery",
        );

        testimonialGallery.appendChild(testimonial);
      });
    })
    .catch((error) => {
      console.error("Error loading testimonials:", error);

      const testimonialGallery = document.getElementById("testimonial-gallery");
      testimonialGallery.innerHTML = "<p>Kunde inte ladda kundomdömen.</p>";
    });
}
window.addEventListener("load", loadHandler);
