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

function mostrarInformacion(proyecto) {
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var popupImagen = document.getElementById('popupImagen');
    var popupInformacion = document.getElementById('popupInformacion');
    var contenido = obtenerContenido(proyecto);

    // Mostrar transparencia emergente
    overlay.style.display = 'flex';
    // Agregar contenido al popup
    popupImagen.src = obtenerImagen(proyecto);
    popupInformacion.innerHTML = contenido;
}

function cerrarInformacion() {
    var overlay = document.getElementById('overlay');
    // Ocultar transparencia emergente
    overlay.style.display = 'none';
}

function obtenerContenido(proyecto) {
    // Puedes personalizar el contenido aquí según el proyecto
    if (proyecto === 'Totora Surf School') {
        return '<h2>Totora Surf School</h2>' +
            '<p><strong>Empresa:</strong> Totora Surf School</p>' +
            '<p><strong>Cargo:</strong> Monitor de Surf</p>' +
            '<p><strong>Periodo Laboral:</strong> Veranos </p>' +
            '<p><strong>Descripción del Puesto:</strong> Tras mi comienzo en la competición, se me dio la oportunidad de seguir creciendo junto a mi escuela. A día de hoy, en verano enseño a surfear a cualquiera que venga con ganas de aprender y crecer dentro de este mundo tan bonito y aventurero.</p>';
    } else if (proyecto === 'Técnico de Motor') {
        return '<h2>Técnico de Motor</h2>' +
            '<p><strong>Empresa:</strong> Técnico de Motor</p>' +
            '<p><strong>Cargo:</strong> Paramétrico</p>' +
            '<p><strong>Periodo Laboral:</strong> Verano</p>' +
            '<p><strong>Descripción del Puesto:</strong> Mientras termino de cursar mi grado universitario, a modo de jobbie, intento exprimir al máximo algunos de los motores de karting de conocidos probando las mejoras en el circuito "La Roca" en cantabria  </p>';
    } else {
        return '<h2>Proyecto Desconocido</h2>';
    }
}

function obtenerImagen(proyecto) {
    // Puedes personalizar la imagen aquí según el proyecto
    if (proyecto === 'Totora Surf School') {
        return 'https://www.totorasurfschool.com/wp-content/uploads/2019/03/cropped-favicon.png';
    } else if (proyecto === 'Técnico de Motor') {
        return 'Fotos/Karting.png';
    } else {
        return '';
    }
}

function mostrarImagen(proyecto) {
    var imgSrc = obtenerImagen(proyecto);
    if (imgSrc) {
        var imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        document.getElementById('imagenProyecto').appendChild(imgElement);
    }
}

// Llamar a la función con el proyecto deseado
mostrarImagen('Técnico de Motor');