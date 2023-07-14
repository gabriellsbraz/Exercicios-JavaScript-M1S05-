const produtos = [
  {
    nome: "produto1",
    preco: 5000
  },
  {
    nome: "produto2",
    preco: 4500
  },
  {
    nome: "produto3",
    preco: 7000
  },
  {
    nome: "produto4",
    preco: 10000
  }
]

const exibirProdutos = produtos.map((produto) => {
  return `O ${produto.nome} custa ${produto.preco}`
})

const precoTotal = produtos.reduce((soma, produto) => {
  return soma + produto.preco
}, 0)

console.log(exibirProdutos);
console.log(`O valor total de todos produtos é ${precoTotal}`);




// Escreva um programa que percorra um array de objetos que representam produtos e exiba o nome e o preço de cada produto. Após imprimir essas informações imprima o total de produtos e o valor total de todos produtos.
