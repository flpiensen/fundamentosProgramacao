export default class densidadePopulacional {
  private populacao: number;
  private area: number;

  public constructor(populacao: number, area: number) {
        this.populacao = populacao;
        this.area = area;
  }

  public setDensidade(): number {
        return this.populacao / this.area;
  }
}
