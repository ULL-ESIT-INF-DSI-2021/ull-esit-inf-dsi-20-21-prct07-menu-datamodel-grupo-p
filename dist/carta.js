"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carta = void 0;
const menu_1 = require("./menu");
/*
 * Esta es la clase Carta.
 */
class Carta {
    constructor(nombreCarta, arrayMenu, arrayPlatosSueltos) {
        this.nombreCarta = nombreCarta;
        /**
         * Constructor de la clase Carta.
         * @param nombreCarta Nombre de la carta.
         * @param arrayMenu Todos los menús que contiene la carta.
         * @param arrayPlatosSueltos Todos los platos sueltos para que el comensales diseñen su propio menú.
         */
        this.arrayMenu = [];
        this.arrayPlatosSueltos = [];
        this.arrayMenu = arrayMenu;
        this.arrayPlatosSueltos = arrayPlatosSueltos; // si no, se queja que no existe
    }
    /**
     * Permite añadir nuevos menús creados por los comensales, combinando
     * platos sueltos ya existentes.
     * @param nombre Nombre del nuevo menú.
     * @param plato1 Nombre del primer plato.
     * @param platos Nombre de los demás platos.
     */
    nuevoMenu(nombre, plato1, ...platos) {
        let nuevoMenu = new menu_1.Menu(nombre, plato1, ...platos);
        this.arrayMenu.push(nuevoMenu);
    }
    /**
     * Obtiene el nombre de la Carta.
     * @returns Nombre de la carta.
     */
    getNombreCarta() {
        return this.nombreCarta;
    }
    /**
     * Obtiene el array de los Menús de la carta.
     * @returns Array de menús.
     */
    getAllMenus() {
        return this.arrayMenu;
    }
    /**
     * Obtiene el array de los Platos sueltos de la carta.
     * @returns Array de Platos Sueltos.
     */
    getAllPlatosSueltos() {
        return this.arrayPlatosSueltos;
    }
    /**
     * Obtiene la carta completa del restaurante (menús y platos sueltos).
     * @returns Array con menús y platos sueltos.
     */
    getCarta() {
        let arrayCarta = [];
        arrayCarta.push(...this.getAllMenus(), ...this.getAllPlatosSueltos());
        return arrayCarta;
    }
    /**
     * Función que busca el nombre indicado entre los menús y
     * devuelve todas las coincidencias.
     * @returns Array de todos los menús que contengan esa cadena en su nombre.
     */
    searchMenu(nombreMenu) {
        const arrayMatchedMenu = [];
        this.arrayMenu.forEach((element) => {
            if (element.getNombreMenu().search(nombreMenu) > -1) {
                arrayMatchedMenu.push(element);
            }
        });
        return arrayMatchedMenu;
    }
    /**
     * Función que busca el nombre indicado entre todos los Platos, es decir,
     * entre los Platos sueltos y los Platos de un Menú.
     * @returns Array de Platos que contengan esa cadena en su nombre.
     */
    searchPlato(nombrePlato) {
        const arrayMatchedPlatos = [];
        this.arrayPlatosSueltos.forEach((platoSuelto) => {
            if (platoSuelto.getNombrePlato().search(nombrePlato) > -1) {
                arrayMatchedPlatos.push(platoSuelto);
            }
        });
        this.arrayMenu.forEach((cadaMenu) => {
            cadaMenu.getPlatos().forEach((platoDelMenu) => {
                if (platoDelMenu.getNombrePlato().search(nombrePlato) > -1) {
                    arrayMatchedPlatos.push(platoDelMenu);
                }
            });
        });
        return arrayMatchedPlatos;
    }
    /**
     * Función que busca el string entre todos los nombres de todos los
     * menús y todos los platos de la carta.
     * @returns Array de todas las coincidencias (sean Menús o Platos).
     */
    searchEnGeneral(nombre) {
        const arrayMatched = [];
        arrayMatched.push(...this.searchMenu(nombre));
        arrayMatched.push(...this.searchPlato(nombre));
        return arrayMatched;
    }
}
exports.Carta = Carta;
