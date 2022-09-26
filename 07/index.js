/*
Po = a população incial de pessoas infectadas
X = quantidade de pessoas para as quais um paciente infectado pode transmitir
t = tempo percorrido
*/

const P0 = 1_000;
const x = 4;
const t = 7;

const pessoasInfectadas = P0 * (x ** (t/7));

console.log("Inicialmente havendo " + P0 + " pessoas infectadas, após " 
+ t + " dias " + "haverá um total de " + Math.round(pessoasInfectadas) + " infecções.");