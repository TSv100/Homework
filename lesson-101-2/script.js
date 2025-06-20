"use strict";
const numbers = [5, 11, 8, 20, 3, 14, 7];

function printNumbersOverTen(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log(array[i]);
        }
    }
}

printNumbersOverTen(numbers);






