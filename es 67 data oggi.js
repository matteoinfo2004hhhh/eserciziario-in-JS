function formattaData(data) {
    const opzioni = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return data.toLocaleDateString('it-IT', opzioni);
}

const data = new Date('2023-10-27');
console.log(formattaData(data)); 
