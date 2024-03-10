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
