import Pessoa from "./Pessoa";

let homemDeFerro: Pessoa = new Pessoa("Tony Stark");

console.log("Cumprimentando alguém que eu não conheço: ");
console.log(homemDeFerro.cumprimenta());

console.log("Cumprimentando alguem que eu sei o nome: ");
console.log(homemDeFerro.cumprimentaPeloNome("Thanos"));

let capitaoAmerica : Pessoa = new Pessoa("Steve Regers");

console.log("Cumprimentando alguém que eu conheço: ");
console.log(homemDeFerro.cumprimentaPessoa(capitaoAmerica));