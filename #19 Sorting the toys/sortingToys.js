function sortToys(toys, positions) {
    let combinations = {};
    let arrangedToys = [];
    toys.forEach((x, index) => {
        combinations[`${positions[index]}`] = `${x}`;
    })
    for (let [key, value] of Object.entries(combinations)) {
        arrangedToys.push(value);
    }

    return arrangedToys;
}