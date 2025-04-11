// Guardar usuario nuevo
function register() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const message = document.getElementById('registerMessage');
  
    if (!username || !password) {
      message.textContent = "Por favor, completa todos los campos.";
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Verifica si ya existe
    if (users.some(u => u.username === username)) {
      message.textContent = "El usuario ya existe.";
      return;
    }
  
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    message.style.color = "green";
    message.textContent = "Usuario registrado con éxito. Redireccionando...";
  
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  }
  
  // Login de usuario
  function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const found = users.find(u => u.username === user && u.password === pass);
  
    if (found) {
      message.style.color = "green";
      message.textContent = "Login exitoso. Redireccionando...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      message.style.color = "red";
      message.textContent = "Usuario o contraseña incorrectos.";
    }
  }
  