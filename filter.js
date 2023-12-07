let duomenys = [
    { vardas: 'Jonas', amzius: 25, miestas: 'Vilnius' },
    { vardas: 'Ona', amzius: 30, miestas: 'Kaunas' },
    { vardas: 'Petras', amzius: 45, miestas: 'kaunas' },
    { vardas: 'Juozas', amzius: 15, miestas: 'Šiauliai' },
    { vardas: 'Dovydas', amzius: 20, miestas: 'Šiauliai' },
    { vardas: 'Mykolas', amzius: 23, miestas: 'Klaipeda' },
    { vardas: 'Miglė', amzius: 25, miestas: 'Vilnius' },
    { vardas: 'Jonė', amzius: 45, miestas: 'Kaunas' },
    { vardas: 'Tomas', amzius: 20, miestas: 'Šiauliai' },
    { vardas: 'Mykolas', amzius: 30, miestas: 'Kaunas' },
    { vardas: 'Jonas', amzius: 23, miestas: 'Klaipeda' },
    { vardas: 'Linas', amzius: 15, miestas: 'Šiauliai' },
    { vardas: 'Ona', amzius: 25, miestas: 'Vilnius' },
];

// Funkcija, kuri atvaizduoja filtruotus rezultatus DOM'e
function displayResults(fData) {
    let resultList = document.getElementById('resultList');
    resultList.innerHTML = '';

    fData.forEach(function (item) {
        let listItem = document.createElement('li');
        listItem.textContent = `Vardas: ${item.vardas}, Amžius: ${item.amzius}, Miestas: ${item.miestas}`;
        resultList.appendChild(listItem);
    });
}

// Funkcija, kuri atlieka filtravimą pagal naudotojo įvestas sąlygas
function filterData() {
    let ageInput = document.getElementById('age');
    let cityInput = document.getElementById('city');

    let fData = duomenys.filter(function (item) {
        let ageResult = !ageInput.value || item.amzius === parseInt(ageInput.value);
        let cityResult = !cityInput.value || item.miestas.toLowerCase().includes(cityInput.value.toLowerCase());

        return ageResult && cityResult;
    });

    displayResults(fData);
}
