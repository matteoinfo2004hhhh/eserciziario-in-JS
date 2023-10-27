const oggetto1 = { a: 1, b: 2, c: 3 };
const oggetto2 = { a: 1, b: 2, c: 3 };

function sonoUguali(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

console.log("Gli oggetti sono uguali: " + sonoUguali(oggetto1, oggetto2));
