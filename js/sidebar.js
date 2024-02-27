async function postImageLoad() {
  await new Promise((resolve) => {
    window.addEventListener("load", resolve);
  });

  let asideBtns = document.querySelectorAll("aside .btn");
  let photoDivs = document.querySelectorAll("#photo-container .photo");

  function btnToggle(e) {
    asideBtns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");

    //Captura de tag desde el nombre del btn
    let textBtn = e.currentTarget.innerText.trim();

    //Filtro de imagenes según Data-Tag
    photoDivs.forEach(function (div) {
      if (textBtn === "All" || div.dataset.tags.includes(textBtn)) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  }

  asideBtns.forEach(function (e) {
    e.addEventListener("click", btnToggle);
  });
}

postImageLoad();
