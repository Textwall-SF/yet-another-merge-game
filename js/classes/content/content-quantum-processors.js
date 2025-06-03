class ContentQuantumProcessors {
    constructor() {
        this.cores = [];
    }

    isUnlocked() {
        return game.prestige.highestQuantumFoam.gte(100e9);
    }

    getProcessorCorePrice() {
        let len = this.cores.length;

        if (len < 10) {
            return [100e9, 1e16, 1e22, 1e29, 1e40, 1e45, 1e54, 1e67, 1e80, 1e100][len];
        }
    }

    getProcessorBoost() {
        let boost = new Decimal(1);

        for (let core of this.cores) {
            boost = boost.mul(core.getCurrentBoost());
        }

        return boost;
    }
}
