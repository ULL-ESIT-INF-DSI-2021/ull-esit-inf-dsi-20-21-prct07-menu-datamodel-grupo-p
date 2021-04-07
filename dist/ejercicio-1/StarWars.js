"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarWars = void 0;
const fighter_1 = require("./fighter");
/**
 * Esta es la clase StarWars.
 */
class StarWars extends fighter_1.Fighter {
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
    constructor(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp, universo) {
        super(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp);
        this.universo = universo;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo universo
     * aunque se acceda desde fuera de la clase StarWars.
     * @return Devuelve el universo al que pertenece.
     */
    getUniverso() {
        return this.universo;
    }
}
exports.StarWars = StarWars;
