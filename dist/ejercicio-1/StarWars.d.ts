import { Fighter } from "./fighter";
/**
 * Esta es la clase StarWars.
 */
export declare class StarWars extends Fighter {
    private universo;
    /**
     * Constructor de la clase StarWars.
     * @param nombre Nombre del personaje de Star Wars (Yoda, Leia, Darth Vader...).
     * @param peso Peso del personaje de Star Wars.
     * @param altura Altura del personaje de Star Wars.
     * @param tipo Tipo del personaje de Star Wars.
     * @param ataque Ataque del personaje de Star Wars.
     * @param defensa Defensa del personaje de Star Wars.
     * @param velocidad Velocidad del personaje de Star Wars.
     * @param hp Vida del personaje de Star Wars.
     * @param universo Universo al que pertenece (en este caso al universo Star Wars).
     */
    constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, hp: number, universo: string);
    /**
     * Este método se encarga de dar acceso al valor del atributo universo
     * aunque se acceda desde fuera de la clase StarWars.
     * @return Devuelve el universo al que pertenece.
     */
    getUniverso(): string;
}
