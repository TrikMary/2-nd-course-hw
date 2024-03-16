// Игра Времена года

function seasons() {
    let monthNumber = prompt ("Введите номер месяца");

    if (!monthNumber || !monthNumber.trim()) {
        alert("что-то пошло не так");

    } else {

        if (isNaN(monthNumber) === true) { 
            alert("Сложно определить сезон по букве");

        }  else { 

            if (monthNumber == 12 || monthNumber == 1 || monthNumber == 2) {
                alert("Зима");

            } else if (monthNumber >= 3 && monthNumber <=5) {
                alert("Весна");

            } else if (monthNumber >= 6 && monthNumber <=8) {
                alert("Лето"); 

            } else if (monthNumber >= 9 && monthNumber <=11) {
                alert("Осень"); 
            } else {
                alert("Такого месяца нет, а уж тем более сезона")
            }
        }
    }    
}


// Игра Запомни слова

function fruitGame() {
    let fruitArr = ["Яблоко", "Груша", "Дыня", "Виноград", "Персик", "Апельсин", "Мандарин"];

    fruitArr = fruitArr.sort(() => Math.random() - 0.5);

    alert (`Запомни несколько слов ${fruitArr}`);
    firstAnswer(fruitArr);

    function firstAnswer (fruitArr) {
        let answer = prompt("Вспомните, какое слово было первым?");
        if (!answer) {
            alert ("Кажется кто-то забыл ввести слово");
            tryAgain();
        } else {
            if (answer.toLowerCase () === fruitArr [0].toLowerCase ()) {
                alert ("Верно, пол дела сделано");
                lastAnswer(fruitArr);
            } else {
                alert ("Не верно, будь внимательнее");
                tryAgain ();
            }
        }     
    }
    function lastAnswer (fruitArr) {
        let answer = prompt("Вспомните, какое слово было последним?");
        if (!answer) {
            alert ("Кажется кто-то забыл ввести слово");
            tryAgain();
        } else {
            if (answer.toLowerCase () === fruitArr [fruitArr.length - 1].toLowerCase ()) {
                alert ("Поздравляю, ты угадал оба слова");
                tryAgain ();
            } else {
                alert ("Не верно, будь внимательнее");
                tryAgain ();
            }
        }
    }
    function tryAgain () {
        let again = confirm ("Не расстраивайся, хочешь попробовать еще раз?.");
        if (again == true) {
            fruitGame();
        }
    }
}
