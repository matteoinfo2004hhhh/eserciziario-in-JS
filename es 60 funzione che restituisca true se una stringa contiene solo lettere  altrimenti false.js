function contieneSoloLettere(stringa) {
    return /^[a-zA-Z]+$/.test(stringa);
}

console.log(contieneSoloLettere("Hello"));
console.log(contieneSoloLettere("Hello123")); 
