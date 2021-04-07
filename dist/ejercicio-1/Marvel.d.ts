import { Fighter } from "./fighter";
/**
 * Esta es la clase Marvel.
 */
export declare class Marvel extends Fighter {
    private universo;
    /**
     * Constructor de la clase Marvel.
     * @param nombre Nombre del personaje de Marvel (Hulk, Iron Man, Thor...).
     * @param peso Peso del personaje de Marvel.
     * @param altura Altura del personaje de Marvel.
     * @param tipo Tipo del personaje de Marvel.
     * @param ataque Ataque del personaje de Marvel.
     * @param defensa Defensa del personaje de Marvel.
     * @param velocidad Velocidad del personaje de Marvel.
     * @param hp Vida del personaje de Marvel.
     * @param universo Universo al que pertenece (en este caso al universo Marvel).
     */
    constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, hp: number, universo: string);
    /**
     * Este método se encarga de dar acceso al valor del atributo universo
     * aunque se acceda desde fuera de la clase Marvel.
     * @return Devuelve el universo al que pertenece.
     */
    getUniverso(): string;
}
