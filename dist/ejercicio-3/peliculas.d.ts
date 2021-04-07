import { BasicStreamableCollection } from "./basicStreamableCollection";
/**
 * Atributos que posee la película.
 * @param nombre Nombre de la película.
 * @param año Año de la película.
 * @param calificacion Calificación de la película.
 */
export declare type pelicula = {
    nombre: string;
    año: number;
    calificacion: number;
};
/**
* __Esta es la clase Peliculas.__
*/
export declare class Peliculas extends BasicStreamableCollection<pelicula> {
    protected items: pelicula[];
    /**
     * Constructor de la clase Peliculas.
     * @param items Colección de películas.
     */
    constructor(items: pelicula[]);
    /**
     * Este método permite la búsqueda por nombre, año o calificación de la película.
     * @param tipo Si quieres buscar por nombre, año o calificación.
     * @param busqueda La palabra o valor que quieres buscar.
     */
    search(tipo: string, busqueda: string): pelicula[];
    /**
     * Este método busca el ítem y devuelve la colección.
     * @returns Devuelve la colección.
     */
    getItem(): pelicula[];
}
