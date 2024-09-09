// Datos del usuario:
const userName = "arodrigue96";
const password = "auenjkldscja3";
const repeatedPassword = "auenjkldscja3";
const userAge = 28;

// Expresiones regulares utilizadas:
const containNumber = /[0-9]/;

// Comprobación caracteres userName:
const isValidUsername = userName.length >= 5;

// Comprobación contraseña:
const passwordToLowerCase = password.toLowerCase();
const isValidPassword =
  password.length >= 8 &&
  password !== passwordToLowerCase &&
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
