/**
* Esta es la clase Articulo.
*/
export declare class Articulo {
    private titulo;
    private autor;
    private email;
    private keywords;
    private resumen;
    private fecha;
    private editorial;
    private citas;
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
    constructor(titulo: string, autor: string[], email: string[], keywords: string[], resumen: string, fecha: number, editorial: string, citas: number);
    /**
     * Este método se encarga de dar acceso al valor del atributo titulo aunque se acceda desde fuera de la clase Articulo.
     * @return Devuelve el nombre del artículo.
     */
    getTitulo(): string;
    getAutor(): string[];
    getEmail(): string[];
    getKeywords(): string[];
    getResumen(): string;
    getFecha(): number;
    getEditorial(): string;
    getCitas(): number;
    /**
     * Permite mostrar el artículo en formato APA.
     * @param art Artículo que le paso como parámetro.
     * @return La referencia del artículo en formato APA para revista electrónica sin DOI.
     */
    imprimirAPA(): string;
}
