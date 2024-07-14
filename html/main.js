document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento de clic suave para los enlaces del menú
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    // Función para desplazamiento suave
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scroll({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    }
     // Agrega un evento de clic al icono del menú
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const ul = document.querySelector('ul');

    mobileMenuIcon.addEventListener('click', function () {
        ul.classList.toggle('active');
    });
});
