export default class Relogio {
  private hora: number;
  private minuto: number;

  public constructor(hora: number, minuto: number) {
    this.hora = hora;
    this.minuto = minuto;
  }

  public getHora(): number {
    return this.hora;
  }

  public setHora(hora: number): void {
    this.hora = hora;
  }

  public getMinuto(): number {
    return this.minuto;
  }

  public setMinuto(minuto: number): void {
    this.minuto = minuto;
  }

  public getPosicaoPonteiroHora(): number {
    const NORMALIZANDOHORAS = this.hora % 12;
    const anguloHoras = NORMALIZANDOHORAS * 30 + this.minuto * 0.5;
    return anguloHoras;
  }

  public getPosicaoPonteiroMinuto(): number {
    return (this.minuto % 60) * 6;
  }
}

//se é 12h o angulo é 0°
//se é 60min o angulo é 0°
//vamos considerar um relógio AM PM
//Logo cada hora é 360/12 = 30°
//Cada minuto é 360/60 = 6°
