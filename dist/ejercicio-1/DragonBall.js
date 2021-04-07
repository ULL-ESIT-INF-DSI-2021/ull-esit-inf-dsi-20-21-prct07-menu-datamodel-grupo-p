"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonBall = void 0;
const fighter_1 = require("./fighter");
/**
 * Esta es la clase DragonBall.
 */
class DragonBall extends fighter_1.Fighter {
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
    constructor(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp, universo) {
        super(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp);
        this.universo = universo;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo universo
     * aunque se acceda desde fuera de la clase Star Wars.
     * @return Devuelve el universo al que pertenece.
     */
    getUniverso() {
        return this.universo;
    }
}
exports.DragonBall = DragonBall;
