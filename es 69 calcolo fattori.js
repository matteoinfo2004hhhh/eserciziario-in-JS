function calcolaFattoriale(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcolaFattoriale(numero - 1);
    }
}

const numero = 5;
const fattoriale = calcolaFattoriale(numero);
console.log(`Il fattoriale di ${numero} è ${fattoriale}`);
