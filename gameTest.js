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



