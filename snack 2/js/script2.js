console.log('JS OK');


const Squadre = [
    {
        nome: 'Raimon',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Royal Academy',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'BrainWashing',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Kirkwood',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Zeus',
        punti: 0,
        falli: 0,
    }
];

console.table(Squadre);
let squadra;
let rpoints;
let fpoints;
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

for (i = 0; i < Squadre.length; i++){
    squadra = Squadre[i];
    console.log(squadra);
    const {punti, falli} = squadra;
    console.log(`punti: ${punti}, falli ${falli}`);
    for(let j = 0; j < squadra.length; j++){
           
    }

}
console.log(rpoints);
console.log(fpoints);

