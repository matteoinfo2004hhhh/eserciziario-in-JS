function copiaArray(array) {
    return array.slice();
}

const arrayOriginale = [1, 2, 3, 4, 5];
const arrayCopia = copiaArray(arrayOriginale);
console.log("Array originale: " + arrayOriginale);
console.log("Array copia: " + arrayCopia);
