import { add, subtract, multiply, divide } from './calculator'


describe('Módulo Calculadora', () => {

  test('deve somar dois números corretamente', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('deve subtrair dois números corretamente', () => {
    expect(subtract(10, 5)).toBe(5);
    expect(subtract(5, 10)).toBe(-5);
  });

  test('deve multiplicar dois números corretamente', () => {
    expect(multiply(3, 7)).toBe(21);
    expect(multiply(5, 0)).toBe(0);
  });

  test('deve dividir dois números corretamente', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
  });

  // Este é o teste "robusto": testar se a função falha COMO ESPERADO
  test('deve lançar um erro ao tentar dividir por zero', () => {
    // Esperamos que a função dentro do 'expect' lance um erro
    expect(() => {
      divide(10, 0);
    }).toThrow("Não é possível dividir por zero.");
  });

});