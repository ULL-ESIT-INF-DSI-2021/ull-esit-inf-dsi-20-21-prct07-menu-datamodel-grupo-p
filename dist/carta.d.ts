import { Plato } from "./plato";
import { Menu } from "./menu";
export declare class Carta {
    private nombreCarta;
    /**
     * Constructor de la clase Carta.
     * @param nombreCarta Nombre de la carta.
     * @param arrayMenu Todos los menús que contiene la carta.
     * @param arrayPlatosSueltos Todos los platos sueltos para que el comensales diseñen su propio menú.
     */
    private arrayMenu;
    private arrayPlatosSueltos;
    constructor(nombreCarta: string, arrayMenu: Menu[], arrayPlatosSueltos: Plato[]);
    /**
     * Permite añadir nuevos menús creados por los comensales, combinando
     * platos sueltos ya existentes.
     * @param nombre Nombre del nuevo menú.
     * @param plato1 Nombre del primer plato.
     * @param platos Nombre de los demás platos.
     */
    nuevoMenu(nombre: string, plato1: Plato, ...platos: Plato[]): void;
    /**
     * Obtiene el nombre de la Carta.
     * @returns Nombre de la carta.
     */
    getNombreCarta(): string;
    /**
     * Obtiene el array de los Menús de la carta.
     * @returns Array de menús.
     */
    getAllMenus(): Menu[];
    /**
     * Obtiene el array de los Platos sueltos de la carta.
     * @returns Array de Platos Sueltos.
     */
    getAllPlatosSueltos(): Plato[];
    /**
     * Obtiene la carta completa del restaurante (menús y platos sueltos).
     * @returns Array con menús y platos sueltos.
     */
    getCarta(): (Plato | Menu)[];
    /**
     * Función que busca el nombre indicado entre los menús y
     * devuelve todas las coincidencias.
     * @returns Array de todos los menús que contengan esa cadena en su nombre.
     */
    searchMenu(nombreMenu: string): Menu[];
    /**
     * Función que busca el nombre indicado entre todos los Platos, es decir,
     * entre los Platos sueltos y los Platos de un Menú.
     * @returns Array de Platos que contengan esa cadena en su nombre.
     */
    searchPlato(nombrePlato: string): Plato[];
    /**
     * Función que busca el string entre todos los nombres de todos los
     * menús y todos los platos de la carta.
     * @returns Array de todas las coincidencias (sean Menús o Platos).
     */
    searchEnGeneral(nombre: string): (Menu | Plato)[];
}
