export default class InteiroMatematico {
  private n: number;

  // Lista Estruturas de Repetição (2) - Exercício 1 (resolução do professor)
  // Classe InteiroMatematico: atributo n fornecido ao construtor, com métodos
  // de acesso e de modificação. Sempre se assume |n| ao internalizar no objeto.
  constructor(n: number) {
    this.n = this.modulo(n);
  }

  // Lista Estruturas de Repetição (2) - Exercício 1 (resolução do professor)
  // Método de modificação: também guarda o módulo de n.
  public setN(n: number): void {
    this.n = this.modulo(n);
    // Requisito de não usar classes externas
  }

  // Lista Estruturas de Repetição (2) - Exercício 1 (resolução do professor)
  // Auxiliar para calcular |n| sem usar Math.abs (requisito de não usar classes externas).
  public modulo(n: number): number {
    if (n < 0)
      n = -n;

    return n;
  }

  // Lista Estruturas de Repetição (2) - Exercício 1 (resolução do professor)
  // Método de acesso.
  public getN(): number {
    return this.n;
  }

  //Exercicio 2: Retorne uma cadeia de caracteres formatada com a tabuada de n.
  public tabuada(): string {
    let resultado: string = "";

    for (let i = 1; i <= 10; i++) {
      resultado += "S{this.n} x ${i} = ${this.n * i}\n";
    }
    return resultado;
  }

  //Exercicio 3: Retorne o número de divisores (inteiros e positivos) de n.
  public numeroDeDivisores(): number {
    let quantidadeDivisores: number = 0;

    for (let i = 1; i <= this.n; i++) {
      if (this.n % i === 0) {
        quantidadeDivisores++;
      }
    }

    return quantidadeDivisores;
  }

  public isTriangular(): boolean {
    let mult: number = 0,
      i: number = 1;

    while (mult < this.n) {
      mult = i * (i + 1) * (i + 2);
      i++;
    }
    return mult === this.n;
  }

  public menorDivisor(): number {
    if (this.n === 0 || this.n === 1) {
      return 1;
    }

    if (this.n % 2 === 0) {
      return 2;
    }

    for (let i = 3; i <= this.n; i += 2) {
      if (this.n % i === 0) {
        return i;
      }
    }
    return this.n;
  }

  public maiorDivisor(): number {
    return this.menorDivisor() ** 2;
  }

  public isPrimo(): boolean {
    if (this.n <= 1) {
      return false;
    }

    let quantidadeDivisores: number = 0;

    for (let i = 1; i <= this.n; i++) {
      if (this.n % i === 0) {
        quantidadeDivisores++;
      }
    }
    return quantidadeDivisores === 2;
  }

  public divisorN(): number {
    let m: number = 36,
      divisoresComuns: number = 0;

    for (let i = 1; i <= this.n / 2; i++) {
      if (this.isDivisao(this.n, i) === this.isDivisao(m, i)) {
        divisoresComuns++;
      }
      return divisoresComuns;
    }
  }

  private isDivisao(x: number, y: number): number {
    let resultado: number = 0;
    resultado = x / y;
    return resultado;
  }

  // ===== Resoluções do professor: Lista Matrizes Unidimensionais (1) =====

  // Lista Matrizes Unidimensionais (1) - Exercício 1 (resolução do professor)
  // getDivisores(): aprimoramento de numeroDeDivisores().
  // Retorne todos os divisores (inteiros e positivos) de n.
  public getDivisores(): number[] {
    let divisores: number[] = [1];
    if (this.n == 0)
      return divisores;

    for (let i = 2; i <= (this.n / 2); i++)
      if (this.n % i == 0)
        divisores.push(i);

    if (this.n != 1)
      divisores.push(this.n);

    return divisores;
  }

  // Lista Matrizes Unidimensionais (1) - Exercício 2 (resolução do professor)
  // serieDeFibonacci(): aprimoramento de fibonacci().
  // Retorne os n primeiros termos da série de Fibonacci. Retorne [] como erro se n = 0.
  public serieDeFibonacci(): number[] {
    if (this.n == 0)
      return [];   // Matriz unidimensional vazia

    if (this.n == 1)
      return [1];

    let termos: number[] = [1, 1];   // Dois primeiros termos

    for (let i = 3; i <= this.n; i++)
      termos[i-1] = termos[i-2] + termos[i-3];
      // termos.push(termos[i-2] + termos[i-3]);

    return termos;
  }

  // Lista Matrizes Unidimensionais (1) - Exercício 3 (resolução do professor)
  // serieDeTribonacci(): aprimoramento de tribonacci().
  // Retorne os n primeiros termos da série de Tribonacci.
  public serieDeTribonacci(): number[] {
    if (this.n == 0)
      return [];   // Matriz unidimensional vazia

    let termos: number[] = [1, 1, 2];   // Três primeiros termos

    if (this.n < 4)
      return termos.slice(0, this.n);   // Método predefinido da linguagem

    for (let i = 4; i <= this.n; i++)
      termos[i-1] = termos[i-2] + termos[i-3] + termos[i-4];

    return termos;
  }

  // Lista Matrizes Unidimensionais (1) - Exercício 4 (resolução do professor)
  // getPrimos(): aprimoramento de isPrimoEficiente().
  // Retorne os n primeiros números primos. Retorne [] como erro se n = 0.
  // Obs.: o professor deixou uma versão provisória com a lista de primos até 1000;
  // a versão final deve usar isPrimoEficiente().
  public getPrimos(): number[] {
    // Substituir por implementação baseada no método isPrimoEficiente()

    let primosAteMil = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
      47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127,
      131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
      211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
      293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383,
      389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467,
      479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577,
      587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661,
      673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769,
      773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877,
      881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983,
      991, 997];

      return primosAteMil.slice(0, this.n);   // Retorna os n primeiros
  }
}
