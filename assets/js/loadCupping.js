function loadHandler() {
  fetch("../assets/data/treatments.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch treatments.json: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      data.treatments.cupping.forEach((item) => {
        const treatment = document.createElement("li");
        treatment.classList.add("treatment-container");
        treatment.innerHTML = `
        <div class="treatment-dropdown hover-btn">
        <a class="treatment-name">${item.name}</a>
        </div>
        <div class="treatment-content">
        <p class="treatment-description">${item.description}</p>
        <a class="treatment-book-btn" href="${item.bookLink}" target="_blank">Boka</a>
        </div>
        `;

        const treatmentGallery = document.getElementById("treatment-gallery");

        treatmentGallery.appendChild(treatment);
      });
    })
    .catch((error) => {
      console.error("Error loading treatments:", error);

      const treatmentGallery = document.getElementById("treatment-gallery");
      treatmentGallery.innerHTML = "<p>Kunde inte ladda behandlingar.</p>";
    });
}
window.addEventListener("load", loadHandler);
