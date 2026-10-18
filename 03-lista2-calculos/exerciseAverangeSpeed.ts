import teclado from "readline-sync";

let distancia: number = 0,
    tempoPercurco: number = 0,
    velocidadeMedia: number = 0;

console.log();
console.log("Digite uma distancia inicial em quilómetros: ")
distancia = teclado.questionFloat();

console.log();
console.log("Digite o tempo que você percorreu essa distância: ");
tempoPercurco = teclado.questionFloat();

velocidadeMedia = distancia/tempoPercurco;

console.log();
console.log(`Sua velocidade média é de ${velocidadeMedia}km/h`);