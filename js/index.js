// Datos del usuario
const userName = "arodrigue96";
const password = "QM%o*^Lw@C82*h9Ufea";
const passwordCheck = "QM%o*^Lw@C82*h9Ufea";
const userAge = 28;

// Expresiones regulares utilizadas
const containUpperCase = /[A-Z]/;
const containNumber = /[0-9]/;

// Comprobación userName
console.log(`El nombre de usuario es valido: ${userName.length >= 8}`);

// Comprobación contraseña: NO SE COMO HACER ESTE PASO. He mirado en la página de Regex que pasaste y creo que son correctas pero no me funciona.
console.log(
  "La contraseña es válida:",
  containUpperCase.includes(password) && containNumber.includes(password)
);

// Comprobación contraseña igual que la primera
console.log(
  `La repetición de la contraseña es válida ${password === passwordCheck}`
);
console.log();

// Comprobación si es mayor de edad
console.log("Es mayor de edad:", userAge >= 18);
