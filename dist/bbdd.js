"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
// HAY QUE REVISAR BIEN ESTO PARA IMPLEMENTARLO
//type schemaType = {};
/***
 * Esta es la clase Database
 */
//export class Database extends Carta {};
var options;
(function (options) {
    options["Visualizar"] = "Visualizar la Carta";
    options["Modificar"] = "Hacer comanda";
    options["Salir"] = "Salir";
})(options || (options = {}));
function prompUser() {
    console.clear();
    const answers = await inquirer.prompt({
        type: 'list',
        name: 'menu_principal',
        message: 'Seleccione una opcion:',
        choices: Object.values(options)
    });
    switch (answers["menu_principal"]) {
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
then(respuesta => {
    console.log('Su elección: ', respuesta); /* posible solución(No recomendada): en el tsconfig.json => "noImplicitAny": false*/
});
