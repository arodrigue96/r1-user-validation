// Datos del usuario:
const userName = "arodrigue96";
const password = "Üuenjkldscja3";
const repeatedPassword = "Üuenjkldscja3";
const userAge = 28;

// Expresiones regulares utilizadas:
const containUpperCase = /\p{Lu}+/u;
const containNumber = /[0-9]/;

// Comprobación caracteres userName:
const isValidUsername = userName.length >= 5;

// Comprobación contraseña:
const isValidPassword =
  password.length >= 8 &&
  containUpperCase.test(password) &&
  containNumber.test(password);

// Comprobación contraseña sea igual que la primera:
const isSamePassword = password === repeatedPassword;

// Comprobación si es mayor de edad:
const isAdult = userAge >= 18;

// Consola:
console.log("El nombre de usuario es valido:", isValidUsername);
console.log("La contraseña es válida:", isValidPassword);
console.log("La repetición de la contraseña es válida:", isSamePassword);
console.log("Es mayor de edad:", isAdult);
