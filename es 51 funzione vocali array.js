function vocaliMaiuscole(stringa, n) {
    const vocali = "aeiou";
    let contatore = 0;
    let risultato = "";
    for (let carattere of stringa) {
        if (vocali.includes(carattere.toLowerCase())) {
            risultato += carattere.toUpperCase();
            contatore++;
            if (contatore === n) break;
        } else {
            risultato += carattere.toLowerCase();
        }
    }
    return risultato;
}

console.log(vocaliMaiuscole("Hello, World!", 3));
