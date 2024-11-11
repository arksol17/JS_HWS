// 1. Сделайте функцию, которая возвращает квадрат числа. Число  передается параметром.
//

/* function name (a = 5) {
    return a * a;
} */


// 2. Сделайте функцию, которая возвращает сумму двух чисел.//

/* function name(a = 0,b = 0) {
    return a+b;
} */

// 3. Сделайте функцию, которая отнимает от первого числа второе  и делит на третье.

/* function name(a, b, c) {
    console.log((a-b)/c);
}

name (50, 300, 2); */

// 4. Сделайте функцию, которая принимает параметром число от 1  до 7, 
// а возвращает день недели на русском языке.

/* function name(a='55') {
    if (a==1) {
        return ("Понедельник");
    } else if (a==2) {
        return ("Вторник");
    } else if (a==3) {
        return ("Cреда");
    } else if (a==4) {
        return ("Четверг");
    } else if (a==5) {
        return ("Пятница");
    } else if (a==6) {
        return ("Суббота");
    } else if (a==7) {
        return ("Воскресенье");
    } else if (a>7||a<1||a!=typeof(Number)){
        console.log("Неправильное число");
        return null
    }
}
console.log(name()); */


// 5. Сделайте функцию, которая параметрами принимает 2 числа.  
//    Если эти числа равны - пусть функция вернет true, а если не  равны - false.

/* function name(a = 'ok', b = 5) {
    if (a==b) {
        return true;
    } else if (a>b || a<b) {
        return false;
    }else{
        console.log("Некорректное значение");
        return null;
    }
}
console.log(name()) */

// 6. Сделайте функцию, которая параметрами принимает 2 числа.  
//    Если их сумма больше 10 - пусть вернет true, а если нет то -  false.

/* function sum (a = 6, b = 5) {
    let result = a + b > 10 ? true:false
    return result
}
console.log(sum ()); */


// 7. Сделайте функцию, которая параметром принимает число и  проверяет - отрицательное оно или нет. 
// Если отрицательное -  пусть функция вернет true, а если нет - false.

/* function name(a = -1) {
    if (a>=0) {
        return false;
    } else {
        return true;
    }
}
console.log(name()); */

// 8. Сделайте функцию isNumberInRange, которая параметром  принимает число и проверяет, 
//    что оно больше нуля и меньше  10. Если это так - пусть функция возвращает true, 
//    если не так -  false.

/* function isNumberInRange(a = 9) {
    if (a>0 && a<10 ) {
        return true;
    }else{
        return false;
    }
}
 */
// 9. Дан массив с числами. Запишите в новый массив только те  числа, которые больше нуля и меньше 10-ти. 
//    Для этого  используйте вспомогательную функцию isNumberInRange из  предыдущей задачи.


// массивов нЕбыло в теме (судя по телеге, они будут лишь в 6 занятии), как и применяемые к ним методы, 
// пришлось лезть в гугл для решения задания, либо я что то не так понял

/* let arr = [1,5,-2,8,9,54,22];
let arrNew = [];

for (let i = 0; i < arr.length; i++) {
    if (isNumberInRange(arr[i])) {
    arrNew.push(arr[i]);
    }
}

console.log(arrNew); */

// 10. Сделайте функцию getDigitsSum (digit - это цифра), 
//     которая  параметром принимает целое число и возвращает сумму его  цифр.

/* function getDigitsSum (num) {
    let a = String(num);
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        b += Number(a[i]);
    }
    return b;
}
console.log(getDigitsSum(5555)); */


// 11. Найдите все года от 1 до 2020, сумма цифр которых равна
//     13. Для этого используйте вспомогательную функцию
//     getDigitsSum из предыдущей задачи.

/* function getDigitsSum (num) {
    let a = String(num);
    let b = 0;
    for (let i = 0; i < a.length; i++) {
        b = b + Number(a[i]);
    }
    return b;
}

let years = [];

for (let i = 1; i <= 2020; i++) {
    if (getDigitsSum(i) == 13) {
        years.push(i);
    }
}

console.log(years); */

// 12. Сделайте функцию isEven() (even - это четный), 
//     которая  параметром принимает целое число и проверяет: 
//     четное оно  или нет. Если четное - пусть функция возвращает true, если  нечетное - false.

/* function isEven(num) {
    return num % 2 == 0;
}
console.log(isEven(2)); */

// 13. Дан массив с целыми числами. Создайте из него новый  массив, 
//     где останутся лежать только четные из этих чисел.  
//     Для этого используйте вспомогательную функцию isEven из  предыдущей задачи.

/* let arr = [1,5,-2,8,9,54,22,104];
let arrNew = [];


for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arrNew.push(arr[i])
    }
 }
console.log(arrNew); */

// 14. Сделайте функцию getDivisors, которая параметром  принимает число и возвращает массив его делителей 
//     (чисел,  на которое делится данное число).


/* function getDivisors(num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            arr.push (i);
        }
    }
    return arr;
}

console.log(getDivisors(5566)); */