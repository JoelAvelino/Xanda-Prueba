// productos.js

// MENU RESPONSIVE

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});


// BOTONES DE FILTRO

const filterButtons = document.querySelectorAll(".filters button");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

  });

});