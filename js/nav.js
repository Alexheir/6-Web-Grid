let allNav = document.querySelectorAll(".main-menu a");


function navToggle(e) {
  allNav.forEach(function (btnNav) {
    btnNav.classList.remove("active");
  });
  e.target.classList.add("active");
}

allNav.forEach(function (btnNav) {
  btnNav.addEventListener("click", navToggle);
});

allNav[0].classList.add("active");
