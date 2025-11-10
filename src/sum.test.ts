import { sum } from './src/sum'; // Ajuste o caminho se necessário

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
