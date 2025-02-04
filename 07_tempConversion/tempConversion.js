const convertToCelsius = function(farenheit) {
  let celsius = (farenheit - 32) * (5 / 9);
  var multipler = Math.pow(10, 1 || 0);
  return Math.round(celsius * multipler) / multipler;

};

const convertToFahrenheit = function(celsius) {
  let farenheit = celsius * (9 / 5) + 32;
  var multipler = Math.pow(10, 1 || 0);
  return Math.round(farenheit * multipler) / multipler;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
