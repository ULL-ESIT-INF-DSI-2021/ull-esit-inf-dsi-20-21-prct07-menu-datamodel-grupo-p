/**
* __Esta es la interfaz genérica Streamable.__
*/
export interface Streamable<T> {
    addItem(newItem: T): void;
    getItem(searchTerm: string): T[];
}
