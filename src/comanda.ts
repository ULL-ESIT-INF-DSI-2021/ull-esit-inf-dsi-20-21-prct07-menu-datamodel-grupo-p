import { Carta } from "./carta";
import { Plato } from "./plato";
import { Menu } from "./menu";

const inquirer = require('inquirer');

/**
 * Esta es la clase Comanda. 
 */
export class Comanda {
  // Comanda -> [Lo que pide, cantidad de lo que pide]
  private comanda: [Menu|Plato, number][] = [];
  constructor(){}
  
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



inquirer.prompt([{
  type: 'rawlist',
  name: 'accion', 
  message: '¿Qué desea hacer?',
  choices: ['Visualizar carta', 'Hacer comanda', 'Salir'] 
},
{
  type: 'rawlist',
  name: 'tipo_menu',
  message: 'Qué desea pedir?',
  choices: ['Menu de la carta', 'Platos sueltos de la carta', 'Menu personalizado'],
  when: (respuesta) => respuesta == 'Hacer comanda'  /* HAY QUE CORREGIR EL TIPO DE RESPUESTA*/
}])
  .then(respuesta => {
        console.log('Su elección: ', respuesta) /* posible solución(No recomendada): en el tsconfig.json => "noImplicitAny": false*/
  })

  /*Esto no se si esta bien posicionado 
  .catch(error => {
      if(error.isTtyError){
          console.log("No se puede procesar el mensaje en el entorno actual")
      }else{
          console.log("Algún comando esta mal")
        
      }

  })*/