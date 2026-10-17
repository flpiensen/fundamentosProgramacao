import teclado from "readline-sync";

const GOTA: number = 0.05;

let quantidadeMililitros: number = 0,
    quantidadeGotas: number = 0;

console.log("Digite a quantidade de mililitros que deseja converter em gotas: ");
quantidadeMililitros = teclado.questionFloat();

quantidadeGotas = quantidadeMililitros / GOTA;

console.log(`A quantidade de gotas em ${quantidadeMililitros} ml é: ${quantidadeGotas} gotas.`);