function wrapping(gifts) {
    if (gifts === []) return gifts;

    let wrapped = [];
    const wrapper = '*';
    gifts.map(x => wrapped.push(`${wrapper.repeat(x.length + 2)}\n*${x}*\n${wrapper.repeat(x.length + 2)}`));
    return wrapped;
}