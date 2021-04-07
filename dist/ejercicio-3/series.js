"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = void 0;
const basicStreamableCollection_1 = require("./basicStreamableCollection");
/**
* __Esta es la clase Series.__
*/
class Series extends basicStreamableCollection_1.BasicStreamableCollection {
    /**
     * Constructor de la clase Series.
     * @param items Colección de series.
     */
    constructor(items) {
        super(items);
        this.items = items;
    }
    /**
     * Este método permite la búsqueda por nombre, año o calificación de la serie.
     * @param tipo Si quieres buscar por nombre, año o calificación.
     * @param busqueda La palabra o valor que quieres buscar.
     */
    search(tipo, busqueda) {
        let result = [];
        switch (tipo) {
            case ('nombre'):
                result = this.getItem().filter((x) => (x.nombre == busqueda));
                return result;
                break;
            case ('año'):
                result = this.getItem().filter((x) => (x.año.toString() == busqueda));
                return result;
                break;
            case ('calificacion'):
                result = this.getItem().filter((x) => (x.calificacion.toString() == busqueda));
                return result;
                break;
            default:
                throw Error("Búsqueda de la serie fallida.");
                break;
        }
    }
    /**
     * Este método busca el ítem y devuelve la colección.
     * @returns Devuelve la colección.
     */
    getItem() {
        return this.items;
    }
}
exports.Series = Series;
let series = new Series([
    { nombre: 'La casa de papel', año: 2015, calificacion: 8.5 },
    { nombre: 'Juego de tronos', año: 2013, calificacion: 9 },
    { nombre: 'Gambito de dama', año: 2021, calificacion: 7.8 },
]);
console.log(series.search("nombre", "Gambito de dama"));
console.log(series.search("año", "2015"));
console.log(series.search("calificacion", "9"));
