export default class Cidade {
  private nome: string;
  private populacao: number;
  private area: number;

  public constructor(nome: string, populacao: number, area: number) {
    this.nome = nome;
    this.populacao = populacao;
    this.area = area;
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
    this.populacao = populacao;
  }

  public getArea(): number {
    return this.area;
  }

  public setArea(area: number): void {
    this.area = area;
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
