import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento"
import { Grupo } from "./alimento";
import { GrupoType } from "./alimento";
import { Plato } from "./plato";
import { Categorias } from "./plato";
import { Menu } from "./menu";

/*
 * Esta es la clase Carta.
 */
export class Carta {
  /**
   * @param nombre Nombre del plato
   */
  private arrayMenus: Menu[] = [];
  private arrayPlatos: Plato[] = []; //?? No ta' claro
  constructor(private nombreCarta: string, private primerMenu: Plato, ...demasMenus: Plato[]) {

  }
  /**
   * Permite añadir nuevos menus creados por los comensales, combinando
   * platos sueltos ya existentes.
   */
  nuevoMenu(plato1: Plato, ...platos: Plato[]) {
    //let nuevoMenu = new Menu('');
  }
  /**
   * Obtiene el nombre del menú.
   * @returns Nombre del menú.
   */
  getNombreCarta() {
    return this.nombreCarta;
  }

}