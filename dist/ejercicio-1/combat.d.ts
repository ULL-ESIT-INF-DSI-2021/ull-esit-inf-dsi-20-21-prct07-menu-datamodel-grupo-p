import { Fighter } from "./fighter";
/**
 * Esta es la clase Combat.
 */
export declare class Combat {
    combatiente1: Fighter;
    combatiente2: Fighter;
    /**
     * Constructor de la clase Combat.
     * @param combatiente1 Primer combatiente de la batalla.
     * @param combatiente2 Segundo combatiente de la batalla.
     */
    constructor(combatiente1: Fighter, combatiente2: Fighter);
    /**
     * Esta función se encarga de calcular la eficacia y el daño de un ataque.
     * @param universo1 Es el universo al que pertenece el combatiente atacante.
     * @param universo2 Es el universo al que pertenece el combatiente defensor.
     * @param damage Es la cantidad de ataque que posee el combatiente atacante.
     * @return Devuelve el daño de ataque multiplicado por la efectividad.
     *
     * Usage:
     * ```typescript
     * combate("Marvel", "DragonBall", 20) = 40
     * ```
     */
    combate(universo1: string, universo2: string, damage: number): number;
    /**
     * Esta función se encarga de simular todo el combate.
     * @return Devuelve quién ha sido el ganador.
     *
     * Usage:
     * ```typescript
     * combate() = "El ganador del combate entre universos es... ¡¡¡¡Charizard!!!!"
     * ```
     */
    start(): string;
}
