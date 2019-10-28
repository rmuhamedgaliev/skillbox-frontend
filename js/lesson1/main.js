var myName = prompt('Как вас зовут?');
var mySecondName = prompt('Введите вашу фамилию');
var myBirthYear = prompt('Ведите ваш год рождения');

var currentYear = new Date().getFullYear();
var age = currentYear - myBirthYear;

if (age < 20) {
    alert('Привет ' + myName + ' ' + mySecondName + '!');
} else if (age >= 20 && age < 40) {
    alert('Добрый день, ' +  myName + ' ' + mySecondName);
} else {
    alert('Здравствуйте, ' +  myName + ' ' + mySecondName);
}