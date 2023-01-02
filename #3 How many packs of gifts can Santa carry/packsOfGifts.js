function distributeGifts(packOfGifts, reindeers) {
    let maxWeight = 0;
    reindeers.forEach(x => maxWeight += x.length)
    maxWeight *= 2;

    let packWeight = 0;
    packOfGifts.forEach(x => packWeight += x.length)

    return Math.floor(maxWeight / packWeight);
}