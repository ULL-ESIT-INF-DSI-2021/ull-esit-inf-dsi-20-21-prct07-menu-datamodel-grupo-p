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
export declare function meshArray(array: string[]): string;
