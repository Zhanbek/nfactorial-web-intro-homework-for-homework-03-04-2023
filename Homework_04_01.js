/*
Перепишите функцию, используя оператор '?' или '||'

Следующая функция возвращает `true`, если параметр `age` больше `18`.

В ином случае она задаёт вопрос `confirm` и возвращает его результат.
*/

function checkAge(age) {
    let result;
    result = (age > 18) ? true : confirm('Родители разрешили?');
    return result;
}

const ageValue =  prompt('Укажите возраст', 18);
let value = checkAge(ageValue);
console.log(value);