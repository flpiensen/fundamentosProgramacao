import teclado from "readline-sync";

const HORAAULA: number = 50,
      HORARELOGIO: number = 60;

let cargaHoraria: number = 0,
    quantidadeHorasRelogio: number = 0,
    horas: number = 0,
    minutos: number = 0;

console.log("Digite a quantidade de horas aulas: ");
cargaHoraria = teclado.questionInt();

quantidadeHorasRelogio = cargaHoraria * HORAAULA;

horas = Math.trunc(quantidadeHorasRelogio / HORARELOGIO);
minutos = quantidadeHorasRelogio % HORARELOGIO;

console.log(`A carga horária é de ${horas} horas e ${minutos} minutos.`);
