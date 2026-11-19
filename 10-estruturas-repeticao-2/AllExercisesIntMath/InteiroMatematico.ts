export default class InteiroMatematico {
  private n: number;

  public constructor(n: number) {
    this.n = n;
  }

  public getN(): number {
    return this.n;
  }

  public setN(): void {
    this.n;
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
}