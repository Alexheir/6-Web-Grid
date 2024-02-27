let headerAllBtns = document.querySelectorAll("aside .btn");

function btnToggle(e) {
  headerAllBtns.forEach(function (btn) {
    btn.classList.remove("active");
  });
  // Agregar la clase 'active' al elemento <li> padre del <a> clickeado
  e.target.parentElement.classList.add("active");
}

headerAllBtns.forEach(function (btn) {
  btn.querySelector("a").addEventListener("click", btnToggle);
});

headerAllBtns[0].classList.add("active");

async function executeAfterImagesLoaded() {
  // Esperar a que se carguen las imágenes
  await new Promise((resolve) => {
    window.addEventListener("load", resolve);
  });

  // Una vez que se cargan las imágenes, ejecutar el código
  headerAllBtns.forEach(function (e) {
    e.addEventListener("click", function () {
      // Remover la clase 'active' de todos los botones
      headerAllBtns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      
      // Agregar la clase 'active' al botón clickeado
      e.classList.add("active");
      
      // Obtener el tag name del botón clickeado
      let tagName = e.querySelector("a").innerText.trim();
      
      // Filtrar los divs según el tag name
      let photoDivs = document.querySelectorAll("#photo-container .photo");
      photoDivs.forEach(function (div) {
        if (tagName === "All" || div.dataset.tags.includes(tagName)) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      });
    });
  });
}
executeAfterImagesLoaded();

