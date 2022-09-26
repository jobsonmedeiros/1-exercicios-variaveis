const x1 = 1;
const y1 = 1;
const x2 = 1;
const y2 = 4;

// P1 = (1,1); P2 = (1,4)

const distanciaDeDoisPontos = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

console.log("A distância entre os pontos P1 = " + "(" + x1 + "," + y1 + ")" 
+ " e " + "P2 = (" + x2 + "," + y2 + ")" + " é " + distanciaDeDoisPontos + ".");