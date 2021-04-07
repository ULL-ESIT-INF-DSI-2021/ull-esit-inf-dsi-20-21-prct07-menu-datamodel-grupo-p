import { Macronutrientes } from "./alimento";
import { Grupo } from "./alimento";
import { Plato } from "./plato";
export declare class Menu {
    private nombreMenu;
    private primerPlato;
    /**
     * Constructor de la clase Menu. Comprueba que existan al menos 3 platos de 3 categorías
     * distintas (Entrante, Primero, Segundo y Postre) en cada Menú. Si no los hay, devuelve un error.
     * @param nombreMenu Nombre del plato en cuestión.
     * @param primerPlato Primer plato del menú
     * @param demasPlatos Array donde se almacenan el resto de los platos del menú.
     */
    private precio;
    private arrayPlatos;
    constructor(nombreMenu: string, primerPlato: Plato, ...demasPlatos: Plato[]);
    /**
     * Obtiene el nombre del menú.
     * @returns Nombre del menú.
     */
    getNombreMenu(): string;
    /**
     * Obtiene los platos que componen el menú.
     * @returns Listado de los platos del menú.
     */
    getPlatos(): Plato[];
    /**
     * Obtiene la composición nutricional del menú, obteníendola plato por plato.
     * @returns Cantidad total de carbohidratos, proteínas y lípidos del menú.
     */
    getComposicionNutricional(): Macronutrientes;
    /**
     * Obtiene los grupos de alimentos que componen el menú. Almacena todos los grupos de
     * todos los alimentos de todos los platos y al final filtrar para tener una copia de
     * cada. Este listado final de grupos únicos es lo que devuelve.
     * @returns Listado de grupos de alimentos (únicos) de todo el menú.
     */
    getGruposAlimentos(): Grupo[];
    /**
     * Obtiene el precio del menú sumando los precios de sus platos.
     * @returns Precio (en euros) del menú.
     */
    getPrecioMenu(): number;
}
