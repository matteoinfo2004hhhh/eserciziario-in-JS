function giorniInMese(mese, anno) {
    return new Date(anno, mese, 0).getDate();
}

console.log(giorniInMese(2, 2023));
console.log(giorniInMese(7, 2023));
