// USUARIOS PARA ACCEDER Y DATOS
let usuariosAcceso = [
    { usuario: 'Maicol', contraseña: 'hacker123', saldo: 800 },
    { usuario: 'Jose', contraseña: 'josselcrack777', saldo: 300 },
    { usuario: 'Jenn', contraseña: 'jennlamaschula999', saldo: 620 }
];

// VINCULACION DE HTML Y JS

let loginForm = document.getElementById('LoginForm');
let userNameInput = document.getElementById('userNameInput');
let userPasswordInput = document.getElementById('userPasswordInput');
let loginButton = document.getElementById('loginButton');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let userName = userNameInput.value;
    let password = userPasswordInput.value;

    let usuarioEncontrado = usuariosAcceso.find(function(usuario) {
        return usuario.usuario === userName && usuario.contraseña === password;
    });

    if (usuarioEncontrado) {
        // GUARDAR DATOS EN EL ALMACENAMIENTO LOCAL
        localStorage.setItem('nombre', usuarioEncontrado.usuario);
        localStorage.setItem('saldo', usuarioEncontrado.saldo);
    
        // REDIRIGIR A LA PAGINA
        window.location.href = 'PAGES/inicio.html';
    } else {
        alert('Credenciales incorrectas.');
    }
    });

