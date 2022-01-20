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
console.log(pesoMin);
console.log(bicicletta);
console.log(`La bicicletta che pesa di meno è ${bicicletta.nome} con un peso di ${bicicletta.peso} kilogrammi. `);

