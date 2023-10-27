function mediaArray(array) {
    const somma = array.reduce((acc, num) => acc + num, 0);
    return somma / array.length;
}

console.log("La media degli elementi nell'array è: " + mediaArray([1, 2, 3, 4, 5]));
