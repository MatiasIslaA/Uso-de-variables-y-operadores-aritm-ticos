const display = document.querySelector(".results");

const getNumber = () => {
  while (true) {
    let number = +prompt(
      "Ingrese un número para realizar funciones matemáticas"
    );
    if ((number > 0) & (typeof number === "number")) {
      return number;
    }
    alert("Tu ingreso debe ser un número mayor a 0");
  }
};

const createIfDifferent = (a) => {
  while (true) {
    let numberTest = getNumber();
    if (a == numberTest) {
      alert("Debe ingresar un número diferente al primero");
    } else {
      return numberTest;
    }
  }
};

const num1 = getNumber();
const num2 = createIfDifferent(num1);

const operations = (a, b) => {
  let addition = a + b;
  let sustraction = a - b;
  let division = a / b;
  let multiplication = a * b;
  let remainder = a % b;
  let total = `<h1>Resultados</h1>
                    <p>Suma: ${addition}</p>
                    <p>Resta: ${sustraction}</p>
                    <p>División: ${division}</p>
                    <p>Multiplicación: ${multiplication}</p>
                    <p>Módulo: ${remainder}</p>
                    `;
  return total;
};

const results = operations(num1, num2);

display.innerHTML = results;
