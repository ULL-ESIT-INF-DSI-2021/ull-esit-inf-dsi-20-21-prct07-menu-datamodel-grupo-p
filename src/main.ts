
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

function printPlato(plato: Plato): void {
  console.log('Plato: ' + plato.getNombrePlato());
  let ingredientes_aux: string = '';
  plato.getAlimentos().forEach(function(element) {
    ingredientes_aux += element[0].getNombreAlimento() + ', ';
  });
  let macros_aux: string = '';
  macros_aux += 'Carbohidratos: ' + +(
  plato.getMacronutrientesPlato().carbohidratos).toFixed(3);
  macros_aux += ' - Lipidos: ' + +(plato.getMacronutrientesPlato().lipidos).toFixed(3);
  macros_aux += ' - Proteinas: ' + +(plato.getMacronutrientesPlato().proteinas).toFixed(3);
  console.log('Ingredientes: ' +  ingredientes_aux);
  console.log('Composición nutricional: ' + macros_aux);
  console.log('Grupo de alimentos: ' + plato.calculoGrupoPredominante());
  console.log('Precio unitario del plato: ' + +(plato.getPrecio()).toFixed(2));
}

function printMenu(menu: Menu): void {
  console.log('Menu: ' + menu.getNombreMenu() + ' -- Precio: ' + +(menu.getPrecioMenu()).toFixed(2));
  menu.getPlatos().forEach(function(element) {
    console.log('------');
    printPlato(element);
  })
}

//#################################################################################
//INQUIRER
//#################################################################################
export const inquirer = require('inquirer');

enum options{
  Visualizar = "Visualizar la Carta",
  Comanda = "Hacer comanda",
  Salir = "Salir"
}

enum optionsVisualizar{
  Platos = "Visualizar platos",
  Menus = "Visualizar menus",
  Volver = "Volver atras"
}







//Segundo Menu para el caso de  Comandas

  
/*// Funcion principal del menu 
const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise(resolve => process.stdin.once('data', data => {
    const byteArray = [...data]
    if (byteArray.length > 0 && byteArray[0] === 3) {
      console.log('^C')
      process.exit(1)
    }
    process.stdin.setRawMode(false)
    //resolve();
  }))
}*/

export function promptVisualizar(){
 
  inquirer.prompt([{
    type: 'list',
    name: 'eleccionVisualizar',
    Message: 'Que desea ver:',
    choices: Object.values(optionsVisualizar)
  }]).then((respuesta: any) => {
    switch (respuesta["eleccionVisualizar"]) {
      case optionsVisualizar.Platos:
        ComandaRestaurante.carta.getAllPlatosSueltos().forEach((item) => {
          printPlato(item);
        });
        break;
      case optionsVisualizar.Menus:
        ComandaRestaurante.carta.getAllMenus().forEach((item) => {
          printMenu(item);
        });
        break;
      case optionsVisualizar.Volver:
        promptMain();
        break;
    }
      inquirer.prompt({
        type: 'confirm',
        name: 'askAgain',
        message: 'Quieres visualizar otros menus?',
        default: true
      }).then((answers: any) => {
        if(answers.askAgain){
          promptVisualizar();
        } else {
          promptMain();
        }
      }) 
    
  })
}

export function promptMain(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'respuesta',
    message: 'Seleccione una opcion:',
    choices: Object.values(options)
  }).then((answers: any) => {

  switch (answers["respuesta"]) {
    case options.Visualizar:
      //Llamada a un funcion que devuelva la carta del restaurante 
      //let miCarta = new Carta(nombre,todos los menus de la carta, platos sueltos);
      //console.table("Carta -- " + CartaRestauranteLunaRosa.getAllMenus()[0].getPlatos());
      promptVisualizar();
      
      break;
    case options.Comanda:
      //Aqui va la funcion que ejecuta un menu interno que permite modificar o seleccionar un menu personalizado
      ComandaRestaurante.runInquirer();
      break;
    case options.Salir:
      console.log('Gracias por su visita. Buen dia');
      break;
  }

  }) 
}



promptMain();


