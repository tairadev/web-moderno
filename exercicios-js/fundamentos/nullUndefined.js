let valor;
console.log(valor);

valor = null;
console.log(valor);

const produto = {};
console.log(produto.preco);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco);

console.log(produto);
