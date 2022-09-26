/*
i: taxa de juros
M: montante
C: capital inicial (valor de dinheiro inicial)
n: número de meses
*/

const M = 90_000.00;
const C = 60_000.00;
const n = 24;

const i = (((M/C) ** (1/n)) - 1);
const iPercentual = i * 100;

console.log("O seu financiamento de " 
+ C.toFixed(2) + " reais teve uma taxa de juros de "
+ iPercentual.toFixed(4) + "%" + ", pois após " + n + " meses você teve que pagar "
+ M.toFixed(2) + " reais.");

