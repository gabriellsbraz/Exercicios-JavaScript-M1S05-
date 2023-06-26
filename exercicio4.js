function fibonacciArray(numero) {
  let fibonacciArray = [0, 1];

  while (fibonacciArray[fibonacciArray.length - 1] <= numero) {
    let proximoNumero = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
    fibonacciArray.push(proximoNumero);
  }

  return fibonacciArray;
}

let numero= 200;
let fibonacci = fibonacciArray(numero);
console.log(fibonacci);

