export default class Dado {
    readonly FACES: number;
    private sorteado!: number;

    public constructor(faces: number) {
        this.FACES = faces;
        this.proximaJogada();

    }

    public proximaJogada(): number {
        this.sorteado = Math.ceil(Math.random()*this.FACES);
        return this.sorteado;
    }

    public ultimaJogada(): number {
        return this.sorteado;
    }
}