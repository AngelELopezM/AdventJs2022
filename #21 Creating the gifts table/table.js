function printTable(gifts) {
    let wordLength = [];
    let numberLength = [];
    let topBottonLength;
    const gift = 'Gift';
    const quantity = 'Quantity';
    for (const item of gifts) {
        wordLength.push(item.name.length);
        numberLength.push(item.quantity.toString().length);
    }

    const maxWordLength = Math.max(...wordLength);
    const maxNumberLength = Math.max(...numberLength);
    topBottonLength = (maxWordLength > gift.length
        ? maxWordLength : gift.length) + 7;
    topBottonLength += maxNumberLength > quantity.length
        ? maxNumberLength
        : quantity.length;
        
    const top = '+';
    const tableTop = `${top.repeat(topBottonLength)}\n`;
    const botton = '*';
    const tableBotton = `${botton.repeat(topBottonLength)}`;

    const giftsSpacing = maxWordLength > gift.length
        ? maxWordLength - 3 : 1;
    const quantitySpacing = maxNumberLength > quantity.length
        ? maxNumberLength - 7 : 1;
    const titles = '| ' + gift + ' '.repeat(giftsSpacing) + '| '
        + quantity + ' '.repeat(quantitySpacing) + '|\n';

    const giftsDivider = maxWordLength > gift.length
        ? maxWordLength : 4;
    const quantityDivider = maxNumberLength > quantity.length
        ? maxNumberLength : 8;
    const dividingLine = '| ' + '-'.repeat(giftsDivider) + ' | '
        + '-'.repeat(quantityDivider) + ' |\n';

    let itemList = '';
    for (let i = 0; i < gifts.length; i++) {
        const giftsSpacing = maxWordLength >= gift.length
            ? maxWordLength - gifts[i].name.length
            : gift.length - gifts[i].name.length;

        const quantitySpacing = maxNumberLength > quantity.length
            ? maxNumberLength - gifts[i].quantity.toString().length
            : quantity.length - gifts[i].quantity.toString().length;

        itemList += '| ' + gifts[i].name + ' '.repeat(giftsSpacing) + ' | '
        itemList += gifts[i].quantity + ' '.repeat(quantitySpacing) + ' |\n';
    }

    return tableTop + titles + dividingLine + itemList + tableBotton;
}