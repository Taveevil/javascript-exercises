const convertToCelsius = function(value) {
  let total  = (value - 32) * 5/9
  total = Math.round(total * 10)/10;
  return total;
};

const convertToFahrenheit = function(value) {
  let total = (value * 9/5) + 32;
  total = Math.round(total * 10)/10;
  return total;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
