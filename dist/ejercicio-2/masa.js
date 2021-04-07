"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Masa = void 0;
/**
 * __Esta es la clase Masa.__
 */
class Masa {
    /**
     * Constructor de la clase Masa.
     * @param primerSistema Nombre del primer sistema.
     * @param segundoSistema Nombre del segundo sistema.
     */
    constructor(primerSistema, segundoSistema) {
        this.primerSistema = primerSistema;
        this.segundoSistema = segundoSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo primerSistema
     * aunque se acceda desde fuera de la clase Masa.
     * @return Devuelve el nombre del primerSistema.
     */
    getPrimerSistema() {
        return this.primerSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo segundoSistema
     * aunque se acceda desde fuera de la clase Masa.
     * @return Devuelve el nombre del segundoSistema.
     */
    getSegundoSistema() {
        return this.segundoSistema;
    }
    /**
     * Este método hace la conversión entre dos sistemas de unidades diferentes
     * @param valor El valor que tiene el sistema 1.
     * @return Devuelve el valor que tiene el sistema 2.
     */
    conversor(valor) {
        let resultado = 0;
        if (this.getPrimerSistema() === "Kilo") {
            if (this.getSegundoSistema() === "Gramo")
                resultado = valor * 1000;
        }
        else if (this.getPrimerSistema() === "Gramo") {
            if (this.getSegundoSistema() === "Kilo")
                resultado = valor * 0.001;
        }
        else
            throw new Error("Los sistemas no son válidos.");
        return resultado;
    }
}
exports.Masa = Masa;
const masa1 = new Masa("Kilo", "Gramo");
console.log("5 kilo son " + masa1.conversor(5) + " gramos.");
const masa2 = new Masa("Gramo", "Kilo");
console.log("5000 gramos son " + masa2.conversor(5000) + " kilos.");
