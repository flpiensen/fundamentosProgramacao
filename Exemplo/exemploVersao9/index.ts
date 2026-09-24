import Produto from "./Produto";

let guitarra: Produto = new Produto();

console.log("Descrição: ", guitarra.getDescricao());
console.log("Valor: ", guitarra.getValor());

guitarra.setDescricao("Guitarra Gibson Sg Standard Heritage Cherry");
guitarra.setValor(1799);

console.log();
console.log("Descrição: ", guitarra.getDescricao());
console.log("Valor: ", guitarra.getValor());

console.log();
console.log("Descrição:", guitarra.getDescricao());
console.log("Valor:", guitarra.getValor());
console.log("Valor com desconto:", guitarra.calculaComDesconto());
console.log("Valor da parcela (em 4 vezes):", guitarra.calculaParcela(4));

// verbo no infinitivo
