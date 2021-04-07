"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combat = void 0;
const Pokemon_1 = require("./Pokemon");
const DragonBall_1 = require("./DragonBall");
const StarWars_1 = require("./StarWars");
const Marvel_1 = require("./Marvel");
const DC_1 = require("./DC");
/**
 * Esta es la clase Combat.
 */
class Combat {
    /**
     * Constructor de la clase Combat.
     * @param combatiente1 Primer combatiente de la batalla.
     * @param combatiente2 Segundo combatiente de la batalla.
     */
    constructor(combatiente1, combatiente2) {
        this.combatiente1 = combatiente1;
        this.combatiente2 = combatiente2;
    }
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
    combate(universo1, universo2, damage) {
        let effectiveness = 0;
        let typeA = "";
        let typeB = "";
        typeA = this.combatiente1.getTipo();
        typeB = this.combatiente2.getTipo();
        if (universo1 === "DragonBall") {
            if (universo2 === "DragonBall")
                effectiveness = 1;
            if (universo2 === "StarWars")
                effectiveness = 0.5;
            if (universo2 === "Marvel")
                effectiveness = 1;
            if (universo2 === "DC")
                effectiveness = 2;
            if (universo2 === "Pokemon")
                effectiveness = 2;
        }
        if (universo1 === "StarWars") {
            if (universo2 === "DragonBall")
                effectiveness = 1;
            if (universo2 === "StarWars")
                effectiveness = 1;
            if (universo2 === "Marvel")
                effectiveness = 0.5;
            if (universo2 === "DC")
                effectiveness = 0.5;
            if (universo2 === "Pokemon")
                effectiveness = 2;
        }
        if (universo1 === "Marvel") {
            if (universo2 === "DragonBall")
                effectiveness = 1;
            if (universo2 === "StarWars")
                effectiveness = 2;
            if (universo2 === "Marvel")
                effectiveness = 1;
            if (universo2 === "DC")
                effectiveness = 2;
            if (universo2 === "Pokemon")
                effectiveness = 0.5;
        }
        if (universo1 === "DC") {
            if (universo2 === "DragonBall")
                effectiveness = 0.5;
            if (universo2 === "StarWars")
                effectiveness = 2;
            if (universo2 === "Marvel")
                effectiveness = 0.5;
            if (universo2 === "DC")
                effectiveness = 1;
            if (universo2 === "Pokemon")
                effectiveness = 1;
        }
        if (universo1 === "Pokemon") {
            if (universo2 === "DragonBall")
                effectiveness = 0.5;
            if (universo2 === "StarWars")
                effectiveness = 0.5;
            if (universo2 === "Marvel")
                effectiveness = 2;
            if (universo2 === "DC")
                effectiveness = 1;
            if (universo2 === "Pokemon") {
                if (typeA === "fuego") {
                    if (typeB === "hierba")
                        effectiveness = 2;
                    if (typeB === "fuego" || typeB === "electrico")
                        effectiveness = 1;
                    if (typeB === "agua")
                        effectiveness = 0.5;
                }
                else if (typeA === "agua") {
                    if (typeB === "fuego")
                        effectiveness = 2;
                    if (typeB === "agua")
                        effectiveness = 1;
                    if (typeB === "hierba" || typeB === "electrico")
                        effectiveness = 0.5;
                }
                else if (typeA === "hierba") {
                    if (typeB === "agua")
                        effectiveness = 2;
                    if (typeB === "hierba" || typeB === "electrico")
                        effectiveness = 1;
                    if (typeB === "fuego")
                        effectiveness = 0.5;
                }
                else if (typeA === "electrico") {
                    if (typeB === "agua")
                        effectiveness = 2;
                    if (typeB === "electrico" || typeB === "hierba" || typeB === "fuego")
                        effectiveness = 1;
                }
            }
        }
        let total_damage = effectiveness * damage;
        total_damage = Math.round(total_damage);
        return total_damage;
    }
    /**
     * Esta función se encarga de simular todo el combate.
     * @return Devuelve quién ha sido el ganador.
     *
     * Usage:
     * ```typescript
     * combate() = "El ganador del combate entre universos es... ¡¡¡¡Charizard!!!!"
     * ```
     */
    start() {
        console.log("\n\n¡Bienvenidos al combate pokemon!");
        console.log("En la batalla de hoy, lucharan " + this.combatiente1.getNombre() + " contra "
            + this.combatiente2.getNombre() + ".");
        console.log("¡QUE COMIENCE EL COMBATE!\n\n");
        let daño1 = 50 * (this.combatiente1.getAtaque() / this.combatiente2.getDefensa());
        let daño2 = 50 * (this.combatiente2.getAtaque() / this.combatiente1.getDefensa());
        let vida_nueva1 = 0;
        let vida_nueva2 = 0;
        daño1 = this.combate(this.combatiente1.getUniverso(), this.combatiente2.getUniverso(), daño1);
        daño2 = this.combate(this.combatiente2.getUniverso(), this.combatiente1.getUniverso(), daño2);
        while ((this.combatiente1.getHp() > 0) && (this.combatiente2.getHp() > 0)) {
            console.log(this.combatiente1.getNombre() + " atacó a " + this.combatiente2.getNombre() + ".");
            vida_nueva1 = this.combatiente2.getHp() - daño1;
            this.combatiente2.setHp(vida_nueva1);
            if (this.combatiente2.getHp() > 0)
                console.log(this.combatiente2.getNombre() + " ahora tiene " + this.combatiente2.getHp() + " de vida.");
            else
                console.log(this.combatiente2.getNombre() + " se debilitó. :(");
            if (this.combatiente2.getHp() > 0) {
                console.log(this.combatiente2.getNombre() + " atacó a " + this.combatiente1.getNombre()) + ".";
                vida_nueva2 = this.combatiente1.getHp() - daño2;
                this.combatiente1.setHp(vida_nueva2);
                if (this.combatiente1.getHp() > 0)
                    console.log(this.combatiente1.getNombre() + " ahora tiene " + this.combatiente1.getHp() + " de vida.");
                else
                    console.log(this.combatiente1.getNombre() + " se debilitó. :(");
            }
        }
        if (this.combatiente1.getHp() > 0) {
            console.log("\n");
            let resultado = ("El ganador del combate entre universos es... ¡¡¡¡" + this.combatiente1.getNombre() + "!!!!");
            return resultado;
        }
        else {
            console.log("\n");
            let resultado = ("El ganador del combate entre universos es... ¡¡¡¡" + this.combatiente2.getNombre() + "!!!!");
            return resultado;
        }
    }
}
exports.Combat = Combat;
let charizard = new Pokemon_1.Pokemon("Charizard", 40, 60, "fuego", 10, 15, 10, 100, "Pokemon");
let venusaur = new Pokemon_1.Pokemon("Venusaur", 30, 40, "hierba", 15, 20, 15, 120, "Pokemon");
let goku = new DragonBall_1.DragonBall("Goku", 35, 50, "cheto", 10, 20, 15, 100, "DragonBall");
let yoda = new StarWars_1.StarWars("Yoda", 10, 5, "mago", 20, 15, 20, 80, "StarWars");
let hulk = new Marvel_1.Marvel("Hulk", 50, 100, "tanque", 10, 30, 5, 200, "Marvel");
let superman = new DC_1.DC("Superman", 30, 20, "lucha", 30, 20, 30, 120, "DC");
let combate1 = new Combat(hulk, goku);
console.log(combate1.start());
