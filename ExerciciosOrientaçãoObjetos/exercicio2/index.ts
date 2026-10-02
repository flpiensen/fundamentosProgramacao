import Automovel from "./Automovel";

let porsche: Automovel = new Automovel(65);
console.log("Comprei outro carro novo: ");
console.log(porsche.toString());

console.log("Abasteci com 10 litros:");
porsche.abastece(10);
console.log(porsche.toString());

console.log("Abasteci com mais 20 litros:");
porsche.abastece(20);
console.log(porsche.toString());

console.log("Resolvi encher o tanque:");
porsche.completaTanque();
console.log(porsche.toString());

console.log("Tentei colocar mais 10 litros:");
porsche.abastece(10);
console.log(porsche.toString());


