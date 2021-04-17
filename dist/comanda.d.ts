import { Carta } from "./carta";
import { Plato } from "./plato";
import { Menu } from "./menu";
/**
 * Esta es la clase Comanda.
 */
export declare class Comanda {
    readonly carta: Carta;
    /**
     * Constructor de la clase Comanda.    arrzo
     * @param comanda Es un array dond
     */
    private comanda;
    constructor(carta: Carta);
    /**
     * Obtiene la comanda.
     * @returns Array comanda entero.
     */
    mostrarComanda(): (Plato | Menu)[];
    /**
     * Método que permite al cliente añadir un menú a la comanda.
     * Busca la cadena dentro de los nombres de todos los menús de la Carta.
     * Encuentra todas las coincidencias, y si son 2 o más (diferentes), pregunta al cliente
     * si quiere de ese tipo.
     *
     * @param nombreMenu El nombre del menú que quiere añadir a la comanda.
     * @param cantidadMenu La cantidad de menús que quiere añadir a la comanda.
     */
    sumarMenu(nombreMenu: string, cantidadMenu: number): void;
    /**
     * Método que permite al cliente añadir un plato a la comanda.
     * Busca la cadena dentro de los nombres de todos los platos de la Carta.
     * Encuentra todas las coincidencias, y si son 2 o más (diferentes), pregunta al cliente
     * si quiere de ese tipo.
     *
     * @param nombrePlato El nombre del plato que quiere añadir a la comanda.
     * @param cantidadPlato La cantidad de este tipo de platos que quiere añadir a la comanda.
     */
    sumarPlato(nombrePlato: string, cantidadPlato: number): void;
    /**
     * Método que permite encontrar un elemento de la comanda.
     * Deshace el guardián de tipos entre Menu y Plato para consultar correctamente
     * el nombre del elemento. Si el nombre coincide, entonces añade el objeto en el array.
     *
     * @param nombre Nombre de la comanda a buscar.
     * @return Array de los objetos que coinciden en nombre.
     */
    encontrarEnComanda(nombre: string): (Plato | Menu)[];
    /**
     * Método que permite eliminar elementos de la comanda.
     * Busca la subcadena que le otorgamos entre los nombres de todos los elementos
     * de la Comanda y almacena esos objetos para poder eliminarlos de la lista.
     *
     * @param nombre Nombre del elemento a eliminar.
     */
    quitarElemento(nombreElemento: string, cantidadMenu: number): void;
}
