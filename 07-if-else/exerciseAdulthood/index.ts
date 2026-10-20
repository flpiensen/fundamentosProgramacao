import verificador from "./maioridade";

let cliente: verificador = new verificador(19);

console.log();
console.log("Você é adulto?");
console.log(cliente.getMaioridade());
