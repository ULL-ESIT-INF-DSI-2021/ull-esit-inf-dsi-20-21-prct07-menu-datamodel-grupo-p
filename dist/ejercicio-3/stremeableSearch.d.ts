import { Streamable } from "./streamable";
/**
* __Esta es la interfaz genérica StreamableSearch.__
*/
export interface StreamableSearch<T> extends Streamable<T> {
    search(tipo: string, busqueda: string): T[];
}
