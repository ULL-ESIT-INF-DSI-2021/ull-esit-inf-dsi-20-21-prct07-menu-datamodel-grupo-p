import { Movable } from './movable';
/**
 * __Esta es la clase Street.__
 */
export declare class Street {
    private nombre;
    private localizacion;
    vehiculos: Movable[];
    /**
   * Constructor de la clase Street.
   * @param nombre Nombre de la calle.
   * @param localizacion Localización de la calle.
   * @param restoVehiculos Todos los vehículos o peatones que circulen por la calle.
   */
    constructor(nombre: string, localizacion: string, ...restoVehiculos: Movable[]);
    /**
     * Este método se encarga de dar acceso al valor del atributo nombre aunque se acceda desde fuera de la clase Street.
     * @return Devuelve el nombre de la calle.
     */
    getNombre(): string;
    /**
     * Este método se encarga de dar acceso al valor del atributo localización aunque se acceda desde fuera de la clase Street.
     * @return Devuelve la localización de la calle.
     */
    getLocalizacion(): string;
    /**
     * Se encarga de contar el número de vehículos que circulan por una calle.
     * @return Devuelve un array con el total de vehículos de cada tipo.
     * Usage:
     * ```typescript
     * calle1.contadorVehiculos() = totalVehiculos;
     * ```
     */
    contadorVehiculos(): string[];
    /**
     * Almacena el nuevo vehículo en el array de tipo Movable[].
     * @param vehiculo Vehículo que se añade.
     * Usage:
     * ```typescript
     * calle1.añadirVehiculo(bici1) = vehiculos[+bici1]
     * ```
     */
    añadirVehiculo(vehiculo: Movable): void;
    /**
     * Elimina el vehículo especificado del array vehiculos[].
     * @param vehiculo Vehículo que se elimina.
     * Usage:
     * ```typescript
     * calle1.eliminarVehiculo(bici1) = vehiculos[-bici1]
     * ```
     */
    eliminarVehiculo(vehiculo: Movable): void;
    /**
     * Ordena los vehículos de menor a mayor en función de la velocidad de estos.
     * @return El array de vehículos ordenados por velocidad.
     * Usage:
     * ```typescript
     * calle1.ordenarVehiculos() = vehiculos[] //array de vehículos ordenados
     * ```
     */
    ordenarVehiculos(): Movable[];
}
