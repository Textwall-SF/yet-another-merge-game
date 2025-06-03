class Random
{
    static get INT_MAX()
    {
        return 9223372036854775807;
    }

    static get SEQ()
    {
        return "3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067" //use pi digits to make it work for seeds -1, 0, 1
    }

    constructor(seed)
    {
        this.seed = seed;
        this.generation = 0;
        if(seed === undefined)
        {
            this.seed = Date.now();
        }
        this.n = this.seed;
        for(let i = 0; i < 10; i++) this.next();
    }

    next()
    {
        let increment = this.seed + parseInt(Random.SEQ[this.generation % Random.SEQ.length]);
        this.n = (this.n + increment) * increment;
        this.n %= Random.INT_MAX;
        this.generation++;
    }

    nextInt(bound = Random.INT_MAX)
    {
        this.next();
        return this.n % bound;
    }

    nextDouble()
    {
        this.next();
        return this.n / Random.INT_MAX;
    }
}
