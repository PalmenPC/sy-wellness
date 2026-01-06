function loadHandler() {
  fetch("../assets/data/treatments.json")
    .then((res) => res.json())
    .then((data) => {
      data.treatments.yogaWithRetreat.forEach((item) => {
        const treatment = document.createElement("div");
        treatment.classList.add("treatment-container");
        treatment.innerText = JSON.stringify(item);
        treatment.innerHTML = `
        <h3 class="treatment-name">${item.name}</h3>
        <p class="treatment-description">${item.description}</p>
        <button href="">Boka</button>`;

        const treatmentGallery = document.getElementById("treatment-gallery");

        treatmentGallery.appendChild(treatment);
      });
    });
}
window.addEventListener("load", loadHandler);
