const temperaturaEmFahrenheit = 73;

const temperaturaEmCelcius = (temperaturaEmFahrenheit - 32) * 5/9;

console.log(
    "A temperatura de " + temperaturaEmFahrenheit + "F " 
    + "corresponde a " + temperaturaEmCelcius.toFixed(2) + "°C."
);
// alt + 0176: ° símbolo de grau.