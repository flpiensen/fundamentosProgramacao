export default class Pessoa {
    private nome: string;

    public constructor(nome: string) {
        this.nome = nome;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public cumprimenta(): string {
        return "Olá!\n";
    }

    public cumprimentaPeloNome(nome: string): string {
        return "Olá, " + nome + "!\n";
    }

    public cumprimentaPessoa(outraPessoa: Pessoa): string {
        return "Olá, " + outraPessoa.getNome() + "!\n";
    }
}