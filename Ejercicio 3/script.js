const display = document.querySelector(".results");

const getNumber = () => {
  while (true) {
    let number = +prompt(
      "Grados Celsius que desee convertir a grados Kelvin y Fahrenheit."
    );
    if ((number >= 0) & (typeof number === "number")) {
      return number;
    }
    alert("Tu ingreso debe ser un número mayor a 0");
  }
};

const convertToKelvinAndFahrenheit = (celsius) => {
  let kelvin = celsius + 273.15;
  let fahrenheit = (celsius * 9) / 5 + 32;
  return [kelvin, fahrenheit];
};

const celsius = getNumber();

const conversion = convertToKelvinAndFahrenheit(celsius);

const results = `<h1>${celsius} Grados Celsius son:</h1>
<p>${conversion[0]} Grados Kelvin</p>
<p>${conversion[1]} Grados Fahrenhei</p>
`;

display.innerHTML = results;
