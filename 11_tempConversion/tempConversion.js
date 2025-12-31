const convertToCelsius = function(t) {
    let C = ((t - 32) / 9) * 5;
    return Math.round(C * 10) / 10;
};

const convertToFahrenheit = function(t) {
    let F = ((9 * t) / 5) + 32;
    return Math.round(F * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};