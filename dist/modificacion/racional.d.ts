/**
 * Esta es la clase racional.
 *
 */
export declare class Racional {
    private numerador_;
    private denominador_;
    constructor(numerador_: number, denominador_: number);
    getNumerador(): number;
    getDenominador(): number;
    setNumerador(numerador: number): void;
    setDenominador(denominador: number): void;
    simplificar(): Racional;
    invertir(): Racional;
    suma(f2: Racional): Racional;
    resta(f2: Racional): Racional;
    multiplicacion(f2: Racional): Racional;
    division(f2: Racional): Racional;
    imprimir(): void;
}
