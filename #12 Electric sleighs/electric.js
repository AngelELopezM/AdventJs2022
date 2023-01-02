function selectSleigh(distance, sleighs) {
    let optionsToConsider = [];
    
    const allowedWatts = 20;
    sleighs.forEach(x => {
        x.consumption * distance <= allowedWatts
            &&
            optionsToConsider.push({ "name": x.name, "consumption": x.consumption });
    });
    const optimalOption = optionsToConsider.length > 0
        ?
        optionsToConsider[optionsToConsider.length - 1].name
        :
        null;

    return optimalOption;
}