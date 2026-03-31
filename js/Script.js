// 1. Seleccionamos las piezas usando la CLASE, no el ID, para que sea más flexible y reutilizable
const btnMenu = document.querySelector('.boton');
const navLinks = document.querySelector('.nav-links');
const enlaces = document.querySelectorAll('.nav-links a');

// 2. Comprobamos que el botón exista antes de encender el mecanismo
if (btnMenu) {
    btnMenu.addEventListener('click', () => {
        // Alternamos las clases para abrir/cerrar
        navLinks.classList.toggle('active');
        btnMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
}

// 3. El auto-cierre al hacer clic en un enlace
if (enlaces) {
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            navLinks.classList.remove('active');
            btnMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}