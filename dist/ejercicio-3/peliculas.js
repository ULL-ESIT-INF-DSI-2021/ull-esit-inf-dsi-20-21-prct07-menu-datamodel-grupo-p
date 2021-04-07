"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peliculas = void 0;
const basicStreamableCollection_1 = require("./basicStreamableCollection");
/**
* __Esta es la clase Peliculas.__
*/
class Peliculas extends basicStreamableCollection_1.BasicStreamableCollection {
    /**
     * Constructor de la clase Peliculas.
     * @param items Colección de películas.
     */
    constructor(items) {
        super(items);
        this.items = items;
    }
    /**
     * Este método permite la búsqueda por nombre, año o calificación de la película.
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
                throw Error("Búsqueda de la película fallida.");
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
exports.Peliculas = Peliculas;
let peliculas = new Peliculas([
    { nombre: 'Star Wars IX', año: 2020, calificacion: 6.5 },
    { nombre: 'Los vengadores', año: 2018, calificacion: 10 },
    { nombre: 'Dunkerque', año: 1027, calificacion: 8 },
]);
console.log(peliculas.search("nombre", "Dunkerque"));
console.log(peliculas.search("año", "2018"));
console.log(peliculas.search("calificacion", "6.5"));
