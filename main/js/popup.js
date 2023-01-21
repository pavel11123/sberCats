const popup = () => {
  const btnClosePopup = document.querySelector(".popup__close");
  const btnOpenPopup = document.querySelector(".btn__add-cats");
  const popupContent = document.querySelector(".popup");

  btnOpenPopup.addEventListener("click", popupMain);
  btnClosePopup.addEventListener("click", popupMain);

  function popupMain() {
    if (popupContent.classList.contains("popup__active")) {
      popupContent.classList.remove("popup__active");
    } else {
      popupContent.classList.add("popup__active");
    }
  }
};
popup();
