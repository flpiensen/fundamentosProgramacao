import Produto from "./Produto";

let guitarra: Produto = new Produto();

console.log("Descrição: ", guitarra.getDescricao());
console.log("Valor: ", guitarra.getValor());

guitarra.setDescricao("Guitarra Gibson Sg Standard Heritage Cherry");
guitarra.setValor(1799);

console.log();
console.log("Descrição: ", guitarra.getDescricao);
console.log("Valor: ", guitarra.getValor);

guitarra.setValor(-1000);

console.log();
console.log("Descrição:", guitarra.getDescricao());
console.log("Valor:", guitarra.getValor());
