const ADMIN_CREDENTIALS = {
  name: "admin@admin",
  pass: "admin"
};
// Document object model
const nameField = document.querySelector(".name-field");
const passwordField = document.querySelector(".password-field");
const nameFieldErrorBlock = document.querySelector(".name-field-error"); // выбирает элемент из DOM(html)
const passwordFieldErrorBlock = document.querySelector(".password-field-error");
const contentBlock = document.querySelector(".content");

function showPassword() {
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}

function logIn() {
  const userName = nameField.value;
  const userPassword = passwordField.value;

  if (userName === ADMIN_CREDENTIALS.name) {
    if (userPassword === ADMIN_CREDENTIALS.pass) {
      document.body.textContent = "Welcome";
    } else {
      passwordField.style.border = "1px solid red"; // меняет стили
      passwordFieldErrorBlock.textContent = "Password is wrong"; // Записует текст
    }
  } else {
    nameField.style.border = "1px solid red"; // меняет стили
    nameFieldErrorBlock.textContent = "Name is wrong"; // Записует текст внутрь элемента
  }
}

function clearNameError() {
  nameField.style.border = "solid 0.6px rgba(208, 208, 208, 0.5)";
  nameFieldErrorBlock.textContent = "";
}

function clearPasswordError() {
  passwordField.style.border = "solid 0.6px rgba(208, 208, 208, 0.5)";
  passwordFieldErrorBlock.textContent = "";
}
