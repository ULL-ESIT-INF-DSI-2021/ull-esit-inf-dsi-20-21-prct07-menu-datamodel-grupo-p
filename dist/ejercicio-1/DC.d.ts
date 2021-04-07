import { Fighter } from "./fighter";
/**
 * Esta es la clase DC.
 */
export declare class DC extends Fighter {
    private universo;
    /**
     * Constructor de la clase DC.
     * @param nombre Nombre del personaje de DC Comics (Superman, Batman, Lovezno...).
     * @param peso Peso del personaje de DC Comics.
     * @param altura Altura del personaje de DC Comics.
     * @param tipo Tipo del personaje de DC Comics.
     * @param ataque Ataque del personaje de DC Comics.
     * @param defensa Defensa del personaje de DC Comics.
     * @param velocidad Velocidad del personaje de DC Comics.
     * @param hp Vida del personaje de DC Comics.
     * @param universo Universo al que pertenece (en este caso al universo DC Comics).
     */
    constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, hp: number, universo: string);
    /**
     * Este método se encarga de dar acceso al valor del atributo universo
     * aunque se acceda desde fuera de la clase DC.
     * @return Devuelve el universo al que pertenece.
     */
    getUniverso(): string;
}
