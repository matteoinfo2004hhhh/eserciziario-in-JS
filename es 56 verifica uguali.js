function sonoTuttiUguali(array) {
    return array.every(elemento => elemento === array[0]);
}

console.log(sonoTuttiUguali([1, 1, 1, 1])); 
console.log(sonoTuttiUguali([1, 2, 1, 1])); 
