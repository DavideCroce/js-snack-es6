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
let bicicletta;
let pesoMin;
for (let i = 0; i < biciclette.length; i++){
    bicicletta = biciclette[i];
    const {peso} = bicicletta;
    console.log(peso);
    if (i == 0 || peso < pesoMin){
        pesoMin = peso;
    }
}
console.log(bicicletta);
console.log(`la bicicletta che pesa di meno è ${bicicletta.nome} con un peso di ${bicicletta.peso} kilogrammi. `);

// let bicicletta;
// let pesoBici;
// let pesomin;
// for (let i = 0; i < biciclette.length; i++){
//     // bicicletta = biciclette[i];
//     // console.log(bicicletta);
//     pesoBici = biciclette[i].peso;
//     console.log(pesoBici);
//     // if ( i == 0){
//     //     pesomin = bicicletta.peso;
//     // }

//     // if (bicicletta.peso < pesomin){
//     //     pesomin = bicicletta.peso;
//     // }

// }

// console.log(pesomin);

// const {peso} = biciclette[i];

// DESTRUCTURING
// keyword(var, let o const) {nome proprietà} = oggetto da cui prendere i valori

//TEMPLATE LITERAL
