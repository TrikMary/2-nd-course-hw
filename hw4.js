//Задание 1
console.log ("Задание 1");

let i=1;
while (i<3) {
    console.log ("Привет");
    i++;
}

//Задание 2
console.log ("Задание 2");

let a=1;
while (a<6) {
    console.log (a);
    a++;
}

// Задание 3
console.log ("Задание 3");

let b=7;
while (b<23) {
    console.log (b);
    b++;
}

// Задание 4
console.log ("Задание 4");

const obj={
"Коля":"200",
"Вася":"300",
"Петя":"400"
}
for(let namePerson in obj) {
console.log (`${namePerson} - зарплата ${obj[namePerson]} долларов.`);
}

// Задание 5
console.log ("Задание 5");

let n=1000;
let num=0;
while (n>=50) {
    n /=2;
    num++
}
console.log(n);
console.log(num);

// Задание 6
console.log ("Задание 6");

let numberOfFriday=3
for (let i=numberOfFriday; i <= 31; i += 7 ){
    console.log(`Сегодня пятница,${i} число. Необходимо подготовить отчет.`);
}