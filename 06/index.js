const distanciaPercorrida = 500.00; // em metros
const tempoGasto = 10.00; // em segundos
const fatorDeConversao = 3.6; // m/s para km/h (multiplica por 3.6)

const velocidadeEmMetroPorSegundo = distanciaPercorrida / tempoGasto;

const velocidadeEmKmPorHora = velocidadeEmMetroPorSegundo * fatorDeConversao;

console.log("========================= \n"
+ "\tMONITOR" + "\n========================= \n" 
+ "Distância Percorrida: \n" + distanciaPercorrida + "m"
+ "\n\ntempo gasto: \n" + tempoGasto + "s"
+ "\n\nVelocidade: " + velocidadeEmKmPorHora + "Km/h"
+ "\n=========================")
