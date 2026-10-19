import Relogio from "./Relogio";

let convertHora: Relogio = new Relogio(15, 30)

console.log("O angulo que se encontra o ponteiro das horas é: ");
console.log(convertHora.getPonteiroHora() + "°");

console.log("O angulo que se encontra o ponteiro dos minutos é: ");
console.log(convertHora.getPonteiroMinuto() + "°");