
import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento"
import { Grupo } from "./alimento";
import { Plato } from "./plato";
import { Categoria } from "./plato";
import { Menu } from "./menu";
import { Carta } from "./carta";
import { Comanda } from "./comanda";
import {CartaRestauranteLunaRosa} from './stock';

const ComandaRestaurante = new Comanda(CartaRestauranteLunaRosa, 1);

//#################################################################################
//INQUIRER
//#################################################################################
export const inquirer = require('inquirer');

/**
 * Enumerable con las opciones
 */
enum optionsApp{
  Comanda = "Realizar comanda",
  Gestion = "Gestion alimentacion",
  Salir = "Salir del programa"
}

/**
 * Funcion de con Inquirer. Es la que controla la aplicación a nivel general.
 */
export function promptApp(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'respuesta',
    message: 'Seleccione una opcion:',
    choices: Object.values(optionsApp)
  }).then((answers: any) => {
  switch (answers["respuesta"]) {
    case optionsApp.Gestion:
      console.log('Lo sentimos. Esto no funciona')
      break;
    case optionsApp.Comanda:
      ComandaRestaurante.runInquirer();
      break;
    case optionsApp.Salir:
      console.log('Gracias por su visita. Buen dia');
      break;
    default:
      console.log('Expulsado por gracioso');
  }
  }) 
}

promptApp();


