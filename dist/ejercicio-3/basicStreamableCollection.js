"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicStreamableCollection = void 0;
/**
* __Esta es la clase genérica BasicStreamableCollection.__
*/
class BasicStreamableCollection {
    /**
     * Constructor de la clase BasicStreamableCollection.
     * @param items Colección de series, películas o documentales.
     */
    constructor(items) {
        this.items = items;
    }
    /**
     * Este método permite añadir un nuevo item a la colección.
     * @param newItem Ítem que queremos añadir.
     * Usage:
     * ```typescript
     * addItem("Juego de tronos") = items["Juego de tronos"]
     * ```
     */
    addItem(newItem) {
        this.items.push(newItem);
    }
}
exports.BasicStreamableCollection = BasicStreamableCollection;
