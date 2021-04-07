import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento"
import { Grupo } from "./alimento";
import { Plato } from "./plato";
import { Categoria } from "./plato";
import { Menu } from "./menu";
import { Carta } from "./carta";
import * as inquirer from 'inquirer';
import * as lowdb from 'lowdb';



// HAY QUE REVISAR BIEN ESTO PARA IMPLEMENTARLO

//type schemaType = {};

/***
 * Esta es la clase Database
 */
//export class Database extends Carta {};


enum options{
    Visualizar = "Visualizar la Carta",
    Modificar = "Hacer comanda",
    Salir = "Salir"
}



function prompUser(){
    console.clear();

    const answers = await inquirer.prompt({
        type: 'list',
        name: 'menu_principal',
        message: 'Seleccione una opcion:',
        choices: Object.values(options)
    });
    
    switch(answers["menu_principal"]){
        case options.Visualizar:
        // Función para ver qué quiere visualizar
        break;

        case options.Modificar:
        // Función para modificar, añadir o borrar un objeto
        break;

        case options.Salir:
        break;

        default:
            console.log("Selección Incorrecta");
        break;

    }
}

.then(respuesta => {
  console.log('Su elección: ', respuesta)  /* posible solución(No recomendada): en el tsconfig.json => "noImplicitAny": false*/
})