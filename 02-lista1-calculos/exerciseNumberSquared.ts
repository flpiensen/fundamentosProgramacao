import teclado from "readline-sync";

let numero: number = 0,
    resultado: number = 0;

console.log();
console.log("Digite um número para calcular o seu quadrado: ");
numero = teclado.questionFloat();

resultado = numero * numero;

console.log();
console.log(`O quadrado de ${numero} é: ${resultado}`);