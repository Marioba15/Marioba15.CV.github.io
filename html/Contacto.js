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

    // Inicialización de la biblioteca de prefijos de teléfonos
    var input = document.querySelector("#telefono");
    var iti = window.intlTelInput(input, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.12/js/utils.js",
        initialCountry: "auto",
        separateDialCode: true,
        geoIpLookup: function (callback) {
            $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "ES";
                callback(countryCode);
            });
        }
    });

    // Agregar evento de cambio para mostrar/ocultar el campo de "Otro Motivo"
    var motivoSelect = document.getElementById('motivo');
    var otroMotivoDiv = document.querySelector('.otroMotivo');

    motivoSelect.addEventListener('change', function () {
        otroMotivoDiv.style.display = motivoSelect.value === 'otro' ? 'block' : 'none';
    });

    // Agregar evento de clic al botón de enviar formulario
    var enviarBtn = document.querySelector('#enviarBtn');
    enviarBtn.addEventListener('click', function () {
        enviarFormulario();
    });

    // Función para enviar el formulario
    function enviarFormulario() {
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var motivo = motivoSelect.value;
        var otroMotivo = document.getElementById('otroMotivo').value;
        var mensaje = document.getElementById('mensaje').value;

        if (motivo === 'otro' && otroMotivo.trim() === '') {
            alert('Por favor, especifica el motivo en el campo "Otro".');
            return;
        }
        else if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
            alert('Por favor, completa los campos obligatorios.');
        } else {
            alert('Formulario enviado correctamente');
            document.getElementById('contactForm').reset();
        }
    }
});