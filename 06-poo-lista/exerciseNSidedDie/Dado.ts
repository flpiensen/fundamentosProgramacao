export default class Dado {
  private readonly faces: number;
  private sorteado!: number;

  public constructor(faces: number) {
    this.faces = faces;
    this.proximaJogada();
  }

  public getFaces(): number {
    return this.faces;
  }

  public proximaJogada(): number {
    this.sorteado = Math.ceil(Math.random() * this.faces);
    return this.sorteado;
  }

  public getUltimaJogada(): number {
    return this.sorteado;
  }
}