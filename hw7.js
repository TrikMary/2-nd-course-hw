// Задание 1
console.log("Задание 1");

let str = "js";
let upStr = str.toUpperCase();
console.log(str);
console.log(upStr);

// Задание 2
console.log("Задание 2");

const arrStr = ["Ехал Грека", "через", "Реку, видит Грека", "в", "реке, рак", "Сунул", "Грека", "руку", "в", "реку, рак", "за руку", "Греку цап"];
let word = "реку";
let newArrStr = [];
function searchStr() {
    arrStr.forEach((el) => {
        if (el.toLowerCase().startsWith(word.toLowerCase())) {
            newArrStr.push(el);
        }
    });
}
searchStr();
console.log(arrStr);
console.log(newArrStr);

// Задание 3
console.log("Задание 3");

let c = 32.58884;

console.log(Math.floor(c));
console.log(Math.ceil(c));
console.log(Math.round(c));

// Задание 4
console.log("Задание 4");

const numbs = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbs);
console.log(minValue);

const maxValue = Math.max(...numbs);
console.log(maxValue);


// Задание 5
console.log("Задание 5");

function shotNum () {
    let m = Math.random()*10;
    let shotM = Math.floor(m);
    console.log(shotM);
}
shotNum();

// Задание 6
console.log("Задание 6");
let x = 7;
console.log(x);
y = x / 2;
if (x%2 ===1) {
    y = Math.floor(x/2);
}
console.log(y);


function createArrNumbers(x) {
    let arr = [];
    for (i = 0; i < y; i++) {
        arr.push(Math.floor(Math.random()*x));
    }
    console.log(arr);
}
createArrNumbers(x);

// Задание 7
console.log("Задание 7");
let min = 1;
let max = 14;
function randomMinMax () {
    let result = Math.floor(Math.random()*(max - min + 1) + min);
    console.log(result);
}
randomMinMax();
// Задание 8
console.log("Задание 8");

let sameCurrentDate = new Date();
console.log(sameCurrentDate);

// Задание 9
console.log("Задание 9");

let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let nextDate = +currentDate + days73;
let days73ago = new Date(nextDate);
console.log(days73ago);

// Задание 10
console.log("Задание 10");

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "ИАпрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
function dataView () {
    let myDate = new Date();
    let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
    console.log(fullDate);
    let fullTime = "Время: " + myDate.getHours() + " : " + myDate.getMinutes() + " : " + myDate.getSeconds();
    console.log(fullTime); 
}
dataView();

// // Задание
// console.log("Задание ");