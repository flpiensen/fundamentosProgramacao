import teclado from "readline-sync";
import Individuo from "./Individuo";

let idade: number = 0;
console.log("Informe sua idade: ");
idade = teclado.questionInt();

let verificaIdade: Individuo = new Individuo(idade);

console.log();
console.log(verificaIdade.verificaIdade());
