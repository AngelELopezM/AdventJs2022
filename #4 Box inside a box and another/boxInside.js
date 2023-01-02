function fitsInOneBox(boxes) {
    boxes.sort(function (a, b) {
        if (a.l > b.l)
            return 1;
        if (a.l < b.l)
            return -1;
        return 0;
    });

    let counter = 0;
    while (counter < boxes.length - 1) {
        if (boxes[counter].l > boxes[counter + 1].l
            || boxes[counter].l == boxes[counter + 1].l
            || boxes[counter].w > boxes[counter + 1].w
            || boxes[counter].w == boxes[counter + 1].w
            || boxes[counter].h > boxes[counter + 1].h
            || boxes[counter].h == boxes[counter + 1].h)
            return false;

        counter++;
    }
    return true;
}