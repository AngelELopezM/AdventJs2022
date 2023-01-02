function checkStepNumbers(systemNames, stepNumbers) {
    const singleNames = [...new Set(systemNames)];
    let lastNumber;
    let works = true;

    singleNames.some(single => {
        lastNumber = stepNumbers[systemNames.indexOf(single)];
        systemNames.forEach((x, index) => {

            if (x === single && lastNumber >= stepNumbers[index]
                && systemNames.indexOf(single) != index)
                works = false;
            if (x === single)
                lastNumber = stepNumbers[index];
        });
        return !works;
    })
    return works;
}