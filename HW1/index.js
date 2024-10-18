//Задание № 1 Start//
let text = "Hello World!";
console.log(text);
//Задание № 1 end//

//Задание № 2, 3, 4, 6 start//
const age = 20;
let monthName = "July";
let isSnow = true;
let countPurchases = null;
let temp;
const product = {
  name: "Ice Cream",
  price: 50,
};
let id = Symbol("id");
let bigint = 1n;

product.name = "Potato"; //изменение переменной в объекте//

console.log(age, monthName, isSnow, countPurchases, temp, product, id, bigint);

console.log(
  typeof age,
  typeof monthName,
  typeof isSnow,
  typeof countPurchases,
  typeof temp,
  typeof product,
  typeof id,
  typeof bigint,
); //оператор//

console.log(
  typeof age,
  typeof monthName,
  typeof isSnow,
  typeof countPurchases,
  typeof temp,
  typeof product,
  typeof id,
  typeof bigint,
); //функция//
//Задание № 2, 3, 4, 6 end//

//Задание № 5, const нельзя переопределять не в объекте//

//Задание № 7 start//
let carWash = {
  carName: "Lada",
  price: 350,
};
console.log(carWash);

carWash.carName = "Kamaz";
carWash.price = 500;
console.log(carWash);
//Задание № 7 end//

//Задание № 8 start//
var lift = {
  stage: 7,
  number: 132,
};
console.log(lift);

lift.stage = 15;
lift.number = 333;
console.log(lift);
//Задание № 8 end//
