"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Racional = void 0;
/**
 * Esta es la clase racional.
 *
 */
class Racional {
    constructor(numerador_, denominador_) {
        if (denominador_ === 0) {
            throw new Error("Un número racional no puede tener un denominador igual a 0.");
        }
        this.numerador_ = numerador_;
        this.denominador_ = denominador_;
    }
    getNumerador() {
        return this.numerador_;
    }
    getDenominador() {
        return this.denominador_;
    }
    setNumerador(numerador) {
        this.numerador_ = numerador;
    }
    setDenominador(denominador) {
        this.denominador_ = denominador;
    }
    simplificar() {
        let numerador = this.getNumerador();
        let denominador = this.getDenominador();
        if ((numerador < 0) && (denominador < 0)) {
            numerador = -numerador;
            denominador = -denominador;
        }
        if (numerador === 0) {
            this.setDenominador(0);
            return this;
        }
        let mcm = Math.min(Math.abs(numerador), Math.abs(denominador));
        for (let i = mcm; i > 1; i--) {
            if ((numerador % i === 0) && (denominador % i === 0)) {
                numerador = numerador / i;
                denominador = denominador / i;
            }
        }
        this.setNumerador(numerador);
        this.setDenominador(denominador);
        return this;
    }
    invertir() {
        let aux = this.getNumerador();
        this.setNumerador(this.getDenominador());
        this.setDenominador(aux);
        return this;
    }
    suma(f2) {
        let f3 = new Racional(1, 1);
        if ((this.getDenominador() === f2.getDenominador())) {
            f3.setDenominador(this.getDenominador());
            f3.setNumerador(this.getNumerador() + f2.getNumerador());
        }
        else {
            f3.setNumerador(this.getNumerador() * f2.getDenominador() + this.getDenominador() * f2.getNumerador());
            f3.setDenominador(this.getDenominador() * f2.getDenominador());
        }
        f3.simplificar();
        return f3;
    }
    resta(f2) {
        let f3 = new Racional(1, 1);
        if ((this.getDenominador() === f2.getDenominador())) {
            f3.setDenominador(this.getDenominador());
            f3.setNumerador(this.getNumerador() - f2.getNumerador());
        }
        else {
            f3.setNumerador(this.getNumerador() * f2.getDenominador() - this.getDenominador() * f2.getNumerador());
            f3.setDenominador(this.getDenominador() * f2.getDenominador());
        }
        f3.simplificar();
        return f3;
    }
    multiplicacion(f2) {
        let f3 = new Racional(1, 1);
        f3.setNumerador(this.getNumerador() * f2.getNumerador());
        f3.setDenominador(this.getDenominador() * f2.getDenominador());
        f3.simplificar();
        return f3;
    }
    division(f2) {
        let f3 = new Racional(1, 1);
        f3.setNumerador(this.getNumerador() * f2.getDenominador());
        f3.setDenominador(this.getDenominador() * f2.getNumerador());
        f3.simplificar();
        return f3;
    }
    imprimir() {
        console.log("\nImprimiendo número racional: " + this.getNumerador() + "/" + this.getDenominador() + "\n");
    }
}
exports.Racional = Racional;
let frac1 = new Racional(2, 3);
let frac2 = new Racional(4, 2);
let frac = new Racional(4, 8);
console.log(frac1.suma(frac2));
