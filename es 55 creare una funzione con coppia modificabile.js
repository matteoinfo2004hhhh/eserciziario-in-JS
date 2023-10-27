function copiaOggetto(oggetto) {
    return Object.assign({}, oggetto);
}

const oggettoOriginale = { a: 1, b: 2, c: 3 };
const oggettoCopia = copiaOggetto(oggettoOriginale);
console.log("Oggetto originale: " + JSON.stringify(oggettoOriginale));
console.log("Oggetto copia: " + JSON.stringify(oggettoCopia));
