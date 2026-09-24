export default class Produto {
  private descricao: string;
  private valor: number;

  // Cuidado isso é o encapsulamento!!

  public constructor() {
    this.descricao = "Descrição de exemplo";
    this.valor = 0;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getValor(): number {
    return this.valor;
  }
}
