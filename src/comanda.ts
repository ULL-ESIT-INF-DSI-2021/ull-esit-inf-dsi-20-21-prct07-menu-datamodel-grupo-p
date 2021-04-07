import { Carta } from "./carta";
import { Plato } from "./plato";
import { Menu } from "./menu";

const inquirer = require('inquirer');

/**
 * Esta es la clase Comanda. 
 */
export class Comanda {
  /**
   * Constructor de la clase Comanda.
   * @param carta Nombre de la carta.
   */
  // Comanda -> [Lo que pide, cantidad de lo que pide]
  private comanda: [Menu|Plato, number][] = [];
  constructor(private carta: Carta) { //, private arrayComanda: [Menu|Plato, number][]) {
  }

  /**
   * Obtiene la comanda.
   * @returns La comanda entera.
   */
  mostrarComanda() {
    return this.comanda;
  }
  
  /**
   * Método que permite al cliente añadir un menú a la comanda
   * @param nombreMenu El nombre del menú que quiere añadir a la comanda.
   * @param cantidadMenu La cantidad de menús que quiere añadir a la comanda.
   */
  sumarMenu(nombreMenu: string, cantidadMenu: number) {
    const matchedMenus = this.carta.searchMenu(nombreMenu);
    // EN ESTE PUNTO, SI HAY CERO O MÁS DE DOS COINCIDENCIAS EN EL MENÚ 
    // preguntar al cliente con cuál de ellas se quiere quedar u ofrecerle buscar de nuevo. 

    /**
     * Esto lo que hace es que todos los platos que coincidan con el nombre buscado,
     * los añade igualmente a la comanda y en la misma cantidad.
     * Así que HAY QUE ARREGLARLO.
     */
    matchedMenus.forEach((element) => {
      this.comanda.push([element, cantidadMenu]);
    });
  }

  /**
   * Método que permite al cliente añadir un plato a la comanda
   * @param nombrePlato El nombre del plato que quiere añadir a la comanda.
   * @param cantidadPlato La cantidad de este tipo de platos que quiere añadir a la comanda.
   */
  sumarPlato(nombrePlato: string, cantidadPlato: number) {
    const matchedPlatos = this.carta.searchPlato(nombrePlato);

    matchedPlatos.forEach((element) => {
      this.comanda.push([element, cantidadPlato]);
    });
  }

  /**
   * Función para deshacer el guardián de tipos.
   * @returns True si el objeto es de clase Menu.
   */
  isMenu(myObj: any): myObj is Menu {
    return myObj.getNombreMenu() !== undefined;
  }

  /**
   * Función para deshacer el guardián de tipos.
   * @returns True si el objeto es de clase Plato.
   */
  isPlato(myObj: any): myObj is Plato {
    return myObj.getNombrePlato() !== undefined;
  }

  /**
   * Método que permite encontrar una comanda deseada.
   * @param nombre Nombre de la comanda a buscar.
   */
  encontrarEnComanda(nombre: string) {
    const matchedResults: (Menu|Plato)[] = [];
    this.comanda[0].forEach((elemento) => {
      console.log(elemento);
      if (this.isMenu(elemento)) {
        if (elemento.getNombreMenu().search(nombre) > -1) {
          matchedResults.push(elemento);
        }
      } else if (this.isPlato(elemento)) {
        if (elemento.getNombrePlato().search(nombre) > -1) {
          matchedResults.push(elemento);
        }
      }
    });
    return matchedResults;
  }

  /**
   * Método que permite eliminar una comanda deseada.
   * @param nombre Nombre de la comanda a eliminar.
   */
  quitarElemento(nombreMenu: string, cantidadMenu: number) {
    const matchedMenus: (Menu|Plato)[] = this.encontrarEnComanda(nombreMenu);
    console.table(matchedMenus);      // IMPRIMIR PARA COMPROBAR QUÉ ENCUENTRA PARA BORRAR
    let index;
    let valorObjeto: (Menu|Plato);
    this.comanda.forEach((elemento) => {
      //valorObjeto = elemento[0];
      index = this.comanda.indexOf(elemento, 0);
      if (index > -1) {
        this.comanda.splice(index, 1);
      }
        /*
      if (this.isMenu(element[0])) {
        index = this.comanda.indexOf(element[0], 0);
        if (index > -1) {
          this.comanda.splice(index, 1);
        }
      } else if (this.isPlato(element[0]) {
        index = this.comanda.indexOf(element[0], 0);
        if (index > -1) {
          this.comanda.splice(index, 1);
        }
      }*/
    });
  }
}

/*
* 1: Visualizar la carta del restaurante: Para cada menú y/o plato, 
*   el cliente querrá poder observar toda la información que tiene 
*   (precio, ingredientes, composición nutricional y grupos de alimentos).
*
* 2: Realizar una comanda: El cliente podra: -> Elegir una comanda del menu preestablecido
*                                            -> Podra crear un menu personalizado en base a la carta -> visualizar la carta
*                                                                                                     -> Elegir platos y cantidad
*                                            -> Podra modificar uno de los menu preestablecidos -> Eliminando platos
*/

//Esto enumarara las diferentes opciones del menu principal
enum options{
  Visualizar = "Visualizar la Carta",
  Comanda = "Hacer comanda",
  Salir = "Salir"
}

//Segundo Menu para el caso de  Comandas
async function promptSecond(): Promise<void> {
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'segundarespuesta',
    Message: '¿Que desea hacer ahora?',
    choices: ''
    
  })
}

// Funcion principal del menu 
function promptComanda(){
  console.clear();
  //seria necesario el async si quisieramos ejecutar algo aqui a parte como la visualizacion de algo
  const answers = inquirer.prompt({
    type: 'list',
    name: 'respuesta',
    message: 'Seleccione una opcion:',
    choices: Object.values(options)
  });
  
  switch (answers["respuesta"]) {
    case options.Visualizar:
      //Llamada a un funcion que devuelva la carta del restaurante 
      //let miCarta = new Carta(nombre,todos los menus de la carta, platos sueltos);
      break;

    case options.Comanda:
      //Aqui va la funcion que ejecuta un menu interno que permite modificar o seleccionar un menu personalizado
      break;
    case options.Salir:
      //salimos
      break;
  }
}

