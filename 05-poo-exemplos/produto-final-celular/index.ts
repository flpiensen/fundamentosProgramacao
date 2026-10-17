import Produto from "./Produto";

let celular: Produto = new Produto("Smatphone Samsung Galaxy S21FE", 1699);

// console.log(celular.getDescricao());
// console.log(celular.getValor());

// celular.setDescricao("Guitarra Gibson Sg Standard Heritage Cherry");
// celular.setValor(1799);

// console.log();
// console.log("Descrição: ", celular.getDescricao());
// console.log("Valor: ", celular.getValor());

console.log();
console.log("Descrição:", celular.getDescricao());
console.log("Valor:", celular.getValor());
console.log("Valor com desconto:", celular.calculaComDesconto());
console.log("Valor da parcela (em 4 vezes):", celular.calculaParcela(4));

// verbo no infinitivo
