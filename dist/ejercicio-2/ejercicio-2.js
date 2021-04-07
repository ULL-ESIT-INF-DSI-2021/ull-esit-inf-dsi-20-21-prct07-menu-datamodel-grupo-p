"use strict";
/**
 * This function checks that the words in the array are chained.
 * @param array Consists of an array containing exclusively text strings.
 * @return 1. "Error al encadenar" if the strings in the array are not chained.
 * @return 2. A text string containing the letters that link the words in the array.
 *
 * Usage:
 * ```typescript
 * meshArray(["allow", "lowering", "wasabi", "terror"]) = Error al encadenar.
 * meshArray(["allow", "lowering", "ringmaster", "terror"]) = lowringter
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.meshArray = void 0;
function meshArray(array) {
    let counter = 0;
    let resultado = "";
    let encadenadas = "";
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = array[i].length - 1; j >= 0; j--) {
            if (array[i + 1].includes(array[i].substring(j, array[i].length), 0)) {
                encadenadas += array[i].substring(j, array[i].length);
                counter++;
            }
        }
        if (encadenadas === "") {
            return "Error al encadenar.";
        }
        resultado += encadenadas.substring(encadenadas.length - counter);
        counter = 0;
        encadenadas = "";
    }
    return resultado;
}
exports.meshArray = meshArray;
console.log(`\nCadena1: ["allow", "lowering", "wasabi", "terror"]`);
let myArray1 = meshArray(["allow", "lowering", "wasabi", "terror"]);
console.log(`${myArray1}`);
console.log(`\n\nCadena2: ["allow", "lowering", "ringmaster", "terror"]`);
let myArray2 = meshArray(["allow", "lowering", "ringmaster", "terror"]);
console.log(`Las letras encadenadas del array son: ${myArray2}.`);
