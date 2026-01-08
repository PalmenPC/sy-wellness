function loadHandler() {
  fetch("../assets/data/treatments.json")
    .then((res) => res.json())
    .then((data) => {
      data.treatments.cupping.forEach((item) => {
        const treatment = document.createElement("div");
        treatment.classList.add("treatment-container");
        treatment.innerText = JSON.stringify(item);
        treatment.innerHTML = `
        <div class="treatment-dropdown">
        <h3 class="treatment-name">${item.name}</h3>
        </div>
        <div class="treatment-content">
        <p class="treatment-description">${item.description}</p>
        <a class="treatment-book-btn" href="${item.bookLink}" target="_blank">Boka</a>
        </div>
        `;

        const treatmentGallery = document.getElementById("treatment-gallery");

        treatmentGallery.appendChild(treatment);
      });
    });
}
window.addEventListener("load", loadHandler);
