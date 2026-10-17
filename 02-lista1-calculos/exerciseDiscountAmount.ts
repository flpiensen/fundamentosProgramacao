import teclado from "readline-sync";

const PERCDESCONTO: number = 35;

let valorProduto: number = 0,
    valorDesconto: number = 0,
    valorFinal: number = 0;

console.log();
console.log("Digite o valor do produto para calcular o desconto de 35%: ");
valorProduto = teclado.questionFloat();

valorDesconto = (valorProduto * PERCDESCONTO) / 100;
valorFinal = valorProduto - valorDesconto;

console.log();
console.log(`O valor do desconto é: R$ ${valorDesconto.toFixed(2)}`); // Exibe o valor do desconto com duas casas decimais
console.log(`O valor final do produto com desconto é: R$ ${valorFinal.toFixed(2)}`);