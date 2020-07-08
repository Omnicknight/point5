function getRandom() {
    return Math.random();
}

function gameProcess () {
    let random = Math.floor(getRandom()*10+1);
    number = +prompt('Угадайте число от 1 до 10',);
    if (isNaN(number)) {
        console.log('введите число');
    }
    else if (number == false) {
        console.log('Игра окончена');
        break;
    }
    else if (number === random) {
        console.log('Вы угадали');
    }
    else if (number) {
        console.log('Вы не угадали');
    }
}

function run () {
    let number = 1;
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
