const product = 'tangerine';

function cook(product = 'lime') {
    console.log('cook', product);
}

const random = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// cook();
// function sum(a = 0, b = 0) {
//     return a + b + random(a, b);
// }
// console.log(random(0, 10));
// console.log(sum(1, 2));


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

console.log(pow(4, 5));

const sum = (a, b) => {
    return a + b;
};

const pow = a => pow(a, 2);
