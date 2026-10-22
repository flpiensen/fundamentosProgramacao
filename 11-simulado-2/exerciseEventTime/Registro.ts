export default class Registro 
{
  private hora1: number;
  private minuto1: number;
  private segundo1: number;
  private hora2: number;
  private minuto2: number;
  private segundo2: number;
  private valor: number = 0;
  static readonly DIA: number = 24;
  static readonly MIN: number = 60;

  public constructor
  (
    hora1: number,
    minuto1: number,
    segundo1: number,
    hora2: number,
    minuto2: number,
    segundo2: number,
  ) 
  {
    this.hora1 = hora1;
    this.minuto1 = minuto1;
    this.segundo1 = segundo1;
    this.hora2 = hora2;
    this.minuto2 = minuto2;
    this.segundo2 = segundo2;
    this.calculaHora();
  }

  private calculaHora(): void {
    this.valor = (this.hora1 - Registro.DIA) + this.hora2;
  }

  public getHora3() {
    if (this.hora1 > this.hora2) {
        return this.calculaHora(); 
    } else {
        // return hora3 = this.hora1 + this.hora2
    }
  }

}
