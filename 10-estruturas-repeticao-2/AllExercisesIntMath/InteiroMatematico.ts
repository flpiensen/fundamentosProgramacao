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

  public isTriangular(): boolean {
        let mult: number = 0,
            i: number = 1;
        
        while (mult < this.n) {
            mult = i * (i+1) * (i+2);
            i++;
        }
        return (mult === this.n);
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
        return false
    }

    let quantidadeDivisores: number = 0;

    for (let i = 1; i <= this.n; i++) {
        if (this.n % i === 0) {
            quantidadeDivisores++;
        }
    }
    return quantidadeDivisores === 2;
  }

  
}