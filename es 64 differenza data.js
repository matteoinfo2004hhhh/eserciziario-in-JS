function differenzaInGiorni(data1, data2) {
    const unGiorno = 24 * 60 * 60 * 1000; 
    const differenza = Math.abs(data1 - data2);
    return Math.round(differenza / unGiorno);
}

const data1 = new Date('2023-01-01');
const data2 = new Date('2023-10-27');
console.log(differenzaInGiorni(data1, data2));
