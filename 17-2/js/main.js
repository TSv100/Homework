let age = prompt('Введите Ваш возраст:');
let number = Number(age);
let discount = 0;

// Проверка: является ли ввод числом
if (isNaN(number)) {
    alert('Что-то пошло не так...');
} else {
    discount = number < 18 ? 10 : number <= 65 ? 20 : 30;
    alert(`Возраст: ${number} лет\nСкидка: ${discount}%`);
}
















