function sommaArray(array) {
    return array.reduce((acc, num) => acc + num, 0);
}

console.log("La somma degli elementi nell'array è: " + sommaArray([1, 2, 3, 4, 5]));
