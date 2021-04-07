import { Articulo } from "./articulo";
/**
 * Esta es la clase Gestor.
 */
export declare class Gestor {
    private gestor;
    /**
     * Constructor de la clase Gestor.
     * @param articulo1 Almacena la información del primer artículo.
     * @param articulo1 Almacena la información si se introdujeran múltiples artículos.
     */
    constructor(articulo1: Articulo, ...articuloN: Articulo[]);
    /**
     * Este método se encarga de dar acceso al valor del atributo gestor aunque se acceda desde fuera de la clase Gestor.
     * @return Devuelve el nombre de un artículo.
     */
    getGestor(): Articulo[];
    /**
     * Método que permite mostrar los artículos en formato tabla.
     */
    imprimirTabla(): void;
    /**
     * Filtra artículos mediante el empleo de las keywords.
     * @param art Artículo que le paso como parámetro.
     * @return El artículo en cuestión que coincida con la búsqueda.
     */
    busqueda(art: string): Articulo[];
    /**
     * Permite mostrar el resultado de la búsqueda en formato de cita APA.
     * @param art Artículo que le paso como parámetro.
     * @return El artículo exportado en formato APA.
     */
    exportarAPA(art: string): string[];
}
