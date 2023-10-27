function sommaNumeriFinoA(numero) {
    let somma = 0;
    for (let i = 1; i <= numero; i++) {
        somma += i;
    }
    return somma;
}

console.log(sommaNumeriFinoA(5)); 
