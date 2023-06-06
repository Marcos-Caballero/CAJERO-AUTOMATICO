// MENSAJE DE BIENVENIDA

document.addEventListener('DOMContentLoaded', function() {
    let bienvenidaMensaje = document.getElementById('bienvenidaMensaje');
    let nombreUsuario = localStorage.getItem('nombre');
    if (nombreUsuario) {
    bienvenidaMensaje.textContent = `BIENVENIDO DE NUEVO ${nombreUsuario.toUpperCase()}`;
    }
});

/* SALDO Y MODALES */

let saldoButton = document.getElementById('saldo-button');
let retiroButton = document.getElementById('retiro-button');
let depositoButton = document.getElementById('deposito-button');

let saldoModal = document.getElementById('saldoModal');
let depositoModal = document.getElementById('depositoModal');
let retiroModal = document.getElementById('retiroModal');

const saldoValue = document.getElementById('saldoValue');


// CERRAR EL MODAL
let closeButtons = document.getElementsByClassName('close');
let modals = document.getElementsByClassName('modal');

// MOSTRAR MODAL DEL SALDO
saldoButton.addEventListener('click', function() {
    saldoModal.style.display = 'block';
});

saldoButton.addEventListener('click', function() {
    const saldo = localStorage.getItem('saldo');
    saldoValue.textContent = `$${saldo}`;
    saldoModal.style.display = 'block';
});

// MOSTRAR MODAL DEL RETIRO
retiroButton.addEventListener('click', function() {
    retiroModal.style.display = 'block';
});

// MOSTRAR MODAL DEL DEPOSITO
depositoButton.addEventListener('click', function() {
    depositoModal.style.display = 'block';
});

// RETIRAR DINERO
let retiroConfirmarButton = document.getElementById('retiroConfirmar');
let retiroInput = document.getElementById('retiroInput');

// CONDICIONALES DE RETIRO
retiroConfirmarButton.addEventListener('click', function() {
    let cantidadRetiro = parseInt(retiroInput.value);

    if (isNaN(cantidadRetiro) || cantidadRetiro <= 0) {
        alert('Ingrese una cantidad válida para el retiro.');
        return;
    }

    let saldoActual = parseInt(localStorage.getItem('saldo'));

    if (cantidadRetiro > saldoActual) {
        alert('No tienes suficiente saldo para realizar el retiro.');
        return;
    }

    if (saldoActual - cantidadRetiro < 10) {
        alert('El saldo mínimo permitido es de $10. No es posible realizar el retiro.');
        return;
    }

    let saldoNuevo = saldoActual - cantidadRetiro;
    localStorage.setItem('saldo', saldoNuevo.toString());

    alert('Retiro exitoso. Nuevo saldo: $' + saldoNuevo);

    closeModal();
});

// DEPOSITAR DINERO
let depositoConfirmarButton = document.getElementById('depositoConfirmar');
let depositoInput = document.getElementById('depositoInput');

// CONDICIONALES DE DEPOSITO
depositoConfirmarButton.addEventListener('click', function() {
    let cantidadDeposito = parseInt(depositoInput.value);

    if (isNaN(cantidadDeposito) || cantidadDeposito <= 0) {
        alert('Ingrese una cantidad válida para el depósito.');
        return;
    }

    let saldoActual = parseInt(localStorage.getItem('saldo'));

    if (saldoActual + cantidadDeposito > 990) {
        alert('El saldo máximo permitido es de $990. No es posible realizar el depósito.');
        return;
    }

    let saldoNuevo = saldoActual + cantidadDeposito;
    localStorage.setItem('saldo', saldoNuevo.toString());

    alert('Depósito exitoso. Nuevo saldo: $' + saldoNuevo);

    closeModal();
});


// CERRAR MODALES "X"
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function() {
        closeModal();
    });
}

// CERRAR MODALES "CLIC FUERA"
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        closeModal();
    }
});

// Función para cerrar todos los modales
function closeModal() {
    for (let i = 0; i < modals.length; i++) {
        modals[i].style.display = 'none';
    }
}