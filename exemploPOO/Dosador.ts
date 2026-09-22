export default class Dosador {
  private peso: number;

  public constructor(peso: number) {
    this.peso = peso;
  }

  public getPeso(): number {
    return this.peso;
  }

  public setPeso(peso: number): void {
    this.peso = peso;
  }

  public getDosagem(): number {
    return (Math.ceil(this.peso / 10));
  }

  public toString(): string {
    return "Dosagem para paciente com "
      + this.peso.toFixed(1) + " kg: "
      + this.getDosagem() + " ml";
  }
}