const escola = 'Cod3r';

console.log(escola.charAt(4)); // mostra o char que tá na posição
console.log(escola.charAt(5)); // mostra o char que tá na posição

console.log(escola.charCodeAt(3)); // tabela unicode

console.log(escola.indexOf('3')); // busca o char

console.log(escola.substring(1)); // recorta a string
console.log(escola.substring(0, 3)); // recorta a string com começo e fim

console.log('Escola '.concat(escola).concat('!'));

console.log(escola.replace(3, 'e')); // substitui

console.log('Ana,Maria,Pedro'.split(',')); // transforma em array
