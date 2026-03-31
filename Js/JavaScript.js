// Seleccionamos el botón y la lista de enlaces
const botonMenu = document.querySelector('.boton');
const navLinks = document.querySelector('.nav-links');

// Le decimos que al hacer clic, ponga o quite la clase 'active'
botonMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});