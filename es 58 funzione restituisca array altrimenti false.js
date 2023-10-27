function hannoElementoComune(array1, array2) {
    return array1.some(elemento => array2.includes(elemento));
}

console.log(hannoElementoComune([1, 2, 3], [3, 4, 5])); // Output: true
console.log(hannoElementoComune([1, 2, 3], [4, 5, 6])); // Output: false
