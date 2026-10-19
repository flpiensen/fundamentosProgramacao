import Dado from "./Dado";

let d6: Dado = new Dado(6);
console.log("Dado de 6 faces: ");
console.log("Face que está para cima: " + d6.ultimaJogada());
console.log("Rolando o dado: " + d6.proximaJogada());
console.log("Face que está para cima: " + d6.ultimaJogada());

let d20: Dado = new Dado(20);
console.log();
console.log("Dado de 20 faces: ");
console.log("Face que está para cima: " + d20.ultimaJogada());
console.log("Rolando o dado: " + d20.proximaJogada());
console.log("Rolando o dado: " + d20.proximaJogada());
console.log("Rolando o dado: " + d20.proximaJogada());