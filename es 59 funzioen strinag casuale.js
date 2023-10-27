function stringaCasuale(lunghezza) {
    const caratteri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let risultato = "";
    for (let i = 0; i < lunghezza; i++) {
        risultato += caratteri.charAt(Math.floor(Math.random() * caratteri.length));
    }
    return risultato;
}

console.log(stringaCasuale(8)); 
