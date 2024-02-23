const photoContainer = document.getElementById("photo-container");

async function renderPhotoElement(photo_id) {
  try {
    const photoElementHTML = await getPhotoElement(photo_id);
    return photoElementHTML; // Devuelve el HTML del elemento de la foto
  } catch (error) {
    console.error("Error al renderizar la foto:", error);
    return ""; // Devuelve una cadena vacía en caso de error
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

async function loadPhotos() {
  let content = `<div class="column">`; // Inicializa content dentro de loadPhotos

  for (let i = 0; i < 20; i++) {
    if (i !== 0 && i % 5 === 0) {
      content += `</div><div class="column">`;
    }

    try {
      // Espera a que se complete la carga de la imagen
      const photoElementHTML = await renderPhotoElement(i + 1);
      // Agrega el HTML de la imagen al contenido
      content += photoElementHTML;
    } catch (error) {
      console.error("Error al cargar la foto:", error);
    }
  }

  // Cierra la última columna después de insertar todas las imágenes
  content += `</div>`;

  // Inserta el contenido HTML en el contenedor
  photoContainer.innerHTML = content;
}

loadPhotos();
