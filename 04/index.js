const capital = 1_000;
const tempo = 5;
const taxa = 0.125;

const montante = capital * (1 + taxa) ** tempo;

console.log("Um capital de R$" 
+ capital.toFixed(2) + " aplicado a uma taxa de "
+ taxa + "% ao mês gera um montante de R$" + montante.toFixed(2));