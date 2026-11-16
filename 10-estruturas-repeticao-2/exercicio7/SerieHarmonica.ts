export default class SerieHarmonica {
    private n: number;
    private h: number;

    public constructor(n: number) {
        this.n = n;
        this.h = 0;
    }

    public getH(): number {
        return this.h;
    }

    public serieHarmonica(): number {
        let h: number = 0;

        for (let i = 1; i <= this.n; i++)
            h += 1 / i;
        
        return h;
    }
}