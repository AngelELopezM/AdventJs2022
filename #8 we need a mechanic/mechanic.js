function checkPart(part) {
    let reversed = '';
    let reversedTestWord = '';
    let testWord = '';

    reversed = part.split("").reverse().join("");
    if (reversed === part)
        return true;

    for (let item of part) {
        testWord = part.replace(item, '');
        reversedTestWord = testWord.split("").reverse().join("");
        if (reversedTestWord === testWord)
            return true;
    }

    return false;
}