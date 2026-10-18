import teclado from "readline-sync";

const MEDIA: number = 0.300,
      GARRAFA: number = 2;

let quantidadePessoas: number = 0,
    quantidadeRefrigerantes: number = 0,
    quantidadeGarrafasComporar: number = 0;

console.log();
console.log("Digite a quantidade de pessoas para calcular a quantidade de refrigerantes: ");
quantidadePessoas = teclado.questionInt();

quantidadeRefrigerantes = quantidadePessoas * MEDIA;

quantidadeGarrafasComporar = Math.ceil(quantidadeRefrigerantes / GARRAFA);

console.log();
console.log(`A quantidade de refrigerantes necessária para ${quantidadePessoas} pessoas é: ${quantidadeRefrigerantes.toFixed(2)} litros`);
console.log(`A quantidade de garrafas de refrigerante necessária para ${quantidadePessoas} pessoas é: ${quantidadeGarrafasComporar} garrafas`);