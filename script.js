// ZADANIE PIERWSZE

const first = 'Hello';

const second = 'World';

{
    console.log(`${first}${second}`)
}

// ZADANIE DRUGIE

const multiply = (a = 1, b = 1) => console.log(a * b);

// ZADANIE TRZECIE

const average = (...args) => {
    let sum = 0;
    args.forEach(arg => sum += arg)
    return console.log(sum/args.length);
};

// ZADANIE CZWARTE

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]

average(...grades);

// ZADANIE PIĄTE

const [ , ,firstName, ,lastName] = [1, 4, 'Iwona', false, 'Nowak']


