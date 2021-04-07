"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documentales = void 0;
const basicStreamableCollection_1 = require("./basicStreamableCollection");
/**
* __Esta es la clase Documentales.__
*/
class Documentales extends basicStreamableCollection_1.BasicStreamableCollection {
    /**
     * Constructor de la clase Documentales.
     * @param items Colección de documentales.
     */
    constructor(items) {
        super(items);
        this.items = items;
    }
    /**
     * Este método permite la búsqueda por nombre, año o calificación del documental.
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
                throw Error("Búsqueda de documental fallida.");
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
exports.Documentales = Documentales;
let documentales = new Documentales([
    { nombre: 'American Factory', año: 2019, calificacion: 7.5 },
    { nombre: 'Oso polar', año: 2010, calificacion: 8 },
    { nombre: 'Líbranos del mal', año: 2006, calificacion: 9 },
]);
console.log(documentales.search("nombre", "Líbranos del mal"));
console.log(documentales.search("año", "2010"));
console.log(documentales.search("calificacion", "7.5"));
