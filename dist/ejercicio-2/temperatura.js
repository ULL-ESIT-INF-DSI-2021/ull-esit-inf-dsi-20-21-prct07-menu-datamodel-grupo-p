"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperatura = void 0;
/**
 * __Esta es la clase Temperatura.__
 */
class Temperatura {
    /**
     * Constructor de la clase Temperatura.
     * @param primerSistema Nombre del primer sistema.
     * @param segundoSistema Nombre del segundo sistema.
     */
    constructor(primerSistema, segundoSistema) {
        this.primerSistema = primerSistema;
        this.segundoSistema = segundoSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo primerSistema
     * aunque se acceda desde fuera de la clase Temperatura.
     * @return Devuelve el nombre del primerSistema.
     */
    getPrimerSistema() {
        return this.primerSistema;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo segundoSistema
     * aunque se acceda desde fuera de la clase Temperatura.
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
        if (this.getPrimerSistema() === "Grados") {
            if (this.getSegundoSistema() === "Kelvin")
                resultado = valor + 273, 15;
        }
        else if (this.getPrimerSistema() === "Kelvin") {
            if (this.getSegundoSistema() === "Grados")
                resultado = valor - 273, 15;
        }
        else
            throw new Error("Los sistemas no son válidos.");
        return resultado;
    }
}
exports.Temperatura = Temperatura;
const temp1 = new Temperatura("Grados", "Kelvin");
console.log("\n20 grados Celsius son " + temp1.conversor(20) + " Kelvins.");
const temp2 = new Temperatura("Kelvin", "Grados");
console.log("300 Kelvins son " + temp2.conversor(300) + " grados Celsius.\n");
