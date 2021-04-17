
import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento"
import { Grupo } from "./alimento";
import { Plato } from "./plato";
import { Categoria } from "./plato";
import { Menu } from "./menu";
import { Carta } from "./carta";
import { Comanda } from "./comanda";


const tomate = new Alimento('Tomate', 1.54, 'Huelva', 22, {carbohidratos: 3.5, proteinas: 1, lipidos: 0.11}, 'HORTALIZAS');
const lechuga = new Alimento('Lechuga', 1.01, 'España', 14, {carbohidratos: 1.4, proteinas: 1.34, lipidos: 0.2}, 'VERDURAS');
const cebolla = new Alimento('Cebolla', 1.4, 'Canarias', 33, {carbohidratos: 7, proteinas: 1.2, lipidos: 0}, 'HORTALIZAS');
const aceiteDeOlivaVirgen = new Alimento('Aceite de oliva virgen', 5.99, 'Jeréz', 899, {carbohidratos: 0, proteinas: 0, lipidos: 99.9}, 'PROCESADOS');
const ensalada = new Plato('Ensalada', [[tomate, 70], [lechuga, 50], [cebolla, 10], [aceiteDeOlivaVirgen, 5]], 'ENTRANTE');

const arroz = new Alimento('Arroz blanco', 1.5, 'China', 381, {carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES');
const huevo = new Alimento('Huevo', 0.45, 'América', 390, {carbohidratos: 90, proteinas: 20, lipidos: 15}, 'HUEVOS');
const platano = new Alimento ('Plátano', 0.5, 'Sudamerica', 220, {carbohidratos: 56, proteinas: 2, lipidos: 0.2}, 'FRUTAS');
const arrozCubana = new Plato('Arroz a la cubana', [[arroz, 250], [huevo, 150], [platano, 120]], 'SEGUNDO');

const papasArrugadas = new Alimento('Papa', 1, 'Canarias', 105, {carbohidratos: 22.8, proteinas: 2.3, lipidos: 0.1}, 'HORTALIZAS');
const cilantro = new Alimento('Cilantro', 1.3, 'Canarias', 57, {carbohidratos: 8, proteinas: 3.3, lipidos: 0.7}, 'VERDURAS');
const papasConMojo = new Plato('Papas con mojo de cilantro', [[papasArrugadas, 200], [cilantro, 50]], 'PRIMERO');

const chorizo = new Alimento('Chorizo', 11, 'Portuano', 285, {carbohidratos: 2, proteinas: 22, lipidos: 21}, 'CARNES');
const lentejas = new Alimento('Lentejas cocidas', 1.49, 'España', 103, {carbohidratos: 12.5, proteinas: 8.2, lipidos: 0.5}, 'LEGUMBRES');
const potajeDeLentejas = new Plato('Potaje de lentejas', [[lentejas, 50], [papasArrugadas, 30], [chorizo, 10], [cilantro, 5]], 'PRIMERO');

const MenuDelDia = new Menu('Menú del día', ensalada, potajeDeLentejas, arrozCubana);

// -----------------

const lecheDeCoco = new Alimento('Leche de coco', 5.24, 'Tailandia', 241, {carbohidratos: 3.3, proteinas: 2.3, lipidos: 23.8}, 'FRUTAS');
const curryDeLentejas = new Plato('Curry de lentejas vegetariano', [[lentejas, 40], [papasArrugadas, 40], [arroz, 70], [lecheDeCoco, 100]], 'SEGUNDO');

const MenuVegetariano = new Menu('Menú Vegetariano', ensalada, papasConMojo, curryDeLentejas);

const azúcarBlanco = new Alimento('Azúcar blanca', 0.89, 'Canarias', 398, {carbohidratos: 99.5, proteinas: 0, lipidos: 0}, 'PROCESADOS');
const leche = new Alimento('Leche entera', 0.79, 'Asturias', 63, {carbohidratos: 4.7, proteinas: 3.1, lipidos: 3.5}, 'LACTEOS');
const lecheCondensada = new Alimento('Leche Condensada Entera', 3.09, 'Madriz', 343, {carbohidratos: 26, proteinas: 8.8, lipidos: 9.3}, 'LACTEOS');
const quesillo = new Plato('Quesillo', [[huevo, 50], [azúcarBlanco, 150], [leche, 370], [lecheCondensada, 370]], 'POSTRE');

const CartaRestauranteLunaRosa = new Carta('Carta Restaurante Moderna', [MenuDelDia, MenuVegetariano], [quesillo]);
const ComandaRestaurante = new Comanda(CartaRestauranteLunaRosa);

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
  console.log('Menu: ' + menu.getNombreMenu() + ' -- Precio: ' + menu.getPrecioMenu());
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

// Hacemos otro enum para el segundo menu
enum SecondOption{
  ElegirMenu = "Elegir una comanda del menu",
  CrearMenu = "Crear un menú personalizado en base a la carta",
  ModificarMenu = "Modificar uno de los menus",
  FinalizarComanda = "Finalizar la comanda"
}

//Segundo Menu para el caso de  Comandas
export function promptSecond(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'SegundaRespuesta',
    Message: '¿Qué desea hacer ahora?',
    choices: Object.values(SecondOption)
  }).then((respuesta: any) => {
    switch(respuesta["SegundaRespuesta"]){
      case SecondOption.ElegirMenu:
        break;
      case SecondOption.CrearMenu:
        break;
      case SecondOption.ModificarMenu:
        break;
    }
  })
}
  
// Funcion principal del menu 
export function promptComanda(){
  console.clear();
  //seria necesario el async si quisieramos ejecutar algo aqui a parte como la visualizacion de algo
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
      printMenu(CartaRestauranteLunaRosa.getAllMenus()[0]);
      break;
    case options.Comanda:
      //Aqui va la funcion que ejecuta un menu interno que permite modificar o seleccionar un menu personalizado
      promptSecond();
      break;
    case options.Salir:
      //salimos
      break;
  }
  
  })
}


promptComanda();