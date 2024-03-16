// Задание 1
console.log("Задание 1");

const numb = [1, 5, 4, 10, 0, 3];
for (let el of numb) {
    console.log(el);
    if (el === 10) {
        break;
    }
}

// Задание 2
console.log("Задание 2");

const numbs = [1, 5, 4, 10, 0, 3];
let index = numbs.indexOf(4);
console.log(`Индекс числа 4 равен ${index}`);

// оно же через цикл, потому что так указанно в подсказке
for (let m of numbs) {
    if (m === 4) {
        console.log(`Индекс числа ${m}, полученный через цикл равен ${numbs.indexOf(m)}`)
    };
}

// Задание 3
console.log("Задание 3");

const twoMas = [1, 3, 5, 10, 20];
const reTwoMas = twoMas.join(" ");
console.log(twoMas);
console.log(reTwoMas);

// Задание 4
console.log("Задание 4");

let startMas = [];
for (let el = 0; el < 3; el++) {
    let inMass = [];

        for (let f = 0; f < 3; f++) {
            inMass.push(1);
        }
    startMas.push(inMass);   
}
console.log(startMas);

// Задание 5
console.log("Задание 5");

const arrGrow = [1, 1, 1];
arrGrow.push(2, 2, 2);
console.log(arrGrow)

// Задание 6
console.log("Задание 6");

const mas = [9, 8, 7, "a", 6, 5];
console.log(`${mas} изначальный массив`);
mas.sort();
console.log(`${mas} результат сортировки`);
// если предположить, что а удаляют, потому что она буква/знак, то исключим любую букву/знак
let filterRes = mas.filter(item => isNaN(item) === false); 
console.log(`${filterRes} удалена буква а`);

// либо просто исключим последний элемент (буква, но не знак)
const mas2 = [9, 8, 7, "a", 6, 5];
console.log(`${mas2} изначальный массив`);
mas2.sort().pop();
console.log(`${mas2} результат сортировки и откидывания последнего элемента`);

// Задание 7
console.log("Задание 7");

const numbMas = [9, 8, 7, 6, 5];
function questNumb () {
    let answer = prompt("Попробуй угадай число");
    if (!answer || !answer.trim()) {
        console.log("что-то пошло не так");
    } else {
        if (isNaN(answer) === true) { 
            console.log("Это не число");

        }  else {
            if (numbMas.includes(Number(answer))) {
                console.log('угадал');

            } else {
                console.log("Не угадал");
            }
        }
    }    
}        
questNumb();

// Задание 8
console.log("Задание 8");

let str = "abcdef";
console.log(str);
let revStr = str.split("").reverse().join("");
console.log(revStr);

// Задание 9
console.log("Задание 9");
let arrA = [
    [1, 2, 3],
    [4, 5, 6]
]
let newArrA = arrA.flat();
console.log(newArrA);

// Задание 10
console.log("Задание 10");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let p = 0; p < arr.length - 1; p++) {
    console.log(arr[p]+arr[p+1]);
}

// Задание 11
console.log("Задание 11");

const arrSq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 7];
function sqArr (arrSq) {
    return arrSq.map (item => (item**2));
    
};
sqArr(arrSq);
console.log(sqArr(arrSq));

// Задание 12
console.log("Задание 12");

const arrSt = ["Массив", "из", "произвольных", "слов", "для", "расчёта", "длины", "слов", "в", "нём"];

function arrStLenght(arrSt) {
    let arrLength = [];
    for (let el = 0; el < arrSt.length; el++) {
        arrLength.push(arrSt[el].length);
    }
    return arrLength;
}
arrStLenght(arrSt);


// через map
function arrLenght (arrSt) {
    let resultArrLength = arrSt.map(item => (item.length));
    console.log(resultArrLength);
}
arrLenght(arrSt);

// Задание 13
console.log("Задание 13");

const arrForMinus = [-1, 2, -3, 4, -5, 6, -7, 8, -9, -10, -12, -15, -7];
function minusArr (arrForMinus) {
    let resultMas = [];
    for (let i=0; i < arrForMinus.length; i++) {
        if (arrForMinus[i] < 0) {
            resultMas.push(arrForMinus[i]);
        }
    };
    console.log(resultMas);
    return resultMas;
    
}
minusArr(arrForMinus);


// Задание 14
console.log("Задание 14");

const arrRandom = [];

for (let i = 0; i < 10; i++ ) {
    
    let g = Math.floor(Math.random() * 10);
    arrRandom.push(g);
} 

console.log(arrRandom);

let filtArrRandom = arrRandom.filter(item => item%2===0);
console.log(filtArrRandom);

// Задание 15
console.log("Задание 15");

const arrRand = [];

for (let i = 0; i < 6; i++ ) {
    let j = Math.round(Math.random() * 9 + 1);
    arrRand.push(j);
} 

console.log(arrRand);
const resultArrRand = arrRand.reduce((a, b) => a + b) / arrRand.length;
console.log(resultArrRand);
