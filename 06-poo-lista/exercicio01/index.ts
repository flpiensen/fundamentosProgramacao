import Produto from "./Produto";

let chocolate: Produto = new Produto(
  "Barra de Chocolate Diamente Negro",
  5.99,
  0.09,
);

console.log();
// console.log("Descriçao:", chocolate.getDescricao());
// console.log("Peso:", chocolate.getPeso());
// console.log("Preço:", chocolate.getValor());
// console.log("Preço do quilo: R$", chocolate.calcularPesoQuilo().toFixed(2));
console.log(chocolate.geraEtiqueta());
