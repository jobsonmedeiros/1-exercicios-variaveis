/*
C: comprimento do círculo
A: área do círculo
R: raio do círculo
*/

const R = 1.0;
const pi = Math.PI;

comprimentoCirculo = 2 * pi * R;
areaCirculo = pi * (R ** 2);

console.log("Para um círculo de raio " + R + " temos: \n\n" 
+ "Comprimento: " + comprimentoCirculo.toFixed(4)
+ "\n" 
+ "Área do círculo: " + areaCirculo.toFixed(4));