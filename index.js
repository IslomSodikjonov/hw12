let x = +prompt("Создайте пароль!")

let count = 0

do {
    password = +prompt("Введите пароль!")

    count++

    if(x === password && count === 1) {
        alert('Вход бесплатный :)')
    } else if(x === password && count > 1 && count < 5) {
        alert('Попытка ' + count)
    } else if(x !== password) {
        alert("Неправильный пароль(")   
    } else {
    alert("Вход платный(")
    }
} while(count < 5) 