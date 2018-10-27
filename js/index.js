const numberOfOrder = parseInt(prompt("Порядковий номер послідовності Фібоначчі: "));

function checkNumFibonacci(numberOfOrder) {
    let arrFibonacci = [0, 1, 1];
    let i = 2;
    do {
        arrFibonacci[i] = arrFibonacci[i - 1] + arrFibonacci[i - 2];
        i++;
    }
    while (i <= numberOfOrder);

    return arrFibonacci[numberOfOrder];

}
alert(numberOfOrder + '-e число послідовності Фібоначчі дорівнює ' + checkNumFibonacci(numberOfOrder));
