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
const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

for (i = 0; i < Squadre.length; i++){
    squadra = Squadre[i];
    console.log(squadra);
    squadra.punti = getRandomNumber();
    squadra.falli = getRandomNumber();
    const {nome, falli} = squadra;
    console.log(`nome: ${nome}, falli ${falli}`);
}

const TabelloneFN = [];

TabelloneFN.push(squadra);
