export default class Eleitor {
    private idade: number;
    static readonly NAOPERMITIDO: number = 15;
    static readonly OBRIGATORIOMIN: number = 18;
    static readonly OBRIGATORIOMAX: number =70;

    public constructor(idade: number) {
        this.idade = idade;
    }

    public getDevoVotar(): string {
        if(this.idade <= Eleitor.NAOPERMITIDO) {
            return "não é permitido votar!"
        } 
        if(this.idade > Eleitor.NAOPERMITIDO && this.idade < Eleitor.OBRIGATORIOMIN) {
            return "Voto é facultativo"
        }
        if(this.idade >= Eleitor.OBRIGATORIOMIN && this.idade <= Eleitor.OBRIGATORIOMAX) {
            return "Voto é obrigatório"
        }
        if(this.idade > Eleitor.OBRIGATORIOMAX) {
            return "Voto é facultativo"
        }

        return "Voto é facultativo"
          
    }

}