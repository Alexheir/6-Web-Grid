const photoContainer = document.getElementById("photo-container");

async function renderPhotoElement(photo_id) {
  try {
    const photoElementHTML = await getPhotoElement(photo_id);
    photoContainer.innerHTML += photoElementHTML;
  } catch (error) {
    console.error("Error al renderizar la foto:", error);
  }
}

async function getPhotoElement(photo_id) {
  var jpgExists = await checkFileExists(`./img/photo_${photo_id}.jpg`);
  var jpegExists = await checkFileExists(`./img/photo_${photo_id}.jpeg`);

  if (jpgExists) {
    return `<a href="#" class="photo">
    <img alt="Photo ${photo_id}" src="./img/photo_${photo_id}.jpg"></a>`;
  } else if (jpegExists) {
    return `<a href="#" class="photo">
    <img alt="Photo ${photo_id}" src="./img/photo_${photo_id}.jpeg"></a>`;
  } else {
    throw new Error("No se encontró la imagen.");
  }
}

async function checkFileExists(url) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch (error) {
    console.error("Error al verificar la existencia del archivo:", error);
    return false;
  }
}

function loadPhotos() {
  for (let i = 0; i <= 20; i++) {
    renderPhotoElement(i);
  }
}

loadPhotos();

// Seleccionar todos los botones y el botón activo
let btnAll = document.querySelectorAll(".btn");
let btnActive = document.querySelector(".btn.active");

// Función para mostrar/ocultar los botones
function display() {
  btnAll.forEach((element) => {
    if (!element.classList.contains("display")) {
      element.classList.toggle("hidden");
    }
  });
}
