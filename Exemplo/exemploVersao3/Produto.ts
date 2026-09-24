export default class Produto {
    descricao: string;
    valor: number;
    // Cuidado isso é o encapsulamento!!

    public constructor() {
        this.descricao = "Descrição de exemplo";
        this.valor = 0;
    }
}