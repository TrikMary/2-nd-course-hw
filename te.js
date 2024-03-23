


// function log(arrItem) {
//     console.log("Элемент массива:", arrItem);
// }

// function each(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i]);
//   }
// }

// each(["Глеб", "Олег", "Татьяна", "Платон"], log);
// //

// const fibonacci = [1, 1, 2, 3, 5, 8];
// const multipleByTwoFib = fibonacci.map((el) => el * 2);
// console.log(multipleByTwoFib);
// const plusTenFib = fibonacci.map(el => el + 10);
// console.log(plusTenFib);
// const onlyBigFib = fibonacci.filter(el => el > 3);
// console.log(onlyBigFib);

// const makePizza = function (title, cb) {
//     console.log(`Заказ на приготовление ${title} получен. Начинаем готовить...`);
//     setTimeout(cb, 3000);
// }

// const readBook = function () {
//     console.log(`Читаю книгу "Колдун и кристалл"`);
// }

// const eatPizza = function (drink) {
//     return function() {
//         console.log (`Ура! Пицца готова, пора подкрепиться! и запить ${drink}`);
//     }
// }
//  makePizza("Пеперонни", eatPizza(`Coca-Cola`));
//  readBook();



// const foo = function() {
//     return "Hello, world";
// }

// console.log(foo());
// console.log(foo);

// const runIt = function(fn) {
//     return fn();
// }

// console.log(runIt(foo));



// const newspaper = {
// 	sports: {
//         title : 'ARod Hits Home Run',
//         writers : ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige']
//     }, 
// 	business: {
//         title : 'GE Stock Dips Again',
// 	    writers : ['Adam Smith', 'Albert Humphrey', 'Charles Handy']
//     },
//     mov: {
//         title: 'Superman Is A Flop',
// 	    writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris']
//     }
// }
// console.log(newspaper.sports.title); // ARod Hits Home Run
// console.log(newspaper.business.writers[0]); // Adam Smith
// console.log(newspaper['mov']['title']);

// let arrSum = [3,4,5,6];
// const sum = ([2],[3],...rest) => {
//     let result = c + b;
//     console.log(result);
//     console.log(rest);
// }
// sum(...arrSum);