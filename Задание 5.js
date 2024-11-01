let degree = (x, n) => {
    if (isNaN(x) || isNaN(n)) {
        console.log('Ошибка! Введите корректные данные')
    }
    else {
        console.log(Math.pow(Math.trunc(x), Math.trunc(n)));
    }
}
degree(Number(prompt('Введите x')),Number(prompt('Введите n')));