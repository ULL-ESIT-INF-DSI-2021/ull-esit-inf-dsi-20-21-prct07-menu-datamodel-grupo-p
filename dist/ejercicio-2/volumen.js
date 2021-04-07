"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volumen = void 0;
/**
 * __Esta es la clase Volumen.__
 */
class Volumen {
    /**
     * Constructor de la clase Volumen.
     * @param primerSistema Nombre del primer sistema.
     * @param segundoSistema Nombre del segundo sistema.
     */
    constructor(primerSistema, segundoSistema) {
        this.primerSistema = primerSistema;
        this.segundoSistema = segundoSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo primerSistema
     * aunque se acceda desde fuera de la clase Volumen.
     * @return Devuelve el nombre del primerSistema.
     */
    getPrimerSistema() {
        return this.primerSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo segundoSistema
     * aunque se acceda desde fuera de la clase Volumen.
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
        if (this.getPrimerSistema() === "Litro") {
            if (this.getSegundoSistema() === "Galon")
                resultado = valor * 0.219969;
        }
        else if (this.getPrimerSistema() === "Galon") {
            if (this.getSegundoSistema() === "Litro")
                resultado = valor / 0.219969;
        }
        else
            throw new Error("Los sistemas no son válidos.");
        return resultado;
    }
}
exports.Volumen = Volumen;
const vol1 = new Volumen("Litro", "Galon");
console.log("\n50 litros son " + vol1.conversor(50) + " galones imperiales.");
const vol2 = new Volumen("Galon", "Litro");
console.log("5 galones imperiales son " + vol2.conversor(5) + " litros.\n");
