import { StreamableSearch } from "./streamableSearch";
/**
* __Esta es la clase genérica BasicStreamableCollection.__
*/
export declare abstract class BasicStreamableCollection<T> implements StreamableSearch<T> {
    protected items: T[];
    /**
     * Constructor de la clase BasicStreamableCollection.
     * @param items Colección de series, películas o documentales.
     */
    constructor(items: T[]);
    /**
     * Este método permite añadir un nuevo item a la colección.
     * @param newItem Ítem que queremos añadir.
     * Usage:
     * ```typescript
     * addItem("Juego de tronos") = items["Juego de tronos"]
     * ```
     */
    addItem(newItem: T): void;
    /**
     * Este método busca el ítem y devuelve la colección.
     * @param searchTerm Ítem que queremos buscar.
     * @returns Devuelve la colección.
     */
    abstract getItem(searchTerm: string): T[];
    /**
     * Este método permite la búsqueda por nombre, año o calificación de la serie, película o documental.
     * @param tipo Si quieres buscar por nombre, año o calificación.
     * @param busqueda La palabra o valor que quieres buscar.
     */
    abstract search(tipo: string, busqueda: string): T[];
}
