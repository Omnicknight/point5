// const product = 'tangerine';

// function cook(product = 'lime') {
//     console.log('cook', product);
// }

// const random = function (min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// cook();
// function sum(a = 0, b = 0) {
//     return a + b + random(a, b);
// }
// console.log(random(0, 10));
// console.log(sum(1, 2));


// function pow(n, p) {
//     let value = n;
//     if (p === 0){
//         return 1;
//     }
//     for (let i = 1; i < p; i++) {
//         n *= value;
//     }
//     return n;
// }

// console.log(pow(4, 5));

// const sum = (a, b) => {
//     return a + b;
// };

// const pow = a => pow(a, 2);

function getRandom() {
    return Math.random();
}
let number = 1;

    while (number !== false) {
    let random = Math.floor(getRandom()*10+1);
    number = +prompt('Угадайте число от 1 до 10', '0');
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
    // else {
    //     console.log('Игра окончена');
    // }
}
