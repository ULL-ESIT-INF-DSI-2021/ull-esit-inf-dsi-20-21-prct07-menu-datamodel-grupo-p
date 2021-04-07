"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
const fighter_1 = require("./fighter");
/**
 * Esta es la clase Pokemon.
 */
class Pokemon extends fighter_1.Fighter {
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
    constructor(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp, universo) {
        super(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp);
        this.universo = universo;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo universo
     * aunque se acceda desde fuera de la clase Pokemon.
     * @return Devuelve el universo al que pertenece.
     */
    getUniverso() {
        return this.universo;
    }
}
exports.Pokemon = Pokemon;
