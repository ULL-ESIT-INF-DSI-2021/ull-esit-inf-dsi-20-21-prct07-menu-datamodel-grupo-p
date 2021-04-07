"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fuerza = void 0;
/**
 * __Esta es la clase Fuerza.__
 */
class Fuerza {
    /**
     * Constructor de la clase Fuerza.
     * @param primerSistema Nombre del primer sistema.
     * @param segundoSistema Nombre del segundo sistema.
     */
    constructor(primerSistema, segundoSistema) {
        this.primerSistema = primerSistema;
        this.segundoSistema = segundoSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo primerSistema
     * aunque se acceda desde fuera de la clase Fuerza.
     * @return Devuelve el nombre del primerSistema.
     */
    getPrimerSistema() {
        return this.primerSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo segundoSistema
     * aunque se acceda desde fuera de la clase Fuerza.
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
        if (this.getPrimerSistema() === "Newton") {
            if (this.getSegundoSistema() === "Kilopondio")
                resultado = valor * 0.101972;
        }
        else if (this.getPrimerSistema() === "Kilopondio") {
            if (this.getSegundoSistema() === "Newton")
                resultado = valor / 0.101972;
        }
        else
            throw new Error("Los sistemas no son válidos.");
        return resultado;
    }
}
exports.Fuerza = Fuerza;
const fuerza1 = new Fuerza("Newton", "Kilopondio");
console.log("\n100 Newtons son " + fuerza1.conversor(100) + " Kilopondios.");
const fuerza2 = new Fuerza("Kilopondio", "Newton");
console.log("3 Kilopondios son " + fuerza2.conversor(3) + " Newtons.\n");
