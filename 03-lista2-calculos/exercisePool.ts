import teclado from "readline-sync";

let raio: number = 0,
  altura: number = 0,
  area: number = 0,
  volume: number = 0,
  litros: number = 0;

console.log();
console.log("Digite o raio: ");
raio = teclado.questionFloat();

console.log();
console.log("Digite a altura: ");
altura = teclado.questionFloat();

area = Math.PI * (raio * raio);
volume = area * altura;
litros = volume * 1000;

console.log();
console.log(
  `O volume necessário de água para preencher sua piscina é de ${litros.toFixed(2)}L`,
);
