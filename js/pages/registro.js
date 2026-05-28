// registro.js

const form =
document.querySelector(".register-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  window.location.href = "panel.html";

});