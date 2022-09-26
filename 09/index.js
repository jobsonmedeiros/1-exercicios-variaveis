/*
S: soma dos ângulos internos do polígono
n: número de lados do polígono
a: o valor de cada ângulo em graus

Considerando um hexágono
*/

const n = 6;

const S = 180 * (n - 2);
const a = S/n;

console.log("Um hexágono possui: \n\n"
+ "Soma dos ângulos internos: " + S 
+ "\n"
+ "Cada ângulo interno possui: " + a + "°");