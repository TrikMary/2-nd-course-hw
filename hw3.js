// Задание 1

let password = "пароль";
let answer = prompt ("Введите пароль");
if (password === answer) {
console.log ("Пароль введен верно");    
} else {
console.log ("Пароль введен неправильно");
}

// Задание 2

let c = Number (prompt ("Введите любое число от 0 до 10"));
if (c>0 && c<10) {
console.log ("Верно");
} else {
console.log ("Неверно");
}

// Задание 3

let d = Number(prompt ("Введите любое число, чем больше тем лучше"));
let e = Number (prompt ("Введите еще одно число, желательно больше 100"));
if (d>100 || e>100) {
console.log ("Верно");
} else {
console.log ("Неверно");
}

// Задание 4

let a = '2';
let b = '3';
console.log (a+b);
a = Number(a);
b = Number(b)
console.log (a+b);

// Задание 5

let monthNumber = (prompt ("Введите номер месяца"));
switch (monthNumber) {
    case "12":
    case "1":
    case "2":
console.log ("Сезон - зима")
break;
    case "3":
    case "4":
    case "5":    
console.log ("Сезон - весна")
break;
    case "6":
    case "7":
    case "8":    
console.log ("Сезон - лето")
break;
    case "9":
    case "10":
    case "11":    
console.log ("Сезон - осень")
break;
default: 
console.log ("Сезоны закончились");
    break;
}

// Задание 7 (дополнительное)

let f = prompt ("Пожалуйста, введите любое число.");
console.log(isNaN(f));
let g = f%2;
if (g===0) {
    console.log("Число чётное");
} else {
    console.log("Число нечётное")
}

// Задание 8 (дополнительное)

let clientOS = confirm ("Вы используете операционную систему Android?");
if (clientOS == 1) {
    console.log ("Установите версию приложения для Android по ссылке");
} else if (clientOS == 0) {
    console.log ("Установите версию приложения для iOS по ссылке");
} else {

}

// Задание 9 (дополнительное)

let clientOS2 = confirm ("Вы используете операционную систему Android?");
let clientDeviceYear = Number(prompt ("Год выпуска вашего телефона"));
if (clientOS2 == 1) {
    if (clientDeviceYear >= 2015) {
        console.log ("Установите версию приложения для Android по ссылке")
    } else {
        console.log ("Установите облегченную версию приложения для Android по ссылке")
    }
} else if (clientOS2 ==0 ){
    if (clientDeviceYear >= 2015) {
        console.log ("Установите версию приложения для iOS по ссылке")
    } else {
        console.log ("Установите облегченную версию приложения для iOS по ссылке")
    }
}