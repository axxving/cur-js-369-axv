// Selecciona el elemento con el id "display" del documento HTML y lo almacena en la variable 'display'
const display = document.querySelector("#display");

// Selecciona todos los elementos <button> del documento HTML y los almacena en la variable 'buttons'
const buttons = document.querySelectorAll("button");

// Inicializa una cadena vacía para almacenar la expresión matemática
let expression = "";

// Itera sobre todos los elementos 'button' encontrados
buttons.forEach((item) => {
  // Asigna un evento 'click' a cada botón
  item.onclick = () => {
    // Verifica si el botón presionado es el botón "C" (borrar todo)
    if (item.id === "c") {
      // Borra el contenido del elemento 'display'
      display.textContent = "";
      // Resetea la expresión a una cadena vacía
      expression = "";
    } else if (item.id === "back") {
      // Si el botón presionado es "back" (retroceso)
      // Obtiene el texto actual del 'display' y lo convierte a cadena
      let string = display.textContent.toString();
      // Borra el último carácter del texto en el 'display'
      display.textContent = string.substr(0, string.length - 1);
      // Borra el último carácter de la expresión
      expression = expression.slice(0, -1);
    } else if (item.id === "equal") {
      // Si el botón presionado es "="
      // Calcula el resultado de la expresión y lo muestra en el 'display'
      display.textContent = calculate(expression);
    } else {
      // Si el botón presionado es cualquier otro que no sea "C", "back" o "="
      // Agrega el texto del botón al contenido del 'display'
      display.textContent += item.textContent;
      // Agrega el texto del botón a la expresión
      expression += item.textContent;
    }
  };
});

// Selecciona el elemento con la clase "theme-toggler" y lo almacena en la variable 'themeToggler'
const themeToggler = document.querySelector(".theme-toggler");
// Selecciona el elemento con la clase "calculator" y lo almacena en la variable 'calculator'
const calculator = document.querySelector(".calculator");

// Inicializa una variable 'isDark' como falsa para rastrear el estado del tema
let isDark = false;

// Agrega un 'listener' para el evento 'click' en el 'themeToggler'
themeToggler.addEventListener("click", () => {
  // Cambia el estado de 'isDark' a su opuesto
  isDark = !isDark;

  // Si 'isDark' es verdadero, agrega la clase 'dark' al elemento 'calculator' para cambiar al tema oscuro
  // Si no, elimina la clase 'dark' para cambiar al tema claro
  if (isDark) {
    calculator.classList.add("dark");
  } else {
    calculator.classList.remove("dark");
  }
});

// Define una función 'calculate' que toma una expresión como argumento y devuelve su resultado
function calculate(expression) {
  try {
    // Evalúa la expresión y devuelve el resultado
    // Utiliza replace() para cambiar "X" (multiplicación) por "*"
    return eval(expression.replace("X", "*"));
  } catch (error) {
    // Si hay un error al evaluar la expresión, devuelve "Error"
    return "Error";
  }
}
