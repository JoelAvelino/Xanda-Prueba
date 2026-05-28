// contacto.js

// MENU RESPONSIVE

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});


// FORMULARIO

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  alert("Mensaje enviado correctamente");

});