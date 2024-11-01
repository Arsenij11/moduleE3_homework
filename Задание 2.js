function to_count (num) {
    if (isNaN(num) || num >= 1000 || num <= 1) {
        return 'Ошибка! Были введены некорректные данные!';
    }
    else {
        for (let n = num; n > 0; n--) {
            if (num % n === 0 && n !== num && n !== 1) {
                return `Число ${num} не является простым!`;
            }
               
        }
        return `Число ${num} простое`;
    }
}

let num = Number(prompt("Введите любое число, которое не больше 1000, и не равняется 0 и 1"));
alert(to_count(num));