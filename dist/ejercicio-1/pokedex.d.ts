import { Fighter } from './fighter';
/**
 * Esta es la clase Pokedex.
 */
export declare class Pokedex {
    contendientes: Fighter[];
    /**
     * Constructor de la clase Fighter.
     * @param contendientes Contiene todos los luchadores de Pokedex.
     */
    constructor(contendientes: Fighter[]);
    /**
     * Muestra todos los combatientes.
     */
    monstrarCombatientes(): void;
}
