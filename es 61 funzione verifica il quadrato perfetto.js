function isQuadratoPerfetto(numero) {
    return Math.sqrt(numero) % 1 === 0;
}

console.log(isQuadratoPerfetto(16)); 
console.log(isQuadratoPerfetto(25)); 
console.log(isQuadratoPerfetto(10)); 
