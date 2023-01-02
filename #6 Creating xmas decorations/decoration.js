function createCube(size) {
    const middeUpperFace = "/\\";
    const middeLowerFace = "\\/"
    const upperSide = "_\\";
    const lowerSide = "_/";
    let cube = "";
    let drewFaces = 1;
    let spaces = size - 1;

    while (drewFaces <= size) {
        cube += `${' '.repeat(spaces)}${middeUpperFace.repeat(drewFaces)}${upperSide.repeat(size)}\n`;
        drewFaces++;
        if (spaces !== 0)
            spaces--;
    }

    drewFaces = size;
    while (drewFaces >= 1) {
        if (drewFaces !== 1)
            cube += `${' '.repeat(spaces)}${middeLowerFace.repeat(drewFaces)}${lowerSide.repeat(size)}\n`;
        else
            cube += `${' '.repeat(spaces)}${middeLowerFace.repeat(drewFaces)}${lowerSide.repeat(size)}`;
        drewFaces--;
        spaces++;
    }

    return cube;
}