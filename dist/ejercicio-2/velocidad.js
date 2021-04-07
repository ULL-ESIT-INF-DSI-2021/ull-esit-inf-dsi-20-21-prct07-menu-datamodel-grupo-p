"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Velocidad = void 0;
/**
 * __Esta es la clase Velocidad.__
 */
class Velocidad {
    /**
     * Constructor de la clase Velocidad.
     * @param primerSistema Nombre del primer sistema.
     * @param segundoSistema Nombre del segundo sistema.
     */
    constructor(primerSistema, segundoSistema) {
        this.primerSistema = primerSistema;
        this.segundoSistema = segundoSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo primerSistema aunque se acceda desde fuera de la clase Velocidad.
     * @return Devuelve el nombre del primerSistema.
     */
    getPrimerSistema() {
        return this.primerSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo segundoSistema aunque se acceda desde fuera de la clase Velocidad.
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
        if (this.getPrimerSistema() === "kilometros por hora") {
            if (this.getSegundoSistema() === "millas por hora")
                resultado = valor * 0.621371;
        }
        else if (this.getPrimerSistema() === "millas por hora") {
            if (this.getSegundoSistema() === "kilometros por hora")
                resultado = valor * 1.60934;
        }
        else
            throw new Error("Los sistemas no son válidos.");
        return resultado;
    }
}
exports.Velocidad = Velocidad;
const vel1 = new Velocidad("kilometros por hora", "millas por hora");
console.log("\n20 kilometros por hora son " + vel1.conversor(20) + " millas por hora.");
const vel2 = new Velocidad("millas por hora", "kilometros por hora");
console.log("20 millas por hora son " + vel2.conversor(20) + " kilometros por hora.\n");
