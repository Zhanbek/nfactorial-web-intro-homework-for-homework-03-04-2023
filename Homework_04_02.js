
/*
Напишите функцию `pow(x,n)`, которая возвращает `x` в степени `n`. Иначе говоря, умножает `x` на себя `n` раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 *1 * ... * 1 = 1
*/

function pow(value, degree) {
    let result = 1;
    let i = 0;
    while (i < degree) {
        result *= value;
        i++;
    }
    return result;
}

const value = prompt('Укажите число!', 1);
const n = prompt('Укажите степень', 100);
const result = pow(value, n);

alert(result);
