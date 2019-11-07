const myName = prompt('Как вас зовут?');
const mySecondName = prompt('Введите вашу фамилию');
const myBirthYear = prompt('Ведите ваш год рождения');

const currentYear = new Date().getFullYear();
const age = currentYear - myBirthYear;

if (age < 20) {
    alert('Привет ' + myName + ' ' + mySecondName + '!');
} else if (age >= 20 && age < 40) {
    alert('Добрый день, ' +  myName + ' ' + mySecondName);
} else {
    alert('Здравствуйте, ' +  myName + ' ' + mySecondName);
}
