/*El bug era el = de la condición de terminación del FOR i <= numeros.length por el siguiente motivo:
numeros.length es 5, sin embargo las iteraciones por la lista de números comienzan en 0, y, al ser 5 números,
van del 0 al 4. Por lo tanto, el 5 no existe y por eso devuelve NaN.
*/


const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++){
    sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
console.log(calcularPromedio(listaNumeros))







