import teclado from "readline-sync";

let nota1: number = 0,
    nota2: number = 0,
    nota3: number = 0,
    nota4: number = 0,
    peso1: number = 1,
    peso2: number = 2,
    peso3: number = 3,
    peso4: number = 4,
    mediaPonderada: number = 0;

console.log("Digite as quatro notas e seus respectivos pesos para calcular a média ponderada");

console.log("Digite a primeira nota: ");
nota1 = teclado.questionFloat();

console.log("Digite a segunda nota: ");
nota2 = teclado.questionFloat();

console.log("Digite a terceira nota: ");
nota3 = teclado.questionFloat();

console.log("Digite a quarta nota: ");
nota4 = teclado.questionFloat();

mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3 + nota4 * peso4) / (peso1 + peso2 + peso3 + peso4);

console.log();
console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);
