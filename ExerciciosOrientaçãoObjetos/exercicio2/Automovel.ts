export default class Automovel {
  public readonly TANQUE: number;
  private combustivel: number;

  public constructor(tanque: number) {
    this.TANQUE = tanque;
    this.combustivel = 0;
  }

  public getCombustivel(): number {
    return this.combustivel;
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
