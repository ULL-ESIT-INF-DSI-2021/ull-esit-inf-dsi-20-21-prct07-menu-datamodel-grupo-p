import { Fighter } from "./fighter";
/**
 * Esta es la clase Pokemon.
 */
export declare class Pokemon extends Fighter {
    private universo;
    /**
     * Constructor de la clase Pokemon.
     * @param nombre Nombre del pokemon (Charizard, Venusaur, Blastoise...).
     * @param peso Peso del pokemon.
     * @param altura Altura del pokemon.
     * @param tipo Tipo del pokemon (fuego, agua, hierba...).
     * @param ataque Ataque del pokemon.
     * @param defensa Defensa del pokemon.
     * @param velocidad Velocidad del pokemon.
     * @param hp Vida del pokemon.
     */
    constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, hp: number, universo: string);
    /**
     * Este método se encarga de dar acceso al valor del atributo universo
     * aunque se acceda desde fuera de la clase Pokemon.
     * @return Devuelve el universo al que pertenece.
     */
    getUniverso(): string;
}
