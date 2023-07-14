// Escreva uma função chamada calculadora que recebe três parâmetros: dois números e uma função de operação matemática. A função calculadora deve executar a operação matemática nos dois números fornecidos e retornar o resultado. Teste a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.

function calculadora(x, y, operacao){
  return operacao(x, y)
}

function soma(x, y) {
  return x + y;
}

function subtracao(x, y) {
  return x - y;
}

function multiplicacao(x, y) {
  return x * y;
}

function divisao(x, y) {
  return x / y;
}
console.log(calculadora(10, 2, soma));
console.log(calculadora(10, 2, subtracao)); 
console.log(calculadora(10, 2, multiplicacao)); 
console.log(calculadora(10, 2, divisao)); 