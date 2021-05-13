const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
// Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. 
// Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring

const swappedList = swap((myList) => {
const [ mylist1, mylist2, mylist3 ] = myList;
return mylist3, mylist2, mylist1;
});

console.log(swappedList());

// assert.strictEqual(swappedList[0], 3);
// assert.strictEqual(swappedList[1], 2);
// assert.strictEqual(swappedList[2], 1);