"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
const Pokemon_1 = require("./Pokemon");
const DragonBall_1 = require("./DragonBall");
const StarWars_1 = require("./StarWars");
const Marvel_1 = require("./Marvel");
const DC_1 = require("./DC");
/**
 * Esta es la clase Pokedex.
 */
class Pokedex {
    /**
     * Constructor de la clase Fighter.
     * @param contendientes Contiene todos los luchadores de Pokedex.
     */
    constructor(contendientes) {
        this.contendientes = contendientes;
    }
    /**
     * Muestra todos los combatientes.
     */
    monstrarCombatientes() {
        for (let i = 0; i < this.contendientes.length; i++) {
            console.log(`Contendiente` + `${i + 1}` + `: ${this.contendientes[i].getNombre()}`);
        }
    }
}
exports.Pokedex = Pokedex;
let charizard = new Pokemon_1.Pokemon("Charizard", 40, 60, "fuego", 10, 15, 10, 100, "Pokemon");
let venusaur = new Pokemon_1.Pokemon("Venusaur", 30, 40, "hierba", 15, 20, 15, 120, "Pokemon");
let goku = new DragonBall_1.DragonBall("Goku", 35, 50, "cheto", 10, 20, 15, 100, "DragonBall");
let yoda = new StarWars_1.StarWars("Yoda", 10, 5, "mago", 20, 15, 20, 80, "StarWars");
let hulk = new Marvel_1.Marvel("Hulk", 50, 100, "tanque", 10, 30, 5, 200, "Marvel");
let superman = new DC_1.DC("Superman", 30, 20, "lucha", 30, 20, 30, 120, "DC");
let almacen = new Pokedex([charizard, venusaur, goku, yoda, hulk, superman]);
almacen.monstrarCombatientes();
