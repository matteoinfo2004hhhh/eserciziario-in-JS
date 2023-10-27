function isPalindroma(parola) {
    const parolaInvertita = parola.split('').reverse().join('');
    return parolaInvertita === parola;
}

console.log(isPalindroma("radar")); 
console.log(isPalindroma("hello"));
