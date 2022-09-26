// Calcular área total do cilindro

/*
At: área total do cilindro
R: raio da base
H: altura do cilindro
*/

const pi = Math.PI;
const R = 3;
const H = 1;

const areaCilindro = 2 * pi * R * (R + H);

console.log("Para um cilindro de Raio da Base " + R + "cm" 
+ " e altura de " + H + "cm" + ", temos que a área total vale "+ areaCilindro.toFixed(2) + "cm²");

// "Alt" + 0178