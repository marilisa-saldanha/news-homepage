const navbar = document.querySelector('nav');
const openMenu = document.getElementById('menuBurguer');
const closeMenu = document.getElementById('closeMenu');

openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);

function showMenu() {
  navbar.classList.add("open");
}

function hideMenu() {
  navbar.classList.remove("open");
}


