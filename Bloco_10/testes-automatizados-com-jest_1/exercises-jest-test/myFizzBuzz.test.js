const myFizzBuzz = require('../exercises-jest/myFizzBuzz');

describe('Requisito 4', () => {
  it('Retorna "fizzBuzz" se o num for divisível por 3 e 5', () => {
    expect('fizzbuzz').toEqual(myFizzBuzz(15));
  });

  it('Retorna "fizz" se o num for divisível por 3', () => {
    expect('fizz').toEqual(myFizzBuzz(9));
  });

  it('Retorna "buzz" se o num for divisível por 5', () => {
    expect('buzz').toEqual(myFizzBuzz(20));
  });

  it('Retorna num se o num não for divisível nem por 3 e nem por 5', () => {
    expect(4).toEqual(myFizzBuzz(4));
  });

  it('Retorna false se num não for um parâmetro do tipo number', () => {
    expect(false).toEqual(myFizzBuzz('a'));
  });
});
// A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , 
// retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , 
// retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número

// 1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// 2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// 3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// 4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// 5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado