// Hamburger
let hamburger = document.querySelector(".hamburger"),
    header_menu = document.querySelector(".header-menu"),
    head_menu = document.querySelector(".head-menu");
hamburger.onclick = function() {
    hamburger.classList.toggle("hamburger_open"),
    header_menu.classList.toggle("header_block"),
    head_menu.classList.toggle("adapted_menu");
}