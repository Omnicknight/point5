function pow(n, p) {
    let value = n;
    if (p === 0){
        return 1;
    }
    for (let i = 1; i < p; i++) {
        n *= value;
    }
    return n;
}


function getRandom() {
    return Math.floor(Math.random()*10+1);
}

function gameProcess () {
    let random = getRandom();
    let res = prompt('Угадайте число от 1 до 10', '0');

    if (res === null) {
        console.log('Игра окончена');
        return null;
    } else {
        if (isNaN(res) || res === '') {
            console.log('введите число');
            return true;
        }
        else if (+res === random) {
            console.log('Вы угадали');
            return true;
        }
        else {
            console.log('Вы не угадали', random);
            return true;
        }
    }
    
}
function run () {
    let number = 1;
    while (number !== null) {
        number = gameProcess ();
    }
}

run ();