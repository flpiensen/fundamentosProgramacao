import teclado from "readline-sync";

const PERCAUMENTO: number = 12;

let salarioAtual: number = 0,
    valorAumento: number = 0,
    salarioFinal: number = 0;

console.log();
console.log("Digite o valor do salário atual para calcular o aumento de 12%: ");
salarioAtual = teclado.questionFloat();

valorAumento = (salarioAtual * PERCAUMENTO) / 100;
salarioFinal = salarioAtual + valorAumento;

console.log();
console.log(`O valor do aumento é: R$ ${valorAumento.toFixed(2)}`);
console.log(`O valor final do salário com aumento é: R$ ${salarioFinal.toFixed(2)}`);