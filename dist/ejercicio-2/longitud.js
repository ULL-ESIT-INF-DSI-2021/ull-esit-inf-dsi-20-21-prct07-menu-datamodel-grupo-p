"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Longitud = void 0;
/**
 * __Esta es la clase Longitud.__
 */
class Longitud {
    /**
     * Constructor de la clase Longitud.
     * @param primerSistema Nombre del primer sistema.
     * @param segundoSistema Nombre del segundo sistema.
     */
    constructor(primerSistema, segundoSistema) {
        this.primerSistema = primerSistema;
        this.segundoSistema = segundoSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo primerSistema
     * aunque se acceda desde fuera de la clase Longitud.
     * @return Devuelve el nombre del primerSistema.
     */
    getPrimerSistema() {
        return this.primerSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo segundoSistema
     * aunque se acceda desde fuera de la clase Longitud.
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
        if (this.getPrimerSistema() === "Metros") {
            if (this.getSegundoSistema() === "Millas")
                resultado = valor * 0.000621371;
        }
        else if (this.getPrimerSistema() === "Millas") {
            if (this.getSegundoSistema() === "Metros")
                resultado = valor * 1609, 34;
        }
        else
            throw new Error("Los sistemas no son válidos.");
        return resultado;
    }
}
exports.Longitud = Longitud;
const long1 = new Longitud("Metros", "Millas");
console.log("1000 metros son " + long1.conversor(1000) + " millas.");
const long2 = new Longitud("Millas", "Metros");
console.log("5 millas son " + long2.conversor(5) + " metros.");
