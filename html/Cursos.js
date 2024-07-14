document.addEventListener("DOMContentLoaded", function () {
    // Carga del menú
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector("body").insertAdjacentHTML("afterbegin", data);
            
            // Funcionalidad del botón de las rallas
            const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
            const ul = document.querySelector('ul');

            mobileMenuIcon.addEventListener('click', function () {
                ul.classList.toggle('active');
            });
        });

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
});

function mostrarDiploma(rutaDiploma) {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var diploma = document.getElementById('diploma');

    diploma.data = rutaDiploma;

    // Mostrar transparencia emergente
    overlay.style.display = 'flex';
}

function cerrarDiploma() {
    var overlay = document.getElementById('overlay');
    
    // Ocultar transparencia emergente
    overlay.style.display = 'none';
}
