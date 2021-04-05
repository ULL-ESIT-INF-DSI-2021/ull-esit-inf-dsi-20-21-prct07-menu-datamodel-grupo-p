import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento"
import { Grupo } from "./alimento";
import { GrupoType } from "./alimento";
import { Plato } from "./plato";
import { Categorias } from "./plato";


/*
 * Esta es la clase Menu.
 */
export class Menu {
  /**
   * @param nombre Nombre del plato
   */
  private precio: number = 0;
  private arrayPlatos: Plato[] = [];
  constructor(private nombreMenu: string, private primerPlato: Plato, ...demasPlatos: Plato[]) {
    this.arrayPlatos.push(primerPlato);
    demasPlatos.forEach((element) => {
      this.arrayPlatos.push(element);
    });

    let counts: Categorias[] = [];
    this.arrayPlatos.forEach((elemento) => {
      //counts[elemento.getCategorias()] = 1 + (counts[elemento.getCategorias()] || 0);
    });
    if (counts.length < 3) {
      throw new Error("Los menús deben tener 3 categorías de platos como mínimo.");
    }
  }

  /**
   * Obtiene el nombre del menú.
   * @returns Nombre del menú.
   */
  getNombreMenu() {
    return this.nombreMenu;
  }

  /**
   * Obtiene los platos que componen el menú.
   * @returns Listado de los platos del menú.
   */
  getPlatos(){
    return this.arrayPlatos;
  }

  /**
   * Obtiene la composición nutricional del menú
   * @returns Nombre del alimento.
   */
  getComposicionNutricional() {
    return this;
    
  }
  
  /**
   * Obtiene los grupos de alimentos que componen el menú.
   * @returns Listado de grupos de alimentos.
   */
  getGruposAlimentos() {
    let arrayGruposAlimentos: GrupoType[] = [];
    let platosGrupo: [Alimento, number][] = [];
    let valorGrupo: GrupoType;
    this.arrayPlatos.forEach((plato) => {
      platosGrupo = plato.getAlimentos();
      platosGrupo.forEach((alimento) => {
        valorGrupo = alimento[0].getGrupo();
        //arrayGruposAlimentos[valorGrupo] = 1 + (arrayGruposAlimentos[valorGrupo] || 0)
      });;
      // arrayGruposAlimentos[element)] = 1 + (arrayGruposAlimentos[element.calculoGrupoPredominante()] || 0);
    });
  }
  
  /**
   * Obtiene el precio del menú sumando los precios de sus platos.
   * @returns Precio (en euros) del menú.
   */
  getPrecioMenu(): number {
    let precioTotal: number = 0;
    this.arrayPlatos.forEach((element) => {
      precioTotal += element.getPrecio();
    });
    return precioTotal;
  }
}