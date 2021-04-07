"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Articulo = void 0;
/**
* Esta es la clase Articulo.
*/
class Articulo {
    /**
     * Constructor de la clase Articulo.
     * @param titulo Titulo del árticulo.
     * @param autor[] Autor o autores del artículo.
     * @param email[] Email de cada uno de los autores.
     * @param keywords[] Palabras claves o keywords.
     * @param resumen Resumen o abstract del artículo.
     * @param fecha Fecha de publicación.
     * @param editorial Editorial en la que se publicó el artículo
     * @param citas Cantidad de veces que el artículo ha sido referenciado en otros trabajos.
     */
    constructor(titulo, autor, email, keywords, resumen, fecha, editorial, citas) {
        this.titulo = titulo;
        this.autor = autor;
        this.email = email;
        this.keywords = keywords;
        this.resumen = resumen;
        this.fecha = fecha;
        this.editorial = editorial;
        this.citas = citas;
    }
    /**
     * Este método se encarga de dar acceso al valor del atributo titulo aunque se acceda desde fuera de la clase Articulo.
     * @return Devuelve el nombre del artículo.
     */
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getEmail() {
        return this.email;
    }
    getKeywords() {
        return this.keywords;
    }
    getResumen() {
        return this.resumen;
    }
    getFecha() {
        return this.fecha;
    }
    getEditorial() {
        return this.editorial;
    }
    getCitas() {
        return this.citas;
    }
    /**
     * Permite mostrar el artículo en formato APA.
     * @param art Artículo que le paso como parámetro.
     * @return La referencia del artículo en formato APA para revista electrónica sin DOI.
     */
    imprimirAPA() {
        let apa_sin_doi = "";
        for (let i = 0; i < this.getAutor().length; i++) {
            let aux = this.getAutor()[i].split(" ");
            apa_sin_doi += aux[1] + ", " + aux[0][0] + ". ";
            if (i < this.getAutor().length - 1)
                apa_sin_doi += "& ";
        }
        apa_sin_doi += "(" + this.getFecha() + "). ";
        apa_sin_doi += this.getTitulo() + ". ";
        apa_sin_doi += this.getEditorial() + ".";
        return apa_sin_doi;
    }
}
exports.Articulo = Articulo;
let articulo1 = new Articulo("Peter Pan", ["Andrew Jackson"], ["ajackson@gmail.com"], ["Campanilla", "Londres"], "Volar a nunca jamás.", 1990, "Disney", 1);
let articulo2 = new Articulo("La cenicienta", ["Pepe Benavente", "Ana Guerra"], ["can@gmail.es", "anita@gmail.es"], ["zapato"], "Se busca princesa Disney.", 2001, "Princesitas", 2);
let articulo3 = new Articulo("Los tres cerditos", ["Mark Zuckenberg"], ["markito@facebook.com"], ["lobo"], "Que viene el lobo.", 2015, "Cuentos", 3);
console.log(articulo3.imprimirAPA());
