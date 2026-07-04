// =========================================================================
// CAPTURA DE ELEMENTOS DEL DOM (FRONTEND)
// =========================================================================

// Elementos de la pantalla de Iniciar Sesión (index.html)
const loginForm = document.getElementById('loginForm');      // Captura el formulario de login
const loginEmail = document.getElementById('loginEmail');    // Campo de correo electrónico
const loginPassword = document.getElementById('loginPassword'); // Campo de contraseña

// Elementos de la pantalla de Registro de Usuario (registro.html)
const registerForm = document.getElementById('registerForm'); // Captura el formulario de registro
const nameInput = document.getElementById('fullName');        // Campo de nombre completo
const regEmailInput = document.getElementById('regEmail');    // Campo de correo electrónico
const roleSelect = document.getElementById('userRole');       // Selector de rol (anfitrión/cuidador)
const regPasswordInput = document.getElementById('regPassword'); // Campo de contraseña

// Elementos de la pantalla de Crear Solicitud (solicitudes.html)
const requestForm = document.getElementById('requestForm');   // Captura el formulario de solicitudes

// Elementos de la pantalla de Datos del Cuidador (datos_cuidador.html)
const caregiverDataForm = document.getElementById('caregiverDataForm'); // Formulario de datos del cuidador
const cgName = document.getElementById('caregiverName');      // Campo de nombre del cuidador
const cgPhone = document.getElementById('caregiverPhone');    // Campo de teléfono
const cgExp = document.getElementById('caregiverExp');        // Campo de experiencia
const visualSuccessMessage = document.getElementById('visualSuccessMessage'); // Mensaje verde de confirmación

// Expresión regular para validar el formato del correo electrónico
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón para validar correos

// =========================================================================
// FUNCIONES AUXILIARES PARA CONTROLAR ERRORES VISUALES
// =========================================================================
function showError(inputElement, errorElement, message) {
  if (errorElement) {
    errorElement.textContent = message;       // Muestra el mensaje de error
    errorElement.style.display = 'block';     // Hace visible el error
  }
  if (inputElement) {
    inputElement.style.borderColor = '#E74C3C'; // Resalta el campo en rojo
  }
}

function clearError(inputElement, errorElement) {
  if (errorElement) {
    errorElement.textContent = '';            // Limpia el mensaje de error
    errorElement.style.display = 'none';      // Oculta el error
  }
  if (inputElement) {
    inputElement.style.borderColor = 'transparent'; // Quita el borde rojo
  }
}

// =========================================================================
// VALIDACIÓN DEL FORMULARIO DE LOGIN (index.html)
// =========================================================================
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita recarga automática

    let isFormValid = true;
    const emailError = document.getElementById('loginEmailError'); // Mensaje de error correo
    const passwordError = document.getElementById('loginPasswordError'); // Mensaje de error contraseña

    // Validar correo
    if (loginEmail.value.trim() === '') {
      showError(loginEmail, emailError, 'Por favor, escribe tu correo de acceso.');
      isFormValid = false;
    } else {
      clearError(loginEmail, emailError);
    }

    // Validar contraseña
    if (loginPassword.value.trim() === '') {
      showError(loginPassword, passwordError, 'La contraseña no puede quedar vacía.');
      isFormValid = false;
    } else {
      clearError(loginPassword, passwordError);
    }

    // Si todo está correcto, simulamos validación
    if (isFormValid) {
      const emailIngresado = loginEmail.value.trim();
      const passwordIngresada = loginPassword.value.trim();

      // Usuarios de ejemplo
      if (emailIngresado === 'anfitrion@gmail.com' && passwordIngresada === '123456') {
        alert('✅ Inicio de sesión exitoso. Bienvenido al panel de Anfitrión.');
        window.location.href = 'solicitudes.html'; // Redirige al panel de anfitrión
      } else if (emailIngresado === 'cuidador@gmail.com' && passwordIngresada === '123456') {
        alert('✅ Inicio de sesión exitoso. Bienvenido al panel de Cuidador.');
        window.location.href = 'postulaciones.html'; // Redirige al panel de cuidador
      } else {
        alert('❌ Correo o contraseña incorrectos. Verifica tus datos e inténtalo nuevamente.');
      }
    }
  });
}

