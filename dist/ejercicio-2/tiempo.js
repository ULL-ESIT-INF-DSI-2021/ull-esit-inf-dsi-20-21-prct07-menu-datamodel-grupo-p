"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiempo = void 0;
/**
 * __Esta es la clase Tiempo.__
 */
class Tiempo {
    /**
     * Constructor de la clase Tiempo.
     * @param primerSistema Nombre del primer sistema.
     * @param segundoSistema Nombre del segundo sistema.
     */
    constructor(primerSistema, segundoSistema) {
        this.primerSistema = primerSistema;
        this.segundoSistema = segundoSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo primerSistema
     * aunque se acceda desde fuera de la clase Tiempo.
     * @return Devuelve el nombre del primerSistema.
     */
    getPrimerSistema() {
        return this.primerSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo segundoSistema
     * aunque se acceda desde fuera de la clase Tiempo.
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
        if (this.getPrimerSistema() === "Horas") {
            if (this.getSegundoSistema() === "Segundos")
                resultado = valor * 3600;
        }
        else if (this.getPrimerSistema() === "Segundos") {
            if (this.getSegundoSistema() === "Horas")
                resultado = valor / 3600;
        }
        else
            throw new Error("Los sistemas no son válidos.");
        return resultado;
    }
}
exports.Tiempo = Tiempo;
const tiempo1 = new Tiempo("Horas", "Segundos");
console.log("\n3 horas son " + tiempo1.conversor(3) + " segundos.");
const tiempo2 = new Tiempo("Segundos", "Horas");
console.log("7200 segundos son " + tiempo2.conversor(7200) + " horas.\n");
