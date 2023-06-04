//JS de clase 4 (Botón)//
function showAlert() { alert("¡Hola, esta es una alerta desde JavaScript!"); }

const form = document.getElementById('myForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  validateForm();
});

//JS de clase 5 (Formulario)//
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}
function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}

//JS de clase 7 (Menú)//
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})