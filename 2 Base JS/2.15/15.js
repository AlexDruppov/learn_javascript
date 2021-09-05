/*Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор ||*/

function checkAge(age) {
    (age > 18) || confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');

}

/*Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1*/

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
let result1 = min(2, 5);
let result2 = min(3, -1);
let result3 = min(1, 1);
alert(result1);
alert(result2);
alert(result3);

/*Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).*/

function pow(x, n) {
    let num = x ** n;
    return num;

}
let x = prompt('Enter number x');
let n = prompt('Enter number n');

if (n < 1) {
    alert("'n' поддерживет только натуральные значения, т.е. целые от 1 и выше ")
} else {
    alert(pow(x, n));
}

