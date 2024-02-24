function mostrarOpciones(id) {
  var opciones = document.getElementById(id);
  if (opciones.style.display === "none" || opciones.style.display === "") {
    opciones.style.display = "block";
  } else {
    opciones.style.display = "none";
  }
}

// Función para seleccionar una opción y reemplazarla en el menú principal
function seleccionarOpcion(id, opcion) {
  var menuPrincipal = document.getElementById(id);
  var opciones = document.getElementById("desplegable");
  menuPrincipal.innerText = opcion;
  opciones.style.display = "none"; // Oculta las opciones después de seleccionar una
}

// Añadir manejadores de eventos
document.getElementById("opcion1").addEventListener("click", function () {
  mostrarOpciones("desplegable");
});

var opciones = document.querySelectorAll("#desplegable > div");
opciones.forEach(function (opcion) {
  opcion.addEventListener("click", function () {
    var textoOpcion = this.innerText;
    seleccionarOpcion("opcion1", textoOpcion);
  });
});
