const form = document.querySelector(".myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validar campos requeridos
  if (name === "") {
    alert("Por favor, ingresa tu nombre.");
    nameInput.focus();
    return;
  }

  if (email === "") {
    alert("Por favor, ingresa tu correo electrónico.");
    emailInput.focus();
    return;
  }

  if (message === "") {
    alert("Por favor, ingresa tu mensaje.");
    messageInput.focus();
    return;
  }

  // Aquí puedes agregar tu lógica para enviar el formulario

  // Limpiar los campos después del envío exitoso
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  alert("Formulario enviado correctamente!");
});
