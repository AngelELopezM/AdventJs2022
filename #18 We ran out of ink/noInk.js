function dryNumber(dry, numbers) {

    let dryNumber = [];
    for (let i = 1; i <= numbers; i++) {
        if (i.toString().includes(dry.toString()))
            dryNumber.push(i);
    }
    return dryNumber;
}