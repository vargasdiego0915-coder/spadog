
const formulario = document.getElementById("formularioReserva");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const reserva = {

        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        mascota: document.getElementById("mascota").value,
        raza: document.getElementById("raza").value,
        servicio: document.getElementById("servicio").value,
        fecha: document.getElementById("fecha").value,
        recogida: document.getElementById("recogida").value,
        direccion: document.getElementById("direccion").value,
        mensaje: document.getElementById("mensaje").value

    };

    sessionStorage.setItem("reservaDogSpa", JSON.stringify(reserva));

    document.getElementById("mensajeReserva").textContent =
        "¡Tu solicitud se guardó correctamente! Gracias por confiar en DogSpa.";

    formulario.reset();

});
