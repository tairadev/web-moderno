const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ id: 3 }, false, null, 'teste');
console.log(valores);

// tira o ultimo item do array e retorna esse valor
console.log(valores.pop());

// remove um valor
delete valores[0];
console.log(valores);

console.log(typeof valores);
