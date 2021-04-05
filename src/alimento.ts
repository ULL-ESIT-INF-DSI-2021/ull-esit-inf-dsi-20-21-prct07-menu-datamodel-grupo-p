
export type Macronutrientes = {
  carbohidratos: number,
  proteinas: number,
  lipidos: number
}

export enum Grupo {'CARNES', 'PESCADOS', 'HUEVOS', 'TOFU', 'FRUTOS_SECOS', 'SEMILLAS', 'LEGUMBRES', 'VERDURAS', 'HORTALIZAS', 'LACTEOS', 'CEREALES', 'FRUTAS'};

export type GrupoType = 'CARNES' | 'PESCADOS' | 'HUEVOS' | 'TOFU' | 'FRUTOS_SECOS' | 'SEMILLAS' | 'LEGUMBRES' |
'VERDURAS' | 'HORTALIZAS' | 'LACTEOS' | 'CEREALES' | 'FRUTAS';

/**
 * Esta es lal clase Alimentos.
 */
export class Alimento{
  
  constructor(private nombreAlimento: string, private precio: number, 
  // private origen: string, private calorias: number, private macros: Macronutrientes, private grupo: Grupo) {}
  private origen: string, private calorias: number, private macros: Macronutrientes, private grupo: GrupoType) {}
  /**
   * Obtiene el nombre del alimento.
   * @returns Nombre del alimento.
   */
  getNombreAlimento() {
    return this.nombreAlimento;
  }

  /**
   * Obtiene el precio por Kg (en euros)
   * @returns Precio del alimento por Kg.
   */
  getPrecio() {
    return this.precio;
  }

  /**
   * Obtiene el origen del alimento.
   * @returns Origen del alimento.
   */
  getOrigen() {
    return this.origen;
  }

  /**
   * Kilocalorías (kcal) por 100 gr de dicho alimento.
   * Obtiene la kcal del alimento.
   * @returns kcal del alimento.
   */
  getCalorias() {
    return this.calorias;
  }

  /**
   * Obtiene los macronutrientes del alimento por 100 gr
   * @returns Macronutrientes del alimento.
   */
  getMacronutrientes() {
    return this.macros;
  }

  /**
   * Obtiene el grupo del alimento
   * @returns Grupo del alimento.
   */
  getGrupo() {
    return this.grupo;
  }
}