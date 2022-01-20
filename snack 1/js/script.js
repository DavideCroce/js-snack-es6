const biciclette = [
    {
        nome: 'Shimano',
        peso: 75,
    },
    {
        nome: 'Atala',
        peso: 67,
    },
    {
        nome: 'Velocity',
        peso: 95,
    },
    {
        nome: 'Carbonium',
        peso: 59,
    }
];

console.log(biciclette);

let bicicletta = 0;

for (let i = 0; i < biciclette.length; i++){
    bicicletta = biciclette[i];
}

console.log(bicicletta);

// const {peso} = biciclette[i];

// DESTRUCTURING
// keyword(var, let o const) {nome proprietà} = oggetto da cui prendere i valori

//TEMPLATE LITERAL
