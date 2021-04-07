import { Carta } from "./carta";
import { Plato } from "./plato";
import { Menu } from "./menu";
/**
 * Esta es la clase Comanda.
 */
export declare class Comanda {
    private carta;
    /**
     * Constructor de la clase Comanda.
     * @param carta Nombre de la carta.
     */
    private comanda;
    constructor(carta: Carta);
    /**
     * Obtiene la comanda.
     * @returns La comanda entera.
     */
    mostrarComanda(): [Menu | Plato, number][];
    /**
     * Método que permite al cliente añadir un menú a la comanda
     * @param nombreMenu El nombre del menú que quiere añadir a la comanda.
     * @param cantidadMenu La cantidad de menús que quiere añadir a la comanda.
     */
    sumarMenu(nombreMenu: string, cantidadMenu: number): void;
    /**
     * Método que permite al cliente añadir un plato a la comanda
     * @param nombrePlato El nombre del plato que quiere añadir a la comanda.
     * @param cantidadPlato La cantidad de este tipo de platos que quiere añadir a la comanda.
     */
    sumarPlato(nombrePlato: string, cantidadPlato: number): void;
    /**
     * Función para deshacer el guardián de tipos.
     * @returns True si el objeto es de clase Menu.
     */
    isMenu(myObj: any): myObj is Menu;
    /**
     * Función para deshacer el guardián de tipos.
     * @returns True si el objeto es de clase Plato.
     */
    isPlato(myObj: any): myObj is Plato;
    /**
     * Método que permite encontrar una comanda deseada.
     * @param nombre Nombre de la comanda a buscar.
     */
    encontrarEnComanda(nombre: string): (Menu | Plato)[];
    /**
     * Método que permite eliminar una comanda deseada.
     * @param nombre Nombre de la comanda a eliminar.
     */
    quitarElemento(nombreMenu: string, cantidadMenu: number): void;
}
