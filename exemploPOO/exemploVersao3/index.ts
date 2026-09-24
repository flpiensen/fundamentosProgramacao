import Produto from "./Produto";

let guitarra: Produto = new Produto();

console.log("Descrição: ", guitarra.descricao);
console.log("Valor: ", guitarra.valor);

guitarra.descricao = "Guitarra Gibson Sg Standard Heritage Cherry";
guitarra.valor = 1799;

console.log();
console.log("Descrição: ", guitarra.descricao);
console.log("Valor: ", guitarra.valor);

guitarra.valor = -1000;

console.log();
console.log("Descrição: ", guitarra.descricao);
console.log("Valor: ", guitarra.valor);