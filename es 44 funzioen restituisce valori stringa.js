function contaVocali(stringa) {
    const vocali = stringa.match(/[aeiou]/gi);
    return vocali ? vocali.length : 0;
}

console.log("Il numero di vocali nella stringa è: " + contaVocali("Hello, World!"));
