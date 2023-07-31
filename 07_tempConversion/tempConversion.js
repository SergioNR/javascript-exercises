const convertToCelsius = function(fahrenheit) {
 let celsius = (fahrenheit - 32) * 5 / 9;

  let roundedCelsius = parseFloat(celsius.toFixed(1));
  return roundedCelsius
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32

  let roundedFahrenheit = parseFloat(fahrenheit.toFixed(1));
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
