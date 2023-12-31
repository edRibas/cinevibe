'use strict';

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
   navElemArr[i].addEventListener("click", function () {

      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
      document.body.classList.toggle("active");
   });
}

// STICKY HEADER
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
   window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");
});


// PAGE UP
const pageUp = document.querySelector("[data-pageup]");
window.addEventListener("scroll", function () {
   window.scrollY >= 500 ? pageUp.classList.add("active") : pageUp.classList.remove("active");
});