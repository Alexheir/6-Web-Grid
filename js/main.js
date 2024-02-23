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

// Agregar evento click al botón activo para mostrar/ocultar los botones
btnActive.addEventListener("click", display);

// Función para manejar el click en los botones
function btnClick(e) {
  const target = e.target;

  // Si el elemento no tiene clase, intenta obtener la clase del padre
  let className = target.classList.length > 0 ? target.classList[0] : "";
  if (className.trim() === "") {
    const parentClassName = target.parentNode.className;
    if (parentClassName.trim() !== "") {
      className = parentClassName;
    } else {
      className = "sin-clase";
    }
  }

  // Si el elemento clicado es un botón
  if (target.classList.contains("btn") || target.classList.contains("")) {
    // Remover la clase "active" de todos los botones y agregarla al clicado
    btnAll.forEach((e) => e.classList.remove("active"));
    target.classList.add("active");
    // Mover elemento al primer puesto dentro de su contenedor
    const parentContainer = target.parentNode;
    parentContainer.prepend(target);
    if(!target.classList.contains("active")) {
      // Remover la clase "active" de todos los botones y agregarla al clicado
      btnAll.forEach((e) => e.classList.add("hidden"))}
  }
  console.log(className);
}

// Agregar evento click a todos los botones
btnAll.forEach(function (e) {
  e.addEventListener("click", btnClick);
});
