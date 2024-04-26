function calcularMedia(numeros) {
    const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return total / numeros.length;
}

// Teste a função com seus arrays
console.log(calcularMedia([10, 9, 8, 9, 1, 5, 7])); // Deve retornar: 6.875
console.log(calcularMedia([2, 5, 7, 1, -2])); // Deve retornar: 2.6
console.log(calcularMedia([10, 10, 10, 10, 9])); // Deve retornar: 9.8
console.log(calcularMedia([25, 75])); // Deve retornar: 50
 