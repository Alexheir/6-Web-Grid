let asideBtns = document.querySelectorAll("aside .btn");

async function postImageLoad() {
  await new Promise((resolve) => {
    window.addEventListener("load", resolve);
  });

  let photoDivs = document.querySelectorAll("#photo-container .photo");

  function btnToggle(e) {
    asideBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    //Captura de tag desde el nombre del btn
    let textBtn = e.currentTarget.innerText.trim();

    //Filtro de imagenes según Data-Tag
    photoDivs.forEach(function (div) {
      if (textBtn === "All" || div.dataset.tags.includes(textBtn)) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  }

  asideBtns.forEach(function (e) {
    e.addEventListener("click", btnToggle);
  });
}

postImageLoad();

async function showTagOnBtnClick(e) {
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Obtener imágenes actualizadas después de esperar
  let imgDivs = document.querySelectorAll("#photo-container .photo");
  let imgTags = [];

  // Iterar sobre todas las imágenes
  imgDivs.forEach(function (imgDiv) {
    // Verificar si la imagen está visible (tiene style.display = "block")
    let computedStyle = window.getComputedStyle(imgDiv);
    if (computedStyle.display === "block") {
      // Obtener los tags de la imagen actual
      let tags = imgDiv.dataset.tags.split(",");
      console.log("Tags de esta imagen:", tags); // Registro de depuración
      imgTags.push(...tags);
    }
  });

  imgTags = [...new Set(imgTags)];
  console.log("Las etiquetas presentes son: " + imgTags);
}

// Asignar la función showTagOnBtnClick a cada botón del aside
asideBtns.forEach(function (e) {
  e.addEventListener("click", showTagOnBtnClick);
});