// =========================================================================
// VALIDACIÓN DEL FORMULARIO DE REGISTRO (registro.html)
// =========================================================================
if (registerForm) {
  registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let isFormValid = true;
    const nameError = document.getElementById('nameError');       // Error nombre
    const regEmailError = document.getElementById('regEmailError'); // Error correo
    const roleError = document.getElementById('roleError');       // Error rol
    const regPasswordError = document.getElementById('regPasswordError'); // Error contraseña

    // Validar nombre
    if (nameInput.value.trim() === '') {
      showError(nameInput, nameError, 'El nombre completo es obligatorio.');
      isFormValid = false;
    } else {
      clearError(nameInput, nameError);
    }

    // Validar correo
    if (regEmailInput.value.trim() === '') {
      showError(regEmailInput, regEmailError, 'El correo electrónico es requerido.');
      isFormValid = false;
    } else if (!emailRegex.test(regEmailInput.value.trim())) {
      showError(regEmailInput, regEmailError, 'Ingresa un correo electrónico válido.');
      isFormValid = false;
    } else {
      clearError(regEmailInput, regEmailError);
    }

    // Validar rol
    if (roleSelect.value === '') {
      showError(roleSelect, roleError, 'Debes elegir un rol para continuar.');
      isFormValid = false;
    } else {
      clearError(roleSelect, roleError);
    }

    // Validar contraseña
    if (regPasswordInput.value.trim() === '') {
      showError(regPasswordInput, regPasswordError, 'Asigna una contraseña de seguridad.');
      isFormValid = false;
    } else if (regPasswordInput.value.trim().length < 6) {
      showError(regPasswordInput, regPasswordError, 'La contraseña debe tener mínimo 6 caracteres.');
      isFormValid = false;
    } else {
      clearError(regPasswordInput, regPasswordError);
    }

    // Redirección según rol
    if (isFormValid) {
      const userRole = roleSelect.value;
      if (userRole === 'anfitrion') {
        alert('✨ ¡Registro Exitoso! Redirigiendo al panel de Anfitrión...');
        window.location.href = 'solicitudes.html';
      } else if (userRole === 'cuidador') {
        alert('✨ ¡Registro Exitoso! Redirigiendo al panel de Cuidador...');
        window.location.href = 'postulaciones.html';
      }
    }
  });
}

// =========================================================================
// VALIDACIÓN DEL FORMULARIO DE SOLICITUDES (solicitudes.html)
// =========================================================================
if (requestForm) {
  requestForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let isFormValid = true;
    const titleInput = document.getElementById('requestTitle');
    const descInput = document.getElementById('requestDesc');
    const startInput = document.getElementById('startDate');
    const endInput = document.getElementById('endDate');

    const titleError = document.getElementById('titleError');
    const descError = document.getElementById('descError');
    const startError = document.getElementById('startError');
    const endError = document.getElementById('endError');

    // Validar Título
    if (titleInput.value.trim() === '') {
      showError(titleInput, titleError, 'El título de la solicitud es obligatorio.');
      isFormValid = false;
    } else {
      clearError(titleInput, titleError);
    }

    // Validar Descripción
    if (descInput.value.trim() === '') {
      showError(descInput, descError, 'Debes escribir una descripción detallada.');
      isFormValid = false;
    } else {
      clearError(descInput, descError);
    }

    // Validar Fecha de Inicio
    if (startInput.value === '') {
      showError(startInput, startError, 'Selecciona la fecha de inicio.');
      isFormValid = false;
    } else {
      clearError(startInput, startError);
    }

    // Validar Fecha de Fin
    if (endInput.value === '') {
      showError(endInput, endError, 'Selecciona la fecha de finalización.');
      isFormValid = false;
    } else if (startInput.value !== '' && endInput.value < startInput.value) {
      showError(endInput, endError, 'La fecha de fin no puede ser anterior al inicio.');
      isFormValid = false;
    } else {
      clearError(endInput, endError);
    }

    // Si todo es válido
    if (isFormValid) {
      alert('🚀 ¡Felicidades! Tu solicitud ha sido publicada con éxito.');
      requestForm.reset();
    }
  });
}

// =========================================================================
// ACCIÓN DE SELECCIÓN EN BANCO DE OFERTAS (postulaciones.html)
// =========================================================================
function applyToJob(jobName) {
  alert(`📩 ¡Postulación Enviada con Éxito!\n\nHas aplicado formalmente a: "${jobName}".\nEl anfitrión será notificado para revisar tu perfil.`);
  window.location.href = "datos_cuidador.html";
}
