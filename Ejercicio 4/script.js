const display = document.querySelector(".results");

const getDays = () => {
  while (true) {
    let number = +prompt("Ingresa un número de días");
    if ((number > 0) & (typeof number === "number")) {
      return number;
    }
    alert("La cantidad de días debe ser mayor a 0");
  }
};

const convertToMonthsAndYears = (numberOfDays) => {
  let weaks = Math.floor((numberOfDays % 365) / 7);
  let years = Math.floor(numberOfDays / 365);
  let days = Math.floor((numberOfDays % 365) % 7);
  return [days, weaks, years];
};

const days = getDays();

const conversion = convertToMonthsAndYears(days);
let conversionYears =
  conversion[2] == 1 ? conversion[2] + " año" : conversion[2] + " años";
let conversionWeeks =
  conversion[1] == 1 ? conversion[1] + " semana" : conversion[1] + " semanas";
let conversionDays =
  conversion[0] == 1 ? conversion[0] + " día" : conversion[0] + " días";

const results = `<h1>${days} días equivalen a:</h1>
<p>${conversionYears}</p>
<p>${conversionWeeks}</p>
<p>${conversionDays}</p>
`;

display.innerHTML = results;
