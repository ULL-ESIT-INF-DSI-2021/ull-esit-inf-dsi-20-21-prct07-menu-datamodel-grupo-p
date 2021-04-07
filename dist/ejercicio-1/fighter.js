"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
/**
 * Esta es la clase Fighter.
 */
class Fighter {
    /**
     * Constructor de la clase Fighter.
     * @param nombre Nombre del combatiente (Charizard, Goku, Yoda...).
     * @param peso Peso del combatiente.
     * @param altura Altura del combatiente.
     * @param tipo Tipo del combatiente.
     * @param ataque Ataque del combatiente.
     * @param defensa Defensa del combatiente.
     * @param velocidad Velocidad del combatiente.
     * @param hp Vida del combatiente.
     * @param potenciaUniverso La fuerza del universo.
     */
    constructor(nombre, peso, altura, tipo, ataque, defensa, velocidad, hp) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.hp = hp;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo nombre
     * aunque se acceda desde fuera de la clase Fighter.
     * @return Devuelve el nombre del combatiente.
     */
    getNombre() {
        return this.nombre;
    }
    getPeso() {
        return this.peso;
    }
    getAltura() {
        return this.altura;
    }
    getTipo() {
        return this.tipo;
    }
    getAtaque() {
        return this.ataque;
    }
    getDefensa() {
        return this.defensa;
    }
    getVelocidad() {
        return this.velocidad;
    }
    getHp() {
        return this.hp;
    }
    /**
     * Este método se encarga de permitir modificar el valor que hay en el
     * atributo hp incluso accediendo desde fuera de la clase Fighter.
     * @param hp_ Es la vida del combatiente.
     */
    setHp(hp_) {
        this.hp = hp_;
    }
}
exports.Fighter = Fighter;
