export default class Automovel {
  public readonly capacidadeTanque: number;
  private quantidadeCombustivel: number;

  public constructor(capacidadeTanque: number) {
    this.capacidadeTanque = capacidadeTanque;
    this.quantidadeCombustivel = 0;
  }

  public getCapacidadeTanque(): number {
    return this.;
  }

  public getPercentualAbastecimento(): number {
    return (this.combustivel / this.TANQUE) * 100;
  }

  public completaTanque(): void {
    this.combustivel = this.TANQUE;
  }

  public abastece(litros: number): void {
    this.combustivel = Math.min(this.TANQUE, this.combustivel + litros);
  }

  public toString(): string {
    return (
        "- - - - - - - - - - - - - - - - - - - - - - - - -\n" + 
      "Quantidade de combustivel: " +
      this.combustivel.toFixed(1) +
      " Litros\n" +
      "Capacidade do tanque: " +
      this.TANQUE.toFixed(1) +
      " Litros\n" +
      "PErcentual do combustivel: " +
      this.getPercentualAbastecimento().toFixed(1) +
      "%\n" +
      "- - - - - - - - - - - - - - - - - - - - - - - - -\n"
    );
  }
}
