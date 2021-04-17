import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento"
import { Grupo } from "./alimento";
import { Plato } from "./plato";
import { Categoria } from "./plato";
import { Menu } from "./menu";
import { Carta } from "./carta";
import { Comanda } from "./comanda";
import * as inquirer from "./main";
import * as low from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";

//import moduleName from '';


//Esto enumarara las diferentes opciones del menu principal

//#################################################################################
//LOWDB
//#################################################################################

const adapter = new FileSync('bbdd.json')
const bbdd = low(adapter)


type schemaComanda = {
  comandas: {
    //poner valores de la clase comanda 
    id: number;
    Menu: string;
    hecho: boolean;

  } [];
}

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
