import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento"
import { Grupo } from "./alimento";
import { Plato } from "./plato";
import { Categoria } from "./plato";
import { Menu } from "./menu";
import { Carta } from "./carta";
import { Comanda } from "./comanda";
//import * as inquirer from "./main";
import * as low from "lowdb";
import * as lowdb from 'lowdb';
import * as FileSync from "lowdb/adapters/FileSync";

//Esto enumarara las diferentes opciones del menu principal

//#################################################################################
//LOWDB INTENTO
//#################################################################################

const adapter = new FileSync('bbdd.json')
const bbdd = low(adapter)

type schemaComanda = {
  esquemaComanda: {
    //poner valores de la clase comanda 
    id: number;
    cantidad: number[];
    comanda: (Menu|Plato)[];
    hecho: boolean;
  } [];
}

/*
export class JsonComanda extends Comanda {
  private database: lowdb.LowdbSync<schemaComanda>;
  //this.database = lowdb(new FileSync("Todos.json"));
  constructor(public readonly comandaJson: Carta, numeroComanda: number) {
    super(comandaJson, numeroComanda);
    this.database = (new FileSync('bbdd.json'));
    if(this.database.has('esquemaComanda').value()) {
      let bbddValue =  this.database.get('esquemaComanda').value();
      let numero: number = 0;

      //dbItems.forEach(item => this.itemMap.set(item.id,
      //  new TodoItem(item.id, item.task, item.complete)));
      bbddValue.forEach((elemento) => {
        elemento.comanda.forEach((peticion) => {
          this.itemMap.set(elemento.id, peticion);
        })
      });
      //bbddValue.forEach((elemento) => {
      //  this.itemMap.set(elemento.id, elemento.comanda));
      //});
    } else {
      //this.database.set('esquemaComanda').write();
      //arreglo.forEach(element => this.{
    }
  }
}*/
import * as readline from 'readline';

const inquirer = require('inquirer');

export function promptGestion(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'GestionRespuesta',
    Message: '¿Qué elemento desea gestionar?',
    choices: [ "Carta", "Menú", "Plato", "Ingrediente", "Volver atrás" ]
  }).then((respuesta: any) => {
    switch(respuesta["GestionRespuesta"]){
      case "Carta":
        
        break;
      case "Menú":
        
        break;
      case "Plato":
        break;
      case "Ingrediente":
        console.log('Comanda ')
        this.promptComanda();
        break;
      case "Volver atrás":
        //promptApp();
    }
  })
}

export function promptCarta(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'GestionCarta',
    Message: '¿Qué operación desea realizar?',
    choices: ["Visualizar", "Modificar", "Borrar", "Añadir", "Volver atrás"]
  }).then((respuesta: any) => {
    switch(respuesta["GestionRespuesta"]){
      case "Visualizar":
        
        break;
      case "Modificar":
        
        break;
      case "Borrar":
        
        break;
      case "Añadir":
        
        break;
      case "Volver atrás":
        promptGestion();
    }
  })
}