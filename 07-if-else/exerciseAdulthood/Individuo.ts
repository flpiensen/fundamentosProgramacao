export default class Individuo {
  private idade: number = 0;
  static readonly ADULTO: number = 18;

  public constructor(idade: number) {
    this.setIdade(idade);
  }

  public getIdade(): number {
    return this.idade;
  }

  public setIdade(idade: number): void {
    if(idade > 0) {
      this.idade = idade;
    }
  }

  public verificaIdade(): string {
    if(this.idade > Individuo.ADULTO) {
      return "é adulto"
    } else {
      return "não é adulto"
    }
  }
}
