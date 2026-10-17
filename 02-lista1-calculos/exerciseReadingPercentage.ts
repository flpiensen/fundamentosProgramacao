import teclado from "readline-sync";

let totalPaginas: number = 0,
    paginasLidas: number = 0,
    percentualLeitura: number = 0;

console.log();
console.log("Digite o total de páginas do livro e a pagina de leitura atual: ");
totalPaginas = teclado.questionInt();

console.log();
console.log("Qual é a pagina de leitura atual? ")
paginasLidas = teclado.questionInt();

percentualLeitura = (paginasLidas / totalPaginas) * 100;

console.log();
console.log(`O percentual de leitura do livro é: ${percentualLeitura.toFixed(2)}%`);