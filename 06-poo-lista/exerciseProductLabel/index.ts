import Produto from "./Produto";

const CHOCOLATE: Produto = new Produto("Barra de Chocolate Diamente Negro", 5.99, 0.09);
const OVOS: Produto = new Produto("Ovo de granja 12 un.", 11.29, 0.05);

console.log(OVOS.toString());
console.log(CHOCOLATE.toString());
