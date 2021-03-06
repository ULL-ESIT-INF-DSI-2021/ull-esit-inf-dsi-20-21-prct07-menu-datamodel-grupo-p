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
    Message: '??Qu?? elemento desea gestionar?',
    choices: [ "Carta", "Men??", "Plato", "Ingrediente", "Volver atr??s" ]
  }).then((respuesta: any) => {
    switch(respuesta["GestionRespuesta"]){
      case "Carta":
        
        break;
      case "Men??":
        
        break;
      case "Plato":
        break;
      case "Ingrediente":
        console.log('Comanda ')
        this.promptComanda();
        break;
      case "Volver atr??s":
        //promptApp();
    }
  })
}

export function promptCarta(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'GestionCarta',
    Message: '??Qu?? operaci??n desea realizar?',
    choices: ["Visualizar", "Modificar", "Borrar", "A??adir", "Volver atr??s"]
  }).then((respuesta: any) => {
    switch(respuesta["GestionRespuesta"]){
      case "Visualizar":
        
        break;
      case "Modificar":
        
        break;
      case "Borrar":
        
        break;
      case "A??adir":
        
        break;
      case "Volver atr??s":
        promptGestion();
    }
  })
}