// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 4, 5, 6, 7);
imprimirSoma();

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 8));
console.log(soma(2));

// retorno implicito
const subtracao = (a, b) => a - b;

console.log(subtracao(10, 2));
