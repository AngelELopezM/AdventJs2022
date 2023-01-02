function getGiftsToRefill(a1, a2, a3) {
    let gifsToRefill = [];
    const allStoresUniques = [...new Set(a1), ...new Set(a2), ...new Set(a3)];
    const single = 1;

    allStoresUniques.forEach(x => {
        allStoresUniques.filter(item => item === x).length === single
            && gifsToRefill.push(x);
    });

    return gifsToRefill;
}