// ZADANIE PIERWSZE

const first = 'Hello';

const second = 'World';

console.log(`${first}${second}`)

// ZADANIE DRUGIE

const multiply = (a = 1, b = 1) => console.log(a * b);

// ZADANIE TRZECIE

const average = (...args) => {
    let sum = args.reduce((a, b) => a + b)
    let avr = sum/args.length
    return avr;
};

// ZADANIE CZWARTE

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

average(...grades);

// ZADANIE PIĄTE

const [ , ,firstName, ,lastName] = [1, 4, 'Iwona', false, 'Nowak']


