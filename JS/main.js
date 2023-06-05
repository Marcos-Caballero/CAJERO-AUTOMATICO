// MENSAJE DE BIENVENIDA

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento h2 por su ID
    let bienvenidaMensaje = document.getElementById('bienvenidaMensaje');

    // Obtener el nombre de usuario desde el almacenamiento local
    let nombreUsuario = localStorage.getItem('nombre');

    // Verificar si se encontró el nombre de usuario y actualizar el contenido del h2
    if (nombreUsuario) {
    bienvenidaMensaje.textContent = `BIENVENIDO DE NUEVO ${nombreUsuario.toUpperCase()}`;
    }
});

