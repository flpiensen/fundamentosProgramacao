import teclado from "readline-sync";

let valor1: number = 0,
    valor2: number = 0,
    aux: number = 0;


console.log();
console.log("Digite dois valores para realizar a troca de valores: ");

console.log();
console.log("Digite o primeiro valor: ");
valor1 = teclado.questionFloat();

console.log();
console.log("Digite o segundo valor: ");
valor2 = teclado.questionFloat();

aux = valor1;
valor1 = valor2;
valor2 = aux;

console.log();
console.log(`Após a troca, o primeiro valor é: ${valor1} e o segundo valor é: ${valor2}`);