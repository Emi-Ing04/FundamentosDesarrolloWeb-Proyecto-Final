/* JavaScript para el menú de navegación */
const btnMenu = document.getElementById('btn-menu');
const navLinks = document.querySelector('.nav-links');

// Agregamos un "escuchador de eventos" (como un sensor táctil) al botón
btnMenu.addEventListener('click', () => {
    // toggle funciona como un interruptor de encendido/apagado para la clase 'active'
    navLinks.classList.toggle('active');
});