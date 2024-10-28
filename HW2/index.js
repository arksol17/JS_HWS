// 1. true; тк "т" больше чем "д"
// 2. ("24"); умножением произошло преобразование в number (4), сложение преобразовало строку и число в string
// 3. true; равны ничему особенность языка js, понимаю это как две коробки, в которых ничего нет.
// 4. false; обратное значение варианту выше
// 5. false; "ничего" не может быть равно числу 0
// 6. false; строка "3" преобразовалась в число при сравнении
// 7. 1; ничего - 0 + 1 (операторы - и + преобразуют булево true и false в числа)
// 8. NaN; число делим на строку = not a number
// 9. 6; оператор * преобразует тип строка в тип число
// 10. "9O"; 4+5 = 9, оператор + преобразует тип число в строку, если есть тип строка в операции
// 11. "I45"; то же правило как и в 10 примере, за исключением порядка выполнения
// 12. 2; оператор - преобразует тип строка в число
// 13. NaN; js попробует преобразовать в число, но не получится из за строчной буквы
// 14. true; оператор нестрого сравнения приводит типы к одному, чтобы сравнить
// 15. false; операнд false привелся к числу 0, null (ничего) не может быть равен числу
// 16. Будет -Infinity, но изначально посчитал как 0, забыв про это; оператор / привел тип строка к типу число
// 17. 1; ничего + тип число
// 18. NaN; при приобразовании в тип число, underfined=NaN, null - ничего
// 19. false; строгое сравнение с самого начала сравнивать типы
// 20. false; преобразование в число
// 21. false; NaN - какое то уже заданное значение и оно != числу или строке, undefined условная переменная без значения


let textRight = "Верно";
let textWrong = "Неверно";
//let a = 1;


//Работа с if, else
//№ 1

/* if (a == 0) {
  console.log(textRight);
} else {
  console.log(textWrong);
} */

//№ 2

/* if (a > 0) {
  console.log(textRight);
} else {
  console.log(textWrong);
} */

//№ 3

/* if (a < 0) {
  console.log(textRight);
} else {
  console.log(textWrong);
} */

//№ 4

/* if (a >= 0) {
  console.log(textRight);
} else {
  console.log(textWrong);
} */


//№5 

/* if (a <= 0) {
  console.log(textRight);
} else {
  console.log(textWrong);
} */

//№6 

/* if (a != 0) {
  console.log(textRight);
} else {
  console.log(textWrong);
} */

//№7 

/* if (a == 'test') {
  console.log(textRight);
} else {
  console.log(textWrong);
} */

//№8 

/* if (a === '1') {
  console.log(textRight);
} else {
  console.log(textWrong);
}
 */
//Работа с логическими переменными
//№ 1
/* let test = false;

if (test == true) {
  console.log(textRight);
} else {
  console.log(textWrong);
} */
//№2
/* if (test != true) {
  console.log(textRight);
} else {
  console.log(textWrong);
} */

//Работа с && и ||
//№1
/* if (a > 0 && a < 5) {
  console.log(textRight);
} else {
  console.log(textWrong);
}
 */
//№2
/* let a = 50;
let b = 50; */
/* if (a == 0 || a == 2) {
  console.log(a+7);
} else {
  console.log(a/10);
} */

//№3
/* if (a <= 1 && b >= 3) {
  console.log(a+b);
}else{
console.log(a-b);
} */

//№4
/* if (a > 2 && a < 11 || b >= 6 && b < 14) {
  console.log(textRight);
}else{
console.log(textWrong);
}
 */

//На switch-case

/* let num = 5;
let result

switch (num) {
  case 1:
    console.log(result = "Зима");
    break
  case 2:
    console.log(result = "Весна");
    break
  case 3:
    console.log(result = "Осень");
    break
  case 4:
    console.log(result = "Лето");
    break
  default:
    console.log(result = "Неправильное значение");
    break
} */

//Общие задачи

/* let day = 32;

if (day > 0 && day <= 10) {
  console.log("Первая декада");
} else if (day > 10 && day <= 20) {
  console.log("Вторая декада");
} else if (day > 21 && day <= 31) {
  console.log("Третья декада");
} else {
  console.log("Некорректное число");
} */

/* let month = 2;

let result

switch (month) {
    case 12:
    console.log(result = "Зима");
    break
    case 1:
    console.log(result = "Зима");
    break
    case 2:
    console.log(result = "Зима");
    break
    case 3:
    console.log(result = "Весна");
    break
    case 4:
    console.log(result = "Весна");
    break
    case 5:
    console.log(result = "Весна");
    break
    case 6:
    console.log(result = "Лето");
    break
    case 7:
    console.log(result = "Лето");
    break
    case 8:
    console.log(result = "Лето");
    break
    case 9:
    console.log(result = "Осень");
    break
    case 10:
    console.log(result = "Осень");
    break
    case 11:
    console.log(result = "Осень");
    break
  default:
    console.log(result = "Неправильное значение");
    break
} */

//Циклы while и for
//№ 1
/* let a = 0; */
/* while (a++<100) {
  console.log(a);
}
 */

/* for (let a = 1; a <= 100; a++) {
  console.log(a);
} */

/* let a = 10;
№ 2
  while (a++<33) {
    console.log(a);
  } */

/* for (let a = 11; a <= 33; a++) {
  console.log(a);
} */
//№ 3

/* let a = -2;
while (a < 100) {
  a = a + 2;
  console.log(a);
} */

/* for (let b = -2; b < 100;) {
  b = b + 2;
  console.log(b);
}
 */


/* let b = 0;
let a = 0;

while (a < 100) {
  a++;
  b = b+a;
  console.log(b);
} */

/* let b = 0;
let a = 0;

for (; a < 100; ) {
  a++
  b = b + a;
  console.log(b);
} */


//Задачи общие

let iterSum = 0;
let b = 2;

for (let a = 1000; a > 50; ) {
  iterSum++;
  a = a / b;
  console.log(a);
  console.log(iterSum);
}