export default class Produto {
    private descricao: string;
    private valor: number;
    private peso: number;
    
    public constructor(descricao: string, valor: number, peso: number) {
        this.descricao = descricao;
        this.valor = valor;
        this.peso = peso;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = Math.abs(valor);
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(peso: number): void {
        this.peso = Math.abs(peso);
    }

    public calcularPesoQuilo(): number {
        return this.valor / this.peso;
    }
}