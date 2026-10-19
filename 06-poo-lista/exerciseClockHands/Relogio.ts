export default class relogioAnalogico {
    private horas: number;
    private minutos: number;

    public constructor(ponteiroHora: number, ponteiroMinuto: number) {
        this.horas = ponteiroHora;
        this.minutos = ponteiroMinuto;
    }

    public getPonteiroHora() {
        return (this.horas % 12) * 30 + this.minutos * 0.5;
    }

    public getPonteiroMinuto() {
        return this.minutos * 6;
    }

}

//se é 12h o angulo é 0°
//se é 60min o angulo é 0°
//vamos considerar um relógio AM PM
//Logo cada hora é 360/12 = 30°
//Cada minuto é 360/60 = 6°
