"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
//import moduleName from '';
//Esto enumarara las diferentes opciones del menu principal
//#################################################################################
//LOWDB
//#################################################################################
const adapter = new FileSync('bbdd.json');
const bbdd = low(adapter);
/*export class JsonComanda extends Comanda {
  //

  private database: lowdb.LowdbSync<schemaComanda>;

  constructor(public readonly comandaJson: Comanda) {
    super(comandaJson);
    this.database = (new FileSync("BBDD.json"));
    if(this.database.has('comanda').value()) {
      let bbddValue =  this.database.get('comanda').value();
      bbddValue.array.forEach((elemento) => {
        
      });
    } else {
      //this.database.set('comanda').write();
      //arreglo.forEach(element => this.{
        
    }
  }
}*/
//---------------------------------------> NO TENGO NI PUTA IDEA DE LOWDB :D  <--------------------------------------------------------------------------------------------------
// TUUUUU  TUUUUU TURUTUUUUUUUUUUUUU    TUUUUUUUUUUUUUU TURUTU TU TU TU TU TURUTURU TUUUUUUUU
//                                        NO MAS TUTORIALES!!!!!!!
