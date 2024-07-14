document.addEventListener('DOMContentLoaded', function () {
    const titulo = document.getElementById('titulo');

    const textos = ['Bienvenido a mi Portfolio', 'By Mario Barrio Alonso'];
    let index = 0;

    function escribirTexto(elemento, texto, velocidad) {
        let i = 0;
        const intervalo = setInterval(function () {
            elemento.textContent += texto[i];
            i++;
            if (i === texto.length) {
                clearInterval(intervalo);
                setTimeout(function () {
                    borrarTexto(elemento, velocidad);
                }, 1000);
            }
        }, velocidad);
    }

    function borrarTexto(elemento, velocidad) {
        const intervalo = setInterval(function () {
            if (elemento.textContent.length > 0) {
                elemento.textContent = elemento.textContent.slice(0, -1);
            } else {
                clearInterval(intervalo);
                index = (index + 1) % textos.length;
                setTimeout(function () {
                    escribirTexto(elemento, textos[index], velocidad);
                }, 500);
            }
        }, velocidad / 2);
    }

    escribirTexto(titulo, textos[index], 100);
});

function irASeccion(seccion) {
    console.log('Sección seleccionada:', seccion);

    switch (seccion) {
        case 'sobreMi':
            window.location.href = 'Sobre_mi.html';
            break;
        case 'proyectos':
            window.location.href = 'Proyectos.html';
            break;
        case 'cursos':
            window.location.href = 'Cursos.html';
            break;
        case 'laboral':
            window.location.href = 'Laboral.html';
            break;
        case 'habilidades':
            window.location.href = 'habilidades.html';
            break;
        case 'contacto':
            window.location.href = 'Contacto2.html';
        default:
            console.log('Sección no reconocida:', seccion);
            break;
    }
}


