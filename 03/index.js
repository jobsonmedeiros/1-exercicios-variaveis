const valorDaCompra = 129.99;
const fundos = 80.00;
const valorDeDesconto = valorDaCompra - fundos;

const percentualDeDesconto = valorDeDesconto * 100 / valorDaCompra;

console.log(
    "O desconto de R$" + valorDeDesconto.toFixed(2) 
    + " corresponde a um desconto de " 
    + percentualDeDesconto.toFixed(2) + "%" 
    + " sobre o total de R$" + valorDaCompra);