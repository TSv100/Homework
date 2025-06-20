"use strict";
// Массив пользователей
const users = [
    { name: 'John', role: 'user' },
    { name: 'Ann', role: 'admin' },
    { name: 'Alex', role: 'user' },
    { name: 'Max', role: 'user' },
    { name: 'Don', role: 'admin' }
];

// Переменная для подсчета простых пользователей
let simpleUsersCount = 0;

// Обходим массив пользователей
for (const user of users) {
    if (user.role !== 'admin') {
        simpleUsersCount++;
    }
}

// Выводим результат
console.log('Количество простых пользователей:', simpleUsersCount);




