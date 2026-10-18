import teclado from "readline-sync";

let valor: number = 0,
    juros = 0,
    quantidadeMeses: number = 0,
    montante: number = 0;

console.log();
console.log("Digite um valor que você deseja calcular investir: ");
valor = teclado.questionFloat();

console.log();
console.log("Defina os juros ao mês: ");
juros = teclado.questionFloat();

console.log();
console.log("Defina a quantidade de meses: ");
quantidadeMeses = teclado.questionInt();

montante = Math.pow(valor * (1 + juros / 100), quantidadeMeses);

console.log();
console.log(`O valor obtido ao final do ultimo mês é de R$${montante.toFixed(2)}`,);