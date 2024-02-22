const photoContainer = document.getElementById("photo-container");
console.log(photoContainer);

function getPhotoElement(photo_id) {
  var jpgExists = checkFileExists(`./img/photo_${photo_id}.jpg`);
  var jpegExists = checkFileExists(`./img/photo_${photo_id}.jpeg`);

  if (jpgExists) {
    return `<a href="#" class="photo">
      <img alt="Photo ${photo_id}" src="./img/photo_${photo_id}.jpg"></a>`;
  } else if (jpegExists) {
    return `<a href="#" class="photo">
      <img alt="Photo ${photo_id}" src="./img/photo_${photo_id}.jpeg"></a>`;
  } else {
    return "No se encontró la imagen.";
  }
}

// Función para verificar si un archivo existe
function checkFileExists(url) {
  var http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  return http.status !== 404;
}

photoContainer.innerHTML = getPhotoElement(3);
