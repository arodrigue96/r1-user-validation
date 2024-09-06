// Datos del usuario
const userName = "arodrigue96";
const password = "Qm%o*^lw@c82*h9ufea";
const passwordCheck = "Qm%o*^lw@c82*h9ufea";
const userAge = 28;

// Expresiones regulares utilizadas
const containUpperCase = /[A-Z]/;
const containNumber = /[0-9]/;

// Comprobación userName
console.log(`El nombre de usuario es valido: ${userName.length >= 8}`);

// Comprobación contraseña: NO SE COMO HACER ESTE PASO. He mirado en la página de Regex que pasaste y creo que son correctas pero no me funciona.
console.log(
  "La contraseña es válida:",
  containUpperCase.test(password) && containNumber.test(password)
);

// Comprobación contraseña igual que la primera
console.log(
  `La repetición de la contraseña es válida: ${password === passwordCheck}`
);
// Comprobación si es mayor de edad
console.log("Es mayor de edad:", userAge >= 18);
