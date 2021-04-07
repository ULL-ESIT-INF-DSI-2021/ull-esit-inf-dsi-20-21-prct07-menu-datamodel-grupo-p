import { BasicStreamableCollection } from "./basicStreamableCollection";
/**
 * Atributos que posee la serie.
 * @param nombre Nombre de la serie.
 * @param año Año de la serie.
 * @param calificacion Calificación de la serie.
 */
export declare type serie = {
    nombre: string;
    año: number;
    calificacion: number;
};
/**
* __Esta es la clase Series.__
*/
export declare class Series extends BasicStreamableCollection<serie> {
    protected items: serie[];
    /**
     * Constructor de la clase Series.
     * @param items Colección de series.
     */
    constructor(items: serie[]);
    /**
     * Este método permite la búsqueda por nombre, año o calificación de la serie.
     * @param tipo Si quieres buscar por nombre, año o calificación.
     * @param busqueda La palabra o valor que quieres buscar.
     */
    search(tipo: string, busqueda: string): serie[];
    /**
     * Este método busca el ítem y devuelve la colección.
     * @returns Devuelve la colección.
     */
    getItem(): serie[];
}
