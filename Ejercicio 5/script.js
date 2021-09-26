const display = document.querySelector(".results");

const getNumber = (order) => {
  while (true) {
    let number = +prompt(order);
    if (typeof number === "number") {
      return number;
    }
    alert("Debes ingresar un número");
  }
};

const rawNum1 = getNumber("Ingresa el primer número a calcular");
const rawNum2 = getNumber("Ingresa el segundo número a calcular");
const rawNum3 = getNumber("Ingresa el tercer número a calcular");
const rawNum4 = getNumber("Ingresa el cuarto número a calcular");
const rawNum5 = getNumber("Ingresa el quinto número a calcular");

const operations = (num1, num2, num3, num4, num5) => {
  let totalSum = num1 + num2 + num3 + num4 + num5;
  let average = (num1 + num2 + num3 + num4 + num5) / 5;
  return [totalSum, average];
};

const operationsResults = operations(
  rawNum1,
  rawNum2,
  rawNum3,
  rawNum4,
  rawNum5
);

const results = `<h1>Al ingresar los números: ${rawNum1}, ${rawNum2}, ${rawNum3}, ${rawNum4} y ${rawNum5}:</h1>
<p>El total de su suma es: ${operationsResults[0]}</p>
<p>Su promedio es: ${operationsResults[1]}</p>
`;

display.innerHTML = results;
