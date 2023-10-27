function differenzaArray(array1, array2) {
    return array1.filter(elemento => !array2.includes(elemento));
}

console.log(differenzaArray([1, 2, 3, 4, 5], [3, 4, 5, 6])); // Output: [1, 2]
