"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestor = void 0;
const articulo_1 = require("./articulo");
/**
 * Esta es la clase Gestor.
 */
class Gestor {
    /**
     * Constructor de la clase Gestor.
     * @param articulo1 Almacena la información del primer artículo.
     * @param articulo1 Almacena la información si se introdujeran múltiples artículos.
     */
    constructor(articulo1, ...articuloN) {
        this.gestor = [];
        this.getGestor().push(articulo1);
        for (let i = 0; i < articuloN.length; i++) {
            this.getGestor().push(articuloN[i]);
        }
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo gestor aunque se acceda desde fuera de la clase Gestor.
     * @return Devuelve el nombre de un artículo.
     */
    getGestor() {
        return this.gestor;
    }
    /**
     * Método que permite mostrar los artículos en formato tabla.
     */
    imprimirTabla() {
        console.table(this.getGestor());
    }
    /**
     * Filtra artículos mediante el empleo de las keywords.
     * @param art Artículo que le paso como parámetro.
     * @return El artículo en cuestión que coincida con la búsqueda.
     */
    busqueda(art) {
        let clave = [];
        for (let i = 0; i < this.getGestor().length; i++) {
            for (let j = 0; j < this.getGestor()[i].getKeywords().length; j++) {
                if (this.getGestor()[i].getKeywords()[j] === art) {
                    clave.push(this.getGestor()[i]);
                    break;
                }
            }
        }
        return clave;
    }
    /**
     * Permite mostrar el resultado de la búsqueda en formato de cita APA.
     * @param art Artículo que le paso como parámetro.
     * @return El artículo exportado en formato APA.
     */
    exportarAPA(art) {
        let claveAPA = this.busqueda(art);
        let aux = [];
        for (let i = 0; i < claveAPA.length; i++)
            aux.push(claveAPA[i].imprimirAPA());
        return aux;
    }
}
exports.Gestor = Gestor;
let articulo1 = new articulo_1.Articulo("Peter Pan", ["Andrew Jackson"], ["ajackson@gmail.com"], ["Campanilla", "Londres"], "Volar a nunca jamás.", 1990, "Disney", 1);
let articulo2 = new articulo_1.Articulo("La cenicienta", ["Pepe Benavente", "Ana Guerra"], ["can@gmail.es", "anita@gmail.es"], ["zapato"], "Se busca princesa Disney.", 2001, "Princesitas", 2);
let articulo3 = new articulo_1.Articulo("Los tres cerditos", ["Mark Zuckenberg"], ["markito@facebook.com"], ["lobo"], "Que viene el lobo.", 2015, "Cuentos", 3);
let gestores = new Gestor(articulo1, articulo2, articulo3);
console.log(gestores.imprimirTabla());
