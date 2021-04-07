"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marvel = void 0;
const fighter_1 = require("./fighter");
/**
 * Esta es la clase Marvel.
 */
class Marvel extends fighter_1.Fighter {
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
    constructor(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp, universo) {
        super(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp);
        this.universo = universo;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo universo
     * aunque se acceda desde fuera de la clase Marvel.
     * @return Devuelve el universo al que pertenece.
     */
    getUniverso() {
        return this.universo;
    }
}
exports.Marvel = Marvel;
