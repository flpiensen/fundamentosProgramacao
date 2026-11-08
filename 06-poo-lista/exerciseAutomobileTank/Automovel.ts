export default class Automovel {
  public readonly capacidadeTanque: number;
  private quantidadeCombustivel: number;

  public constructor(capacidadeTanque: number) {
    this.capacidadeTanque = capacidadeTanque;
    this.quantidadeCombustivel = 0;
  }

  public getCapacidadeTanque(): number {
    return this.capacidadeTanque;
  }

  public getPercentualAbastecimento(): number {
    return (this.quantidadeCombustivel / this.capacidadeTanque) * 100;
  }

  public completaTanque(): void {
    this.quantidadeCombustivel = this.capacidadeTanque;
  }

  public abastece(litros: number): void {
    this.quantidadeCombustivel = Math.min(
      this.capacidadeTanque,
      this.quantidadeCombustivel + litros,
    );
  }

  public toString(): string {
    return (
      "- - - - - - - - - - - - - - - - - - - - - - - - -\n" +
      "Quantidade de combustivel: " +
      this.quantidadeCombustivel.toFixed(1) +
      " Litros\n" +
      "Capacidade do tanque: " +
      this.capacidadeTanque.toFixed(1) +
      " Litros\n" +
      "PErcentual do combustivel: " +
      this.getPercentualAbastecimento().toFixed(1) +
      "%\n" +
      "- - - - - - - - - - - - - - - - - - - - - - - - -\n"
    );
  }
}
