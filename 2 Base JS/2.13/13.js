//При помощи цикла for выведите чётные числа от 2 до 10
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 1) continue;
    alert(i);
}

/*Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}*/

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++
}

//Напишите цикл, который предлагает prompt ввести число, большее 100. 
//Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
//Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
//Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

for (let i = 0; i = 100;) {
    let input = prompt('Введите число, большее 100?');
    if (input > 100 || input == null) break;
}
alert(i);

//Напишите код, который выводит все простые числа из интервала от 2 до n.
//Для n = 10 результат должен быть 2,3,5,7.
//P.S. Код также должен легко модифицироваться для любых других интервалов.

let n = 10;

outer: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue outer;
    }
    alert(i);
}



