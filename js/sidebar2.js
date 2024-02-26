document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.querySelector("#sidebar2");
  let listOptions = dropdown.querySelectorAll(".dropdown-content li");

  //Función click en cada opción
  function handleOptionClick(optionClicked) {
    return function () {
      //Obtener el texto de la opción a la que se hizo click
      let selectedOptionText = optionClicked.innerText;

      //Mostrar el texto dentro del espacio del botón
      dropdown.querySelector(".drop-btn").innerText = selectedOptionText;

      //Eliminar la class "Selected" de las opciones
      listOptions.forEach(function (opt) {
        opt.classList.remove("selected");
      });

      //Agrega "selected" a la opción clickeada a través del parámetro optionClicked de la función handleOptionClick
      optionClicked.classList.add("selected");

      //Contrae la lista
      toggleListOptions();

      //Remueve el enfoque
      dropdown.querySelector(".drop-btn").blur();
    };
  }

  //Asignación de eventos click a la lista de opciones
  listOptions.forEach(function (e) {
    e.addEventListener("click", handleOptionClick(e));
  });

  //Opción dentro del botón por defecto, llamamos a la función, le pasamos el primer elemento de la lista y luego ejecutamos la función interna del handelOptionClick haciendo un llamado inmediatamaente después ()
  handleOptionClick(listOptions[0])();

  //Función para contraer automaticamente la lista

  dropdown
    .querySelector(".drop-btn")
    .addEventListener("click", toggleListOptions);

  function toggleListOptions() {
    let dropdownContent = document.querySelector(".dropdown-content");
    dropdownContent.style.display =
      dropdownContent.style.display === "none" ? "block" : "none";
  }
});
