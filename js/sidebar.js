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
