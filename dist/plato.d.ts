import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento";
/**
 * Tipo de datos Categoria. Existen 4 categorías posibles: Entrante,
 * primer plato, segundo plato o postre
 */
export declare type Categoria = 'ENTRANTE' | 'PRIMERO' | 'SEGUNDO' | 'POSTRE';
export declare class Plato {
    private nombrePlato;
    private alimentos;
    private categoria;
    /**
     * @param nombrePlato Nombre del plato.
     * @param alimentos Array de pares [alimento, cantidad (en gramos)].
     * @param categoria Categoría a la que pertenece el plato.
     */
    private precio;
    private macronutrientes_plato;
    constructor(nombrePlato: string, alimentos: [Alimento, number][], categoria: Categoria);
    /**
     * Obtiene el nombre del alimento.
     * @returns Nombre del alimento.
     */
    getNombrePlato(): string;
    /**
     * Obtiene la lista de alimentos y/o ingredientes que lo componen.
     * @returns Lista de alimentos.
     */
    getAlimentos(): [Alimento, number][];
    /**
     * Obtiene el nombre de la categoría del plato.
     * @returns Nombre de la categoría del plato.
     */
    getCategoria(): Categoria;
    /**
     * Obtiene los macronutrientes en conjunto del plato.
     * @returns Cantidad de macronutrientes del plato.
     */
    getMacronutrientesPlato(): Macronutrientes;
    /**
     * Obtiene el precio del plato en función a los ingredientes utilizados y su cantidad.
     * @returns Precio del plato.
     */
    getPrecio(): number;
    /**
     * Realiza el cálculo de los macronutrientes del plato en base a la cantidad de cada alimento.
     * @returns Macronutrientes del plato.
     */
    calculoMacronutrientes(): Macronutrientes;
    /**
     * Realiza el cálculo del precio en función a la cantidad utilizada de cada alimento.
     * @return Precio (Euros).
     */
    calculoPrecio(): number;
    /**
     * Calcula el grupo de alimento predominante, es decir, al grupo de alimentos que
     * más aparece entre los ingredientes del plato
     * @return El grupo más repetido.
     */
    calculoGrupoPredominante(): void;
}
