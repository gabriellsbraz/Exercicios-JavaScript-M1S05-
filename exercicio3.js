function numeroPrimo(numero){
  let i = numero - 1;
  while (i != 1){
      if(numero % i == 0){
          return `O numero ${numero} não é primo. `;
      }
      i--
  }
  return `O numero ${numero} é primo.`;
}

console.log(numeroPrimo(113));