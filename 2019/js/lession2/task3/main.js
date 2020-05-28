'use strict';

let resultSum = 0;
let input;

do {
    input = prompt('Введите число для суммирования');

    const numberValue = Number(input);
    if (!isNaN(input)) {
        resultSum += numberValue;
    }

} while (input !== null);

alert(`Сумма введенных чисел ${resultSum}`);
