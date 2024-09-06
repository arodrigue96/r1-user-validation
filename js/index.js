// Datos del usuario:
const userName = "arodrigue96";
const password = "Qm%o*^lw@c82*h9ufea";
const repeatedPassword = "Qm%o*^lw@c82*h9ufea";
const userAge = 28;

// Expresiones regulares utilizadas:
const containUpperCase = /[A-Z]/;
const containNumber = /[0-9]/;

// Comprobación caracteres userName:
const userCheck = userName.length >= 8;

// Comprobación contraseña upperCase:
const passwordUpperLetterCheck =
  containUpperCase.test(password) && containNumber.test(password);

// Comprobación contraseña sea igual que la primera:
const samePassword = password === repeatedPassword;

// Comprobación si es mayor de edad:
const isAdult = userAge >= 18;

// Consola:
console.log("El nombre de usuario es valido:", userCheck);
console.log("La contraseña es válida:", passwordUpperLetterCheck);
console.log("La repetición de la contraseña es válida:", samePassword);
console.log("Es mayor de edad:", isAdult);
