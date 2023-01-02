function decorateTree(base) {
    const valueDictionary = {
        PP: 'P',
        BB: 'B',
        RR: 'R',
        BP: 'R',
        PB: 'R',
        RP: 'B',
        PR: 'B',
        BR: 'P',
        RB: 'P'
    };

    let result = [];
    result.unshift(base);
    base = base.replaceAll(' ', '');
    let repetitions = 0;
    let combinationToEvaluate = '';
    let subResult = '';
    let lineToEvaluate = base.length;
    while (repetitions < lineToEvaluate) {
        combinationToEvaluate = (base.slice(repetitions, repetitions + 2));
        subResult += (valueDictionary[combinationToEvaluate]);

        repetitions++;
        if (repetitions == lineToEvaluate - 1) {

            result.unshift(subResult.replaceAll('', ' ').trim());
            lineToEvaluate = subResult.length;
            base = subResult;
            if (lineToEvaluate > 1) {
                subResult = '';
                repetitions = 0;
            }
        }
    }
    return result;
}