'use strict';

const firstNumber = checkPromtNumber(
    prompt("Пожалуйста введите первое число?")
);
const secondNumber = checkPromtNumber(
    prompt("Пожалуйста введите второе число?")
);

const isFirstNumberGreater = firstNumber > secondNumber;
const isSecondNumberGreater = firstNumber < secondNumber;
const isNumberAreEquals = firstNumber === secondNumber;

if (isFirstNumberGreater) {
    alert(`Первое число больше второго ${firstNumber} > ${secondNumber}`);
} else if (isSecondNumberGreater) {
    alert(`Второе число больше первого ${firstNumber} < ${secondNumber}`);
} else if (isNumberAreEquals) {
    alert(`Числа равны ${firstNumber} === ${secondNumber}`);
}

function checkPromtNumber(variable) {
    const numberValue = Number(variable);
    if (isNaN(variable)) {
        alert("Пожалуйста введите число");
        throw new Error("Пожалуйста введите число");
    } else {
        return numberValue;
    }
}
