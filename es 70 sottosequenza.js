function trovaSottosequenze(stringa1, stringa2) {
    const risultato = [];
    const lunghezza1 = stringa1.length;
    const lunghezza2 = stringa2.length;

    const memo = new Array(lunghezza1 + 1).fill(null).map(() => new Array(lunghezza2 + 1).fill(0));

    for (let i = 1; i <= lunghezza1; i++) {
        for (let j = 1; j <= lunghezza2; j++) {
            if (stringa1[i - 1] === stringa2[j - 1]) {
                memo[i][j] = memo[i - 1][j - 1] + 1;
                if (memo[i][j] >= 3) {
                    risultato.push(stringa1.slice(i - memo[i][j], i));
                }
            } else {
                memo[i][j] = 0;
            }
        }
    }

    return risultato;
}

const stringa1 = "abcdef";
const stringa2 = "acfb";
const sottosequenze = trovaSottosequenze(stringa1, stringa2);
console.log("Sottosequenze comuni più lunghe di almeno 3 caratteri:");
console.log(sottosequenze);
