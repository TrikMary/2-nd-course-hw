//Задание 1
console.log("Задание 1")

function lessNumber(a, b) {
    if (a >= b) {
        return b;
    
    } else {
        return a;
    }
}
console.log(lessNumber(7, 12));

//Задание 2
console.log("Задание 2");

function mult(a) {
    if (a%2 == 0) {
        return (`${a} - число чётное`);

    } else {
        return  (`${a} - число нечётное`);
    }
}

console.log(mult(8));

//Задание 3
console.log("Задание 3");

function multS(b) {
    console.log(b * b)
}

multS(15);

function multSq(a) {
    return a * a;
}

console.log(multSq(8));

//Задание 4
console.log("Задание 4");

function answerAge() {
    age = prompt("Сколько вам лет?");
    if (!age || !age.trim()) {
        console.log("что-то пошло не так");

    } else {
        if (isNaN(age) === true) { 
            console.log("Это не число");

        }  else {
            if (age <= 0) {
                console.log('Вы ввели неправильное значение');

            } else if (age > 0 && age <= 12) {
                console.log('Привет, друг!');

            } else {
                console.log('Добро пожаловать!');
            }
        }
    }    
}        

answerAge();

//Задание 5
console.log("Задание 5");

function multNumber(a, b) {

    if (isNaN(a) === true || isNaN(b) === true) { 

        console.log('Одно или оба значения не являются числом');

    }  else {

        return a * b;
    }

}

multNumber(5,6);

//Задание 6
console.log("Задание 6");

function answer() {
    n = prompt("Введите число");
    if (!n || !n.trim()) {
        console.log("что-то пошло не так");

    } else {
        if (isNaN(n) === true) { 
            return ('Переданный параметр не является числом');

        }  else {
            return (`${n} в кубе равняется ${n*n*n}`);
            }
        }
    }    

    console.log(answer());

//Задание 7
console.log("Задание 7");

function getArea() {
    return 3.14*this.radius*this.radius;
}

function getPerimeter() {
    return 2 * 3.14 * this.radius;
}

const circle1 = {
    radius : 4,
    getArea : getArea,
    getPerimeter : getPerimeter
}

const circle2 = {
    radius : 8,
    getArea : getArea,
    getPerimeter : getPerimeter
}

console.log(`Площадь круга с радиусом равным ${circle1.radius} составляет ${circle1.getArea()}`);
console.log(`Длина окружности с радиусом равным ${circle1.radius} составляет ${circle1.getPerimeter()}`);
console.log(`Площадь круга с радиусом равным ${circle2.radius} составляет ${circle2.getArea()}`);
console.log(`Длина окружности с радиусом равным ${circle2.radius} составляет ${circle2.getPerimeter()}`);

//Задание 8
console.log("Задание 8")

function seasons() {
    let monthNumber = prompt ("Введите номер месяца");

    if (!monthNumber || !monthNumber.trim()) {
        console.log("что-то пошло не так");

    } else {

        if (isNaN(monthNumber) === true) { 
            console.log("Сложно определить сезон по букве");

        }  else { 

            if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2) {
                console.log("Зима");

            } else if (monthNumber >= 3 && monthNumber <=5) {
                console.log("Весна");

            } else if (monthNumber >= 6 && monthNumber <=8) {
                console.log("Лето"); 

            } else if (monthNumber >= 9 && monthNumber <=11) {
                console.log("Осень"); 
            } else {
                console.log("Такого месяца нет, а уж тем более сезона")
            }
        }
    }    
}

seasons();