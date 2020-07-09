function getRandom() {
    return Math.floor(Math.random()*10+1);
}

function gameProcess () {
    let random = getRandom();
    number = prompt('Угадайте число от 1 до 10', '0');
    if (isNaN(number)) {
        console.log('введите число');
    }
    else if (number === false) {
        console.log('Игра окончена');
    }
    else if (number === random) {
        console.log('Вы угадали');
    }
    else if (number) {
        console.log('Вы не угадали');
    }
    return number;
}

function run () {
    number = 1;
    while (number !== false) {
        gameProcess ();
    }
}

run ();

//     while (number !== false) {
//     let random = Math.floor(getRandom()*10+1);
//     number = +prompt('Угадайте число от 1 до 10', '0');
//     if (isNaN(number)) {
//         console.log('введите число');
//     }
//     else if (number == false) {
//         console.log('Игра окончена');
//         break;
//     }
//     else if (number === random) {
//         console.log('Вы угадали');
//     }
//     else if (number) {
//         console.log('Вы не угадали');
//     }
// }
