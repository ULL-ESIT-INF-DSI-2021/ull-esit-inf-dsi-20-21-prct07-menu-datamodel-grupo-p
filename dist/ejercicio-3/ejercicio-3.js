"use strict";
/**
 * Mean and concatenate.
 * @param array Consists of an array containing text strings and numbers.
 * @return An array with the mean of the numbers and a string with the concatenation of the characters.
 *
 * Usage:
 * ```typescript
 * meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0]) = [3.6,udiwstagwo].
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.meanAndConcatenate = void 0;
function meanAndConcatenate(array) {
    let concat_caracteres = "";
    let suma_numeros = 0;
    let media_numeros = 0;
    let contador_numeros = 0;
    let resultado;
    for (let i = 0; i < array.length; i++) {
        //if (typeof(array[i] === 'number')) {
        if (!isNaN(array[i])) {
            suma_numeros += +array[i];
            contador_numeros++;
        }
        else {
            concat_caracteres += array[i];
        }
    }
    media_numeros = (suma_numeros / contador_numeros);
    resultado = [media_numeros, concat_caracteres];
    return resultado;
}
exports.meanAndConcatenate = meanAndConcatenate;
let myArray1 = meanAndConcatenate(['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0]);
console.log(`\nEl array resultado es: [${myArray1}].\n`);
