var link = document.querySelector(".write-us-open");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");
link.addEventListener("click", function (a) {
  a.preventDefault();
  popup.classList.add("modal-show")
});
close.addEventListener("click", function (a) {
  a.preventDefault();
  popup.classList.remove("modal-show")
});
window.addEventListener("keydown", function (a) {
  a.preventDefault();
  if (a.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show")
    }
  }
});
var mapLink = document.querySelector(".map-open");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
mapLink.addEventListener("click", function (a) {
  a.preventDefault();
  mapPopup.classList.add("modal-show")
});
mapClose.addEventListener("click", function (a) {
  a.preventDefault();
  mapPopup.classList.remove("modal-show")
});
window.addEventListener("keydown", function (a) {
  a.preventDefault();
  if (a.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show")
    }
  }
});