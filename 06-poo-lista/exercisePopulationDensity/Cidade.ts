export default class Cidade {
  private nome: string;
  private populacao: number = 0;
  private area: number = 1.0;

  public constructor(nome: string, populacao: number, area: number) {
    this.nome = nome;
    this.setPopulacao(populacao);
    this.setArea(area);
  }

  public getNome(): string {
    return this.nome;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public getPopulacao(): number {
    return this.populacao;
  }

  public setPopulacao(populacao: number): void {
    if (populacao <= 0) {
      this.populacao = 1;
    } else {
      this.populacao = populacao;
    }
  }

  public getArea(): number {
    return this.area;
  }

  public setArea(area: number): void {
    if (area <= 0) {
      this.area = 1;
    } else {
      this.area = area;
    }
  }

  private getDensidadePopulacional(): number {
    const DENSIDADE = this.populacao / this.area;
    return DENSIDADE;
  }

  public toString(): string {
    return (
      "A cidade de " +
      this.getNome() +
      " possui uma população de " +
      this.getPopulacao() +
      " e área de " +
      this.getArea() +
      "km², com estas duas informações podemos afirmar que esta cidade possui densidade populacional de " +
      this.getDensidadePopulacional() +
      " pessoas/km²"
    );
  }
}
