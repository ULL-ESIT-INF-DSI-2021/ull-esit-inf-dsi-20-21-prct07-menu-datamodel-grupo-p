import { BasicStreamableCollection } from "./basicStreamableCollection";
/**
 * Atributos que posee el documental.
 * @param nombre Nombre del documental.
 * @param año Año del documental.
 * @param calificacion Calificación del documental.
 */
export declare type documental = {
    nombre: string;
    año: number;
    calificacion: number;
};
/**
* __Esta es la clase Documentales.__
*/
export declare class Documentales extends BasicStreamableCollection<documental> {
    protected items: documental[];
    /**
     * Constructor de la clase Documentales.
     * @param items Colección de documentales.
     */
    constructor(items: documental[]);
    /**
     * Este método permite la búsqueda por nombre, año o calificación del documental.
     * @param tipo Si quieres buscar por nombre, año o calificación.
     * @param busqueda La palabra o valor que quieres buscar.
     */
    search(tipo: string, busqueda: string): documental[];
    /**
     * Este método busca el ítem y devuelve la colección.
     * @returns Devuelve la colección.
     */
    getItem(): documental[];
}
