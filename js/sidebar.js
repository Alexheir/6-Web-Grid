let allBtns = document.querySelectorAll(".btn");

function btnToggle(e) {
  allBtns.forEach(function (btn) {
    btn.classList.remove("active");
  });
  // Agregar la clase 'active' al elemento <li> padre del <a> clickeado
  e.target.parentElement.classList.add("active");
}

allBtns.forEach(function (btn) {
  btn.querySelector("a").addEventListener("click", btnToggle);
});

allBtns[0].classList.add("active")
