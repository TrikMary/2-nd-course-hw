// "Задание 1"
console.log("Задание 1")

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 console.log(people.sort((a, b) => a.age - b.age))


// "Задание 2"
console.log("Задание 2")


function isPositive(numb) {
    return numb > 0 ;
}
function isMale(person) {
return person.gender === "male";
}

function filter(arr, ruleFunction) {
    const result = [];
    for (let el of arr) {
        if (ruleFunction(el)) {
            result.push(el);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));
    
const peoples = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(peoples, isMale));

// "Задание 3"
console.log("Задание 3")

let timerId = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => {clearInterval(timerId); alert ("30 секунд прошло");}, 30000);

// "Задание 4"
console.log("Задание 4")

function delayForSecond(callback) {
    setTimeout (callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// "Задание 5"
console.log("Задание 5")

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function leftForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// изменяем код ниже
leftForSecond(() => sayHi("Олег"));