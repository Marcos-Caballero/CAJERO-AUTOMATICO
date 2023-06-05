// usuarios para acceder
let usuariosAcceso = [
    { usuario: 'Maicol', contraseña: 'hacker123', saldo: 800 },
    { usuario: 'Jose', contraseña: 'josselcrack777', saldo: 300 },
    { usuario: 'Jenn', contraseña: 'jennlamaschula999', saldo: 620 }
];

//vinculacion del HTML con el JS

let loginForm = document.getElementById('LoginForm');
let userNameInput = document.getElementById('userNameInput');
let userPasswordInput = document.getElementById('userPasswordInput');
let loginButton = document.getElementById('loginButton');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    let userName = userNameInput.value;
    let password = userPasswordInput.value;

    let usuarioEncontrado = usuariosAcceso.find(function(usuario) {
        return usuario.usuario === userName && usuario.contraseña === password;
    });

    if (usuarioEncontrado) {
        // Guardar el nombre de usuario en el almacenamiento local
        localStorage.setItem('nombre', usuarioEncontrado.usuario);
    
        // Redireccionar a la página de inicio
        window.location.href = 'PAGES/inicio.html';
    } else {
        alert('Usuario no registrado. Por favor, verifique sus credenciales.');
    }
    });

