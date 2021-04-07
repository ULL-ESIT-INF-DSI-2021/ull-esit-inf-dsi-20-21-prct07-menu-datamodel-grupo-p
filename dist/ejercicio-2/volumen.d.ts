import { isConvertible } from './isConvertible';
/**
 * __Esta es la clase Volumen.__
 */
export declare class Volumen implements isConvertible<number> {
    private primerSistema;
    private segundoSistema;
    /**
     * Constructor de la clase Volumen.
     * @param primerSistema Nombre del primer sistema.
     * @param segundoSistema Nombre del segundo sistema.
     */
    constructor(primerSistema: string, segundoSistema: string);
    /**
     * Este método se encarga de dar acceso al valor del atributo primerSistema
     * aunque se acceda desde fuera de la clase Volumen.
     * @return Devuelve el nombre del primerSistema.
     */
    getPrimerSistema(): string;
    /**
     * Este método se encarga de dar acceso al valor del atributo segundoSistema
     * aunque se acceda desde fuera de la clase Volumen.
     * @return Devuelve el nombre del segundoSistema.
     */
    getSegundoSistema(): string;
    /**
     * Este método hace la conversión entre dos sistemas de unidades diferentes
     * @param valor El valor que tiene el sistema 1.
     * @return Devuelve el valor que tiene el sistema 2.
     */
    conversor(valor: number): number;
}
