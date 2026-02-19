// Запрос числа и приведение к типу Number
let userInput = prompt('Введите число:');
let number = Number(userInput);

// Проверка: является ли ввод числом
if (isNaN(number)) {
    alert('Это не число!');
} else {
    // Проверка на четность
    if (number % 2 === 0) {
        alert('Число ' + number + ' - ЧЁТНОЕ');
    } else {
        alert('Число ' + number + ' - НЕЧЁТНОЕ');
    }

}






