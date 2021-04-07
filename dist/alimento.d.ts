/**
 * Tipo de datos Macronutrientes. Servirá como composición nutricional de los alimentos.
 * @param carbohidratos Cantidad de hidratos de carbono por cada 100 gr que posee el alimento.
 * @param proteinas Cantidad de proteínas por cada 100 gr que posee el alimento.
 * @param lipidos Cantidad de lípidos por cada 100 gr de carbono que posee el alimento.
 */
export declare type Macronutrientes = {
    carbohidratos: number;
    proteinas: number;
    lipidos: number;
};
/**
 * Tipo de datos Grupo. Es el grupo de alimentos al que pertenece el alimento.
 */
export declare type Grupo = 'CARNES' | 'PESCADOS' | 'HUEVOS' | 'TOFU' | 'FRUTOS_SECOS' | 'SEMILLAS' | 'LEGUMBRES' | 'VERDURAS' | 'HORTALIZAS' | 'LACTEOS' | 'CEREALES' | 'FRUTAS' | 'PROCESADOS';
/**
 * Esta es la clase Alimento.
 */
export declare class Alimento {
    private nombreAlimento;
    private precio;
    private origen;
    private calorias;
    private macros;
    private grupo;
    /**
     * Constructor de la clase Alimento
     * @param nombreAlimento Nombre del alimento en cuestión.
     * @param precio Precio del alimento.
     * @param origen Localización de origen del alimento (país, ciudad, etc.).
     * @param calorias Kilocalorías por 100 gramos de dicho alimento.
     * @param macros Los macronutrientes que posee el alimento por cada 100 gr(carbohidratos, protínas y lípidos).
     * @param grupo Grupo de alimentos al que pertenece el alimento.
     */
    constructor(nombreAlimento: string, precio: number, origen: string, calorias: number, macros: Macronutrientes, grupo: Grupo);
    /**
     * Obtiene el nombre del alimento.
     * @returns Nombre del alimento.
     */
    getNombreAlimento(): string;
    /**
     * Obtiene el precio por Kg (en euros).
     * @returns Precio del alimento por Kg.
     */
    getPrecio(): number;
    /**
     * Obtiene el origen del alimento.
     * @returns Origen del alimento.
     */
    getOrigen(): string;
    /**
     * Obtiene kilocalorías (kcal) por 100 gr de dicho alimento.
     * @returns kcal del alimento.
     */
    getCalorias(): number;
    /**
     * Obtiene los macronutrientes del alimento por 100 gr.
     * @returns Macronutrientes del alimento.
     */
    getMacronutrientes(): Macronutrientes;
    /**
     * Obtiene el grupo del alimento
     * @returns Grupo del alimento.
     */
    getGrupo(): Grupo;
}
