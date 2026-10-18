import teclado from "readline-sync";

let escada: number = 0,
    altura: number = 0,
    distancia: number = 0;

console.log();
console.log("Calcule e exiba o comprimento mínimo que a escada deve ter para alcançar o topo do prédio.");

console.log();
console.log("Digite o tamanho do edificio: ");
altura = teclado.questionFloat();

console.log();
console.log("Digite a distância da escada até o edificio: ");
distancia = teclado.questionFloat();

escada = Math.sqrt((altura*altura) + (distancia*distancia));

console.log();
console.log(`O tamanho de escada necessário é ${escada} metros`);