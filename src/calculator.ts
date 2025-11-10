export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number {
  if (b === 0) {
    // Lançar um erro é um "comportamento" importante para ser testado
    throw new Error("Não é possível dividir por zero.");
  }
  return a / b;
}