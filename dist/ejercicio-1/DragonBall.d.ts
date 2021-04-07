import { Fighter } from "./fighter";
/**
 * Esta es la clase DragonBall.
 */
export declare class DragonBall extends Fighter {
    private universo;
    /**
     * Constructor de la clase DragonBall.
     * @param nombre Nombre del personaje de DragonBall (Goku, Vegeta, Bulma...).
     * @param peso Peso del personaje de DragonBall.
     * @param altura Altura del personaje de DragonBall.
     * @param tipo Tipo del personaje de DragonBall.
     * @param ataque Ataque del personaje de DragonBall.
     * @param defensa Defensa del personaje de DragonBall.
     * @param velocidad Velocidad del personaje de DragonBall.
     * @param hp Vida del personaje de DragonBall.
     * @param universo Universo al que pertenece (en este caso al universo DragonBall).
     */
    constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, hp: number, universo: string);
    /**
     * Este método se encarga de dar acceso al valor del atributo universo
     * aunque se acceda desde fuera de la clase Star Wars.
     * @return Devuelve el universo al que pertenece.
     */
    getUniverso(): string;
}
