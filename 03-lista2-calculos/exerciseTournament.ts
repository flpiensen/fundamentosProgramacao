import teclado from "readline-sync";

let jogador1: number = 0,
    jogador2: number = 0,
    jogador3: number = 0,
    jogador4: number = 0,
    jogador5: number = 0,
    primeiro: number = 0,
    ultimo: number = 0;
    
console.log();
console.log("Digite a pontuação de cada jogador.");

console.log();
console.log("Digite a pontuação do primeiro jogador: ");
jogador1 = teclado.questionInt();

console.log();
console.log("Digite a pontuação do segundo jogador: ");
jogador2 = teclado.questionInt();

console.log();
console.log("Digite a pontuação do terceiro jogador: ");
jogador3 = teclado.questionInt();

console.log();
console.log("Digite a pontuação do quarto jogador: ");
jogador4 = teclado.questionInt();

console.log();
console.log("Digite a pontuação do quinto jogador: ");
jogador5 = teclado.questionInt();

primeiro = Math.max(jogador1, jogador2, jogador3, jogador4, jogador5);
ultimo = Math.min(jogador1, jogador2, jogador3, jogador4, jogador5);

console.log();
console.log(`O vencedor obteve ${primeiro} pontos... :)`);
console.log(`O ultimo colocado obteve ${ultimo} pontos... :C`);