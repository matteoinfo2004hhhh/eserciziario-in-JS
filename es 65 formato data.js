function isFormatoDataValido(data) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(data);
}

console.log(isFormatoDataValido("27/10/2023")); 
console.log(isFormatoDataValido("10-27-2023")); 
