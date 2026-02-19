const firstName = 'Александр';
const lastName = 'Иванов';
const isStudent = true;

const age = 30;
const currentYear = 2026;
const birthYear = currentYear - age;
console.log(birthYear);

console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}`);

let a = '123'; // строка со значением 123
let b = +'456'; // число 456
let c = Number('789'); // число 456
let d = Boolean(0); // false, потому что ноль
let e = Boolean(' '); // true, потому что не пустая строка в виде пробела

let result = a + b + c + d + e;

// должна произойти конкатенация строк - т.е. объединение: фактически все значения слипнутся друг с другом по порядку без пробелов в одну строку

console.log(result); // да, так и произошло: 123456789falsetrue







