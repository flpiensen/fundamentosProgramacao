export default class Individuo {
  private idade: number = 0;
  static readonly MAIORIDADE: number = 18;

  public constructor(idade: number) {
    this.setIdade(idade);
    this.verificaIdade;
  }

  public getIdadeVerificada(): string {
    return this.verificaIdade();
  }

  public setIdade(idade: number): void {
    if(idade > 0) {
      this.idade = idade;
    }
  }

  private verificaIdade(): string {
    if(this.idade >= Individuo.MAIORIDADE) {
      return "é adulto"
    } else {
      return "não é adulto"
    }
  }
}
