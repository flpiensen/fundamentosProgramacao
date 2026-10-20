export default class Individuo {
  private idade: number;
  static readonly ADULTO: number = 18;

  public constructor(idade: number) {
    this.idade = idade;
  }

  public getMaioridade(): boolean {
    return this.idade >= Individuo.ADULTO;
  }
}
