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


// //recurs
// const n = parseInt(prompt("Порядковий номер послідовності Фібоначчі: ", " ..."));
// function fib(n){
//   if(n < 2) return n;
  
//   return fib(n - 1) + fib(n - 2);
// }
// alert(n + "-e число послідовності Фібоначчі дорівнює "+ (fib(n)));



