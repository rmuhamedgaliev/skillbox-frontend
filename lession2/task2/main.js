'use strict';

const firstYear = checkPromtYear(
    prompt('Пожалуйста введите начальный год')
);

const secondYear = checkPromtYear(
    prompt('Пожалуйста введите конечный год')
);

const leapYears = [];
let leapYearsString = `Високосный года в промежутке ${firstYear} - ${secondYear}:\n`;

checkInputYears(firstYear, secondYear);

for (let year = firstYear; year <=secondYear; year ++) {
    if (isLeapYear(year)) {
        leapYears.push(year);
        leapYearsString += `${year},\n`;
    }
}

alert(leapYearsString);
console.log(leapYearsString);

function checkInputYears(firstYear, secondYear) {
    const isFirstYearGreater = firstYear > secondYear;

    if (isFirstYearGreater) {
        alert(`Начальный год не может быть больше конечного ${firstYear} > ${secondYear}`);
        throw new Error(`Начальный год не может быть больше конечного ${firstYear} > ${secondYear}`);
    }
}

function checkPromtYear(variable) {
    const numberValue = Number(variable);
    if (isNaN(variable)) {
        alert('Пожалуйста введите число');
        throw new Error('Пожалуйста введите число');
    } else {
        return numberValue;
    }
}

function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
