"use strict";
// Функция для выполнения операции
function calculator(num1, num2, operation) {
    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Ошибка! Делить на ноль нельзя';
            }
            break;
        default:
            result = 'Некорректная операция';
    }

    return result;
}

// Получение данных от пользователя через prompt
const firstNumber = parseFloat(prompt("Введите первое число:"));
const secondNumber = parseFloat(prompt("Введите второе число:"));
const operation = prompt("Введите знак операции (+, -, *, /):");

// Вызов функции с введенными данными
const result = calculator(firstNumber, secondNumber, operation);

// Вывод результата
alert(`Результат: ${result}`);




