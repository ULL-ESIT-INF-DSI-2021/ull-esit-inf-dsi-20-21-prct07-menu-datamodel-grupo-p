/**
 * Esta es la clase Fighter.
 */
export declare abstract class Fighter {
    private nombre;
    private peso;
    private altura;
    private tipo;
    private ataque;
    private defensa;
    private velocidad;
    private hp;
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
    constructor(nombre: string, peso: number, altura: number, tipo: string, ataque: number, defensa: number, velocidad: number, hp: number);
    /**
     * Este método se encarga de dar acceso al valor del atributo nombre
     * aunque se acceda desde fuera de la clase Fighter.
     * @return Devuelve el nombre del combatiente.
     */
    getNombre(): string;
    getPeso(): number;
    getAltura(): number;
    getTipo(): string;
    getAtaque(): number;
    getDefensa(): number;
    getVelocidad(): number;
    getHp(): number;
    /**
     * Este método se encarga de permitir modificar el valor que hay en el
     * atributo hp incluso accediendo desde fuera de la clase Fighter.
     * @param hp_ Es la vida del combatiente.
     */
    setHp(hp_: number): void;
    abstract getUniverso(): string;
}
