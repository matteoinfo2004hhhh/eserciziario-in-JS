function indiceElementoPiuGrande(array) {
    let max = array[0];
    let indice = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            indice = i;
        }
    }
    return indice;
}

console.log(indiceElementoPiuGrande([1, 5, 3, 9, 2])); 
