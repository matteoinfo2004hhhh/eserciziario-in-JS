function orarioCorrente() {
    const adesso = new Date();
    const ore = adesso.getHours().toString().padStart(2, '0');
    const minuti = adesso.getMinutes().toString().padStart(2, '0');
    const secondi = adesso.getSeconds().toString().padStart(2, '0');
    return `${ore}:${minuti}:${secondi}`;
}

console.log(orarioCorrente()); 
