function loadJSON(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Hubo un problema con el archivo: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      // Acciones a realizar con los datos JSON
      let photoContainer = document.querySelector("#photo-container");

      // Cargar las primeras tres imágenes dentro del contenedor
      for (let i = 0; i < Math.min(data.length, 3); i++) {
        let imageData = data[i];
        createImageElement(imageData, photoContainer);
      }

      // Precarga: cargar el resto de las imágenes de manera consecutiva
      for (let i = 3; i < data.length; i++) {
        let imageData = data[i];
        preloadImage(imageData, photoContainer);
      }
    })
    .catch((error) => {
      console.error("Error al cargar JSON", error);
    });
}

function createImageElement(imageData, container) {
  // Crear un nuevo div con la clase .photo
  let div = document.createElement("div");
  div.classList.add("photo");
  div.dataset.tags = JSON.stringify(imageData.tags); // Convertir el array de tags a una cadena JSON

  // Crear contenedor de enlaces una vez
  let tagContainer = document.createElement("div");
  tagContainer.classList.add("tagContainer");
  div.appendChild(tagContainer);

  // Luego, agregar todos los enlaces al contenedor
  imageData.tags.forEach((tag) => {
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = tag;
    tagContainer.appendChild(a);
  });

  // Crear una imagen y establecer su atributo src
  let img = document.createElement("img");

  img.setAttribute("src", imageData.url);

  // Agregar la imagen al div
  div.appendChild(img);

  // Agregar el div al contenedor de fotos
  container.appendChild(div);
}

function preloadImage(imageData, container) {
  let img = new Image();
  img.src = imageData.url;
  // Agregar la imagen precargada al contenedor después de cargarse
  img.onload = function () {
    createImageElement(imageData, container);
  };
}

loadJSON("./data/dataImg.json");
document.dispatchEvent(new Event("imgsLoaded"));

//Función para mostrar tags al clickar en las imágenes

async function showImgTags(e) {
  await new Promise((resolve) => {
    window.addEventListener("load", resolve);
  });

  let imgDivs2 = document.querySelectorAll("#photo-container .photo");

  function showtag(e) {
    console.log(e.currentTarget.dataset.tags);
  }

  imgDivs2.forEach(function (img) {
    img.addEventListener("click", showtag);
    /* img.dataset.tags */
  });
}

showImgTags();
