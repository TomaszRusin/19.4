'use strict';

// ZADANIE PIERWSZE

var first = 'Hello';

var second = 'World';

{
    console.log('' + first + second);
}

// ZADANIE DRUGIE

var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return console.log(a * b);
};

// ZADANIE TRZECIE

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        return sum += arg;
    });
    return console.log(sum / args.length);
};

// ZADANIE CZWARTE

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average.apply(undefined, grades);

// ZADANIE PIĄTE

var _ref = [1, 4, 'Iwona', false, 'Nowak'],
    firstName = _ref[2],
    lastName = _ref[4];
