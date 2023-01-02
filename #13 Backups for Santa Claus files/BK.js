function getFilesToBackup(lastBackup, changes) {

    let modifiedFiles;
    modifiedFiles = changes.filter(x => x[1] != lastBackup && x[1] >= lastBackup);

    let listOfFiles = [];
    for (let item of modifiedFiles) {
        listOfFiles.push(item[0]);
    }

    listOfFiles.sort(function (a, b) {
        return a > b ? 1 : -1;
    });

    return [...new Set(listOfFiles)];
}