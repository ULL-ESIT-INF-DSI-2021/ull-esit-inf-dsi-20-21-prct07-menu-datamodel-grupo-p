import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento"
import { Grupo } from "./alimento";
import { Plato } from "./plato";
import { Categoria } from "./plato";
import { Menu } from "./menu";
import { Carta } from "./carta";
import { Comanda } from "./comanda";
//import * as inquirer from 'inquirer';
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
import moduleName from '';


//Esto enumarara las diferentes opciones del menu principal

//#################################################################################
//LOWDB
//#################################################################################
export class JsonComanda extends Comanda {
    //
    constructor(public readonly carta: Carta){
      super(carta);
    }
}



//#################################################################################
//INQUIRER
//#################################################################################
const inquirer = require('inquirer');


enum options{
  Visualizar = "Visualizar la Carta",
  Comanda = "Hacer comanda",
  Salir = "Salir"
}

// Hacemos otro enum para el segundo menu
enum SecondOption{
  ElegirMenu = "Elegir una comanda del menu",
  CrearMenu = "Crear un menú personalizado en base a la carta",
  ModificarMenu = "Modificar uno de los menus "
}

//Segundo Menu para el caso de  Comandas
function promptSecond(){
  console.clear();
  const respuesta = inquirer.prompt({
    type: 'list',
    name: 'SegundaRespuesta',
    Message: '¿Qué desea hacer ahora?',
    choices: Object.values(SecondOption)
  });
  switch(respuesta["SegundaRespuesta"]){
    case SecondOption.ElegirMenu:
      break;
    case SecondOption.CrearMenu:
      break;
    case SecondOption.ModificarMenu:
      break;
  }
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
      promptSecond();
      break;
    case options.Salir:
      //salimos
      break;
  }
}