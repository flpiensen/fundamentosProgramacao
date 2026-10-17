import teclado from "readline-sync";

const PESO1: number = 1,
      PESO2: number = 2,
      PESO3: number = 3,
      PESO4: number = 4;

let nota1: number = 0,
    nota2: number = 0,
    nota3: number = 0,
    nota4: number = 0,
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

mediaPonderada = (nota1 * PESO1 + nota2 * PESO2 + nota3 * PESO3 + nota4 * PESO4) / (PESO1 + PESO2 + PESO3 + PESO4);

console.log();
console.log(`A média ponderada das notas é: ${mediaPonderada.toFixed(2)}`);
