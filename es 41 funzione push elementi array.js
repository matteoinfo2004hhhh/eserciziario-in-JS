function elementoPiuFrequente(array) {
    let contatore = {};
    let elementoPiuComune;
    let maxConteggio = 0;
    for (let elemento of array) {
        contatore[elemento] = (contatore[elemento] || 0) + 1;
        if (contatore[elemento] > maxConteggio) {
            maxConteggio = contatore[elemento];
            elementoPiuComune = elemento;
        }
    }
    return elementoPiuComune;
}

console.log("L'elemento più frequente è: " + elementoPiuFrequente([1, 2, 2, 3, 4, 2, 3]));
