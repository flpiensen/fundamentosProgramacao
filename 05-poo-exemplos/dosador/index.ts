import teclado from "readline-sync";
import Dosador from "./Dosador";

let peso: number = 0;

console.log("Digite o peso em kg:");
peso = teclado.questionFloat();

let dosador: Dosador = new Dosador(peso);

console.log("Dosagem:", dosador.getDosagem(), "ml");

// Faça os testes abaixo:
// console.log(dosador.toString());
// console.log(dosador);