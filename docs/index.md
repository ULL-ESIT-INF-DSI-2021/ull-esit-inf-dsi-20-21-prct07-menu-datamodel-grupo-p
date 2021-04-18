

# DESARROLLO DE SISTEMAS INFORMÁTICOS

<br/><br/>

## Práctica 7 - Modelo de datos de un sistema que permite el diseño de menús.

<br/><br/>

### Hecho por:  
  * Óscar Cigala Álvarez - alu0101038230@ull.edu.es
  * Óscar Ignacio Pozo Fernandez - alu0101036526@ull.edu.es
  * Eduardo Da Silva Yanes - alu0101104911@ull.edu.es
  * Joel Francisco Escobar Socas - alu0101130408@ull.edu.es
  * Andrés Concepción Afonso - alu0100600216@ull.edu.es

<br/><br/>

### Índice:

1. [Introducción y objetivos.](#id1)
2. [Ejercicio.](#id2)
      2.1. [Clase Alimentos.](#id21)

      2.2. [Clase Platos.](#id22)

      2.3. [Clase Menú.](#id23)
      
      2.4. [Clase Carta.](#id24)

      2.5. [Clase Comanda.](#id25)

      2.6. [Fichero Main.](#id26)

      2.7 [Fichero Stock.](#id27)
4. [Dificultades.](#id3)
5. [Conclusión.](#id4)
6. [Referencias.](#id5)

<br/><br/>

## 1. Introducción y objetivos. <a name="id1"></a>

En esta práctica resolvemos en grupo un diseño e implementación de un sistema de información en formato de Menú. El objetivo es crear las diferentes clases/objetos para tener una estructura que contemple desde los Alimentos hasta la Comanda de un restaurante, permitiendo a un supuesto cliente el realizar la comanda que desee. 
Otra parte importante del desarrollo es crear una base de datos usando los módulos **Inquirer.js** y **Lowdb**.

<br/><br/>

## 2. Ejercicio. <a name="id2"></a>
### 2.1. Clase Alimento. <a name="id21"></a>
Lo primero y más claro de implementar para esta práctica es la clase `Alimento`. Su cometido es tener los datos más importantes de los elementos que forman los diferentes platos. Algunos de estos datos son: el precio, origen, calorías, grupo, etc.

Para comenzar, lo primero que nos encontramos son dos tipos de datos: `Macronutrientes` y `Grupo`, el primero de ellos sirve para describir con mayor exactitud la composición nutricional de los alimentos (carbohidratos, proteínas y lípidos). Mientras que el segundo describe el grupo de alimentos al que pertenece (carnes, pescados, huevos...).

```typescript
export type Macronutrientes = {
  carbohidratos: number,
  proteinas: number,
  lipidos: number
}

export type Grupo = 'CARNES' | 'PESCADOS' | 'HUEVOS' | 'TOFU' | 'FRUTOS_SECOS' | 'SEMILLAS' | 'LEGUMBRES' |
'VERDURAS' | 'HORTALIZAS' | 'LACTEOS' | 'CEREALES' | 'FRUTAS' | 'PROCESADOS';
```

A continuación, nos encontramos con la clase `Alimento`, el constructor recibe 6 parámetros: `nombreAlimento` (el nombre del alimento en cuestión), `precio` (el precio del alimento), `origen` (localización de origen del alimento), `calorias` (kilocalorías por 100 gramos de dicho alimento), `macros` (los macronutrientes que posee el alimento por cada 100 gr) y `grupo` (grupo de alimentos al que pertenece el alimento).

Para terminar, nos encontramos con 6 `getters`, uno por cada parámetro del constructor para poder retornar su valor.

```typescript
export class Alimento {
  constructor(private nombreAlimento: string, private precio: number, private origen: string,
  private calorias: number, private macros: Macronutrientes, private grupo: Grupo) {}
  getNombreAlimento() {
    return this.nombreAlimento;
  }
  getPrecio() {
    return this.precio;
  }
  getOrigen() {
    return this.origen;
  }
  getCalorias() {
    return this.calorias;
  }
  getMacronutrientes() {
    return this.macros;
  }
  getGrupo() {
    return this.grupo;
  }
}
```

Lo último que faltar por comentar en la clase son los **tests**. El objetivo es comprobar que todas las funciones de la clase realizan correctamente su cometido. Para este caso es muy sencillo pues todas son *getters*.

```typescript
import 'mocha';
import {expect} from 'chai';
import {Alimento} from '../src/alimento';
describe('Test clase Alimento', () => {
  describe('Es posible instanciar un alimento', () => {
    const arroz = new Alimento('Arroz blanco', 1.5, 'China', 381, {carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES');   
    it('Instancia del alimento', () => {
      expect(arroz).to.exist;
    });
    it('Instancia del alimento no es nula', () => {
      expect(new Alimento('Arroz blanco', 1.5, 'China', 381, {carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES')).not.null;
    });
    it('Los métodos getter devuelven los valores esperados', () => {
      expect(arroz.getNombreAlimento()).to.be.equal('Arroz blanco');
      expect(arroz.getPrecio()).to.be.equal(1.5);
      expect(arroz.getOrigen()).to.be.equal('China');
      expect(arroz.getCalorias()).to.be.equal(381);
      expect(arroz.getMacronutrientes()).to.eql({carbohidratos: 86, proteinas: 7, lipidos: 0.9});
      expect(arroz.getGrupo()).to.be.equal('CEREALES');  
    });
  });
});
```

<br/><br/>

### 2.2. Clase Platos. <a name="id22"></a>
La clase `Plato` es la siguiente en la jerarquía de nuestro diseño. Los platos de un menú estarán compuestos por alimentos y/o ingredientes como los definidos anteriormente.

Lo primero que nos encontramos en este fichero es el tipo de datos `Categoría`, el cual especifica que un plato solamente puede ser o un entrante o un primero o un segundo o un postre.

```typescript
export type Categoria = 'ENTRANTE' | 'PRIMERO' | 'SEGUNDO' | 'POSTRE';
```

El constructor de `Plato` recibe 3 parámetros: `nombrePlato`, el nombre que se le ha puesto al plato, `alimentos` los alimentos que posee dicho plato y la cantidad en gramos que hay, es por ello que este parámetro es un array de pares [alimento, cantidad] y por último, `categoria` siendo esta la categoría a la que pertenece el plato. Además, el constructor da valor a 2 atributos: `macronutrientes_plato` y `precio`, los cuales serán explicados más abajo cuando lleguemos a los métodos correspondientes. 

```typescript
export class Plato {
  private precio: number = 0;
  private macronutrientes_plato: Macronutrientes;
  constructor(private nombrePlato: string, private alimentos: [Alimento, number][],
    private categoria: Categoria) {
      this.macronutrientes_plato = this.calculoMacronutrientes();
      this.precio = this.calculoPrecio();
  }
  getNombrePlato() {
    return this.nombrePlato;
  }
  getAlimentos() {
    return this.alimentos;
  }
  getCategoria() {
    return this.categoria;
  }
  getMacronutrientesPlato() {
    return this.macronutrientes_plato;
  }
  getPrecio() {
    return this.precio;
  }
}
```

La clase no solamente almacena y puede devolver los datos que recibe al instanciarse, también tiene unas funciones de *cálculo*: `calculoMacronutrientes()`, `calculoPrecio()` y `calculoGrupoPredominante()`, las cuales devuelven cada una un nuevo valor relevante para un `Plato`, obtenido a partir de los datos diferentes datos de alimentos.

El primer método que nos encontramos en esta clase es `calculoMacronutrientes()` el cual realiza el cálculo de los macronutrientes del plato en base a la cantidad de cada alimento. Simplemente es un `forEach()` el cual posee 3 sumatorios (uno para cada macronutriente) donde realizamos el cálculo.

```typescript
calculoMacronutrientes() {
  let resultado: Macronutrientes = {carbohidratos: 0, proteinas: 0, lipidos: 0};
  this.alimentos.forEach((elemento) => {
    resultado.carbohidratos += (elemento[0].getMacronutrientes().carbohidratos * elemento[1]) / 100;
    resultado.lipidos += (elemento[0].getMacronutrientes().lipidos * elemento[1]) / 100;
    resultado.proteinas += (elemento[0].getMacronutrientes().proteinas * elemento[1]) / 100;
  });
  return resultado;
}
```

El segundo método que vemos es `calculoPrecio()` el cual calcula el precio en función a la cantidad utilizada de cada alimento (con el precio justo al por mayor). También posee un `forEach()` con un sumatorio para ir almacenando la suma de todos los precios de los platos después de aplicarle una operación. Para darle un resultado más a tono con el mundo real, al precio final del plato le sumamos 3 euros de beneficio, en caso contrario tendría un precio demasiado bajo.

```typescript
calculoPrecio(): number {
  let sumatorio: number = 0;
  this.alimentos.forEach((elemento) => {
    const precio = elemento[0].getPrecio();
    const precioGramo = (precio / 1000) * elemento[1];
    sumatorio += precioGramo;
  })
  return sumatorio + 3;
}
```

Por último, está el método `calculoGrupoPredominante()`, que es el encargado de calcular el grupo de alimentos predominante, es decir, el grupo de alimentos que más aparece entre los ingredientes del plato. Para hacer este cálculo, declaramos la variable `contadorAlimentos`, el cual es un array de 12 valores inicializados a 0 (uno para cada grupo de alimentos). A continuación, creamos un `switch` donde cada `case` será un grupo. Si el grupo del alimento es igual a alguno del `switch`, se sumará en una unidad ese grupo. Para finalizar, recorremos todos los grupos con un `for()` y almacenamos en la variable `mayorCoincidencias` el que se repita más veces, si varios coinciden en ser los que más tienen, devolverá el que esté antes en la lista.

```typescript
calculoGrupoPredominante() {
  this.alimentos.forEach((elemento) => {
    const grupo = elemento[0].getGrupo();
    let contadorAlimentos: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    switch (grupo) {
      case 'CARNES':
        contadorAlimentos[0]++;
        if (contadorAlimentos[0] >= this.alimentos.length / 2)
          return 'CARNES';
        break;
      case 'PESCADOS':
          contadorAlimentos[1]++;
          if (contadorAlimentos[1] >= this.alimentos.length / 2)
            return 'PESCADOS';
          break;
        /**
         * ...demás cases. 
         */
    }
  });
  let mayorCoincidencias = contadorAlimentos[this.alimentos[0].indexOf(this.alimentos[0][0])];
  let posicion = this.alimentos[0].indexOf(this.alimentos[0][0]);
  for (let i = 0; i < posicion; i++) {  // Bucle antes del grupo del primer alimento.
    if (contadorAlimentos[i] > mayorCoincidencias) {
      mayorCoincidencias = contadorAlimentos[i];
      posicion = i;
    }
  }
  for (let i = posicion; i < contadorAlimentos.length; i++) { // Bucle después del grupo del primer alimento.
    if (contadorAlimentos[i] > mayorCoincidencias) {
      mayorCoincidencias = contadorAlimentos[i];
      posicion = i;
    }
  }
  let arrayGrupos: string[] = ['CARNES', 'PESCADOS', 'HUEVOS', 'TOFU', 'FRUTOS_SECOS', 'SEMILLAS', 'LEGUMBRES', 'VERDURAS', 'HORTALIZAS', 'LACTEOS', 'CEREALES', 'FRUTAS', 'PROCESADOS'];
  return arrayGrupos[posicion];
}
```

Otras funciones que contiene la clase son las que permiten añadir y eliminar `Alimento` al plato. La primera simplemente recibe un objeto `Alimento` y lo añade al array. La segunda recibe el objeto y un número, y lo elimina en esa cantidad si lo encuentra en el array.

```typescript
addNuevoAlimento(nuevoAlimento: Alimento, cantidadAlimento: number) {
  this.alimentos.push([nuevoAlimento, cantidadAlimento]);
}

deleteAlimento(alimento: Alimento, cantidadAlimento: number): void {
  let pos: number = -1;
  let index = this.alimentos.indexOf([alimento, cantidadAlimento]);
  if (index == - 1) {
    console.log('El plato no se encuentra en el menu. Lo sentimos');
  } else {
    this.alimentos.splice(index, 1);
  }
}
```

Los tests que hemos realizado sobre la clase se encuentran a continuación. Todos son muy sencillos porque son *getters*, y realmente nos sirven para comprobar que podemos obtener bien los datos esperados.  

```typescript
import 'mocha';
import {expect} from 'chai';
import {Alimento} from '../src/alimento'
import {Plato} from '../src/plato';
describe('Test clase Plato', () => {
  describe('Es posible instanciar un plato', () => {
    const arroz = new Alimento('Arroz blanco', 1.5, 'China', 381, {carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES');
    const huevo = new Alimento('Huevo', 0.45, 'América', 390, {carbohidratos: 90, proteinas: 20, lipidos: 15}, 'HUEVOS');
    const platano = new Alimento ('Plátano', 0.5, 'Sudamerica', 220, {carbohidratos: 56, proteinas: 2, lipidos: 0.2}, 'FRUTAS');
    const arrozCubana = new Plato('Arroz a la cubana', [[arroz, 250], [huevo, 150], [platano, 120]], 'SEGUNDO');

    it('Instancia del plato', () => {
      expect(arrozCubana).to.exist;
    });
    it('Instancia del plato no es nula', () => {
      expect(new Plato('Arroz a la cubana', [[arroz, 250], [huevo, 150], [platano, 120]], 'SEGUNDO')).not.null;
    });
    it('Los métodos getter devuelven los valores esperados', () => {
      expect(arrozCubana.getNombrePlato()).to.be.equal('Arroz a la cubana');
      expect(arrozCubana.getPrecio()).to.be.equal(0.5025);
      expect(arrozCubana.getCategoria()).to.be.equal('SEGUNDO');
      expect(arrozCubana.getAlimentos()).to.eql([[arroz, 250], [huevo, 150], [platano, 120]]); 
      expect(arrozCubana.getMacronutrientesPlato()).to.eql({carbohidratos: 417.2, proteinas: 49.9, lipidos: 24.99});
    });
  });
});
```

<br/><br/>

### 2.3. Clase Menu. <a name="id23"></a>

Nuestro planteamiento es el siguiente: un Menú cualquiera debe estar formado por, como mínimo, 3 `Platos` de diferente categoría. Es por esto, que en el constructor de la clase se realiza una comprobación de la `categoría` de cada Plato, y si no son 3 diferentes como mínimo, devolvemos un error. Además, el constructor recibe 3 parámetros: `nombreMenu` es el nombre del menú en cuestión, `primerPlato` es el primer plato del menú y `demasPlatos` es un parámetro de tipo `rest` que almacena el resto de platos.

```typescript
export class Menu {
  private precio: number = 0;
  private arrayPlatos: Plato[] = [];
  constructor(private nombreMenu: string, private primerPlato: Plato, ...demasPlatos: Plato[]) {
    this.arrayPlatos.push(primerPlato);
    demasPlatos.forEach((element) => {
      this.arrayPlatos.push(element);
    });

    let existeElemento: number[] = [0, 0, 0, 0];
    let grupoElemento: Categoria;
    this.arrayPlatos.forEach((elemento) => {
      grupoElemento = elemento.getCategoria();
      if (grupoElemento === 'ENTRANTE') {
        existeElemento[0] = 1;
      } else if (grupoElemento === 'PRIMERO') {
        existeElemento[1] = 1;
      } else if (grupoElemento === 'SEGUNDO') {
        existeElemento[2] = 1;
      } else if (grupoElemento === 'POSTRE') {
        existeElemento[3] = 1;
      }
    });
    const counts = existeElemento[0] + existeElemento[1] + existeElemento[2] + existeElemento[3];
    if (counts < 3) {
      throw new Error("Los menús deben tener 3 categorías de platos como mínimo.");
    }
  }
  getNombreMenu() {
    return this.nombreMenu;
  }
  getPlatos(){
    return this.arrayPlatos;
  }
}
```

En sí, la clase no es nada compleja: almacena unos datos muy cotidianos en un formato intuitivo. Su única parte un poco compleja son las funciones `getComposicionNutricional()`, `getGruposAlimentos()` y `getPrecioMenu()`. 
- La primera recoge la cantidad de **carbohidratos, proteínas y lípidos** de cada uno de los `Platos` del `Menu` y devuelve el sumatorio de estos macronutrientes.
- La segunda analiza el `Grupo` de entre todos los `Alimentos` de cada `Plato` y se queda con el mayoritario. 
- La tercera recoge el **precio** de cada `Plato` del `Menu` y realiza una suma total para calcular el precio del menú. Para esta función pensamos en realizar un pequeño ajuste en el precio para simular el precio real de un menú en cualquier restaurante, sumando/restando un porcentaje extra de beneficio. Sin embargo, no estábamos muy seguros/de acuerdo de qué poner, así que lo dejamos como tal: un sumatorio de los precios netos de los platos.

```typescript
getComposicionNutricional() {
  let composicionNutricional: Macronutrientes = {carbohidratos: 0, proteinas: 0, lipidos: 0};
  this.arrayPlatos.forEach((elemento) => {
    composicionNutricional.carbohidratos += elemento.calculoMacronutrientes().carbohidratos;
    composicionNutricional.proteinas += elemento.calculoMacronutrientes().proteinas;
    composicionNutricional.lipidos += elemento.calculoMacronutrientes().lipidos;
  });
  return composicionNutricional;
}

getGruposAlimentos(): Grupo[] {
  let arrayGruposAlimentos: Grupo[] = [];
  let platosGrupo: [Alimento, number][] = [];
  this.arrayPlatos.forEach((cadaPlato) => {
    cadaPlato.getAlimentos().forEach((cadaAlimento) => {
      arrayGruposAlimentos.push(cadaAlimento[0].getGrupo());
    });;
  });
  const arrayFinal: Grupo[] = arrayGruposAlimentos.filter((n, i) => arrayGruposAlimentos.indexOf(n) === i);
  return arrayFinal;
}
  
getPrecioMenu(): number {
  let precioTotal: number = 0;
  this.arrayPlatos.forEach((element) => {
    precioTotal += element.getPrecio();
  });
  return precioTotal;
}
```

Las últimas funciones de la clase son `addNuevoPlato()` y `deletePlato()`. El primero simplemente añade el objeto `Plato` que se le otorgue al array de platos. El segundo recibe el objeto a eliminar del array, si lo encuentra.

```typescript
addNuevoPlato(plato: Plato): void {
  this.arrayPlatos.push(plato);
}

deletePlato(plato: Plato): void {
  let pos: number = -1;
  let index = this.arrayPlatos.indexOf(plato);
  if(index == -1) {
    console.log('El plato no se encuentra en el menu. Lo sentimos');
  } else {
    this.arrayPlatos.splice(index, 1);
  }
}
```

Aquí tenemos los tests de la clase. Creamos diferentes platos para instanciarlos en un objeto `Menu`. De este, todas las comprobaciones son sencillas pues son *getters* y lo único a tener en cuenta son los cálculos matemáticos de algunas funciones.

```typescript
import 'mocha';
import {expect} from 'chai';
import {Menu} from '../src/menu';
import { Alimento } from "../src/alimento";
import { Plato } from "../src/plato";

describe('Test clase Menú', () => {
      const arroz = new Alimento('Arroz blanco', 1.5, 'China', 381, {carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES');
      const huevo = new Alimento('Huevo', 0.45, 'América', 390, {carbohidratos: 90, proteinas: 20, lipidos: 15}, 'HUEVOS');
      const platano = new Alimento ('Plátano', 0.5, 'Sudamerica', 220, {carbohidratos: 56, proteinas: 2, lipidos: 0.2}, 'FRUTAS');
  const arrozCubana = new Plato('Arroz a la cubana', [[arroz, 250], [huevo, 150], [platano, 120]], 'SEGUNDO');
      const papasArrugadas = new Alimento('Papa', 1, 'Canarias', 105, {carbohidratos: 22.8, proteinas: 2.3, lipidos: 0.1}, 'HORTALIZAS');
      const cilantro = new Alimento('Cilantro', 1.3, 'Canarias', 57, {carbohidratos: 8, proteinas: 3.3, lipidos: 0.7}, 'VERDURAS');
  const papasConMojo = new Plato('Papas con mojo de cilantro', [[papasArrugadas, 200], [cilantro, 50]], 'ENTRANTE');
      const chorizo = new Alimento('Chorizo', 11, 'Asturias', 285, {carbohidratos: 2, proteinas: 22, lipidos: 21}, 'CARNES');
      const lentejas = new Alimento('Lentejas cocidas', 1.49, 'España', 103, {carbohidratos: 12.5, proteinas: 8.2, lipidos: 0.5}, 'LEGUMBRES');
  const potajeDeLentejas = new Plato('Potaje de lentejas', [[lentejas, 50], [papasArrugadas, 30], [chorizo, 10], [cilantro, 5]], 'PRIMERO');
  describe('Es posible instanciar un menú', () => {
    const MenuDelDia = new Menu('Menú del día', papasConMojo, potajeDeLentejas, arrozCubana);
    it('Instancia del Menú', () => {
      expect(MenuDelDia).to.exist;
    });
    it('Instancia del Menú no es nula', () => {
      expect(new Menu('Menú del día', papasConMojo, potajeDeLentejas, arrozCubana)).not.null;
    });
    it('Los métodos getter devuelven los valores esperados.', () => {
      expect(MenuDelDia.getNombreMenu()).to.be.equal('Menú del día');
      expect(MenuDelDia.getPlatos()).to.have.have.members([papasConMojo, potajeDeLentejas, arrozCubana]);
      expect(MenuDelDia.getComposicionNutricional().carbohidratos).to.be.at.least(100);
      expect(MenuDelDia.getComposicionNutricional().proteinas).to.be.at.least(50);
      expect(MenuDelDia.getComposicionNutricional().lipidos).to.be.at.least(10);
      expect(MenuDelDia.getGruposAlimentos()).to.have.same.members(['HORTALIZAS', 'VERDURAS', 'LEGUMBRES', 'CARNES', 'CEREALES', 'HUEVOS', 'FRUTAS']);
      expect(MenuDelDia.getPrecioMenu()).to.be.at.least(0.5)
    });
  });
});
```

<br/><br/>

### 2.4. Clase Carta. <a name="id24"></a>

La siguiente clase en la jerarquía es `Carta`. El propósito que le hemos dado es la de ser un almacén de los diferentes `Platos` y/o `Menu` que el cliente puede pedir. Es por esto que en el Constructor recibimos: el **nombre** de la Carta (puede ser un identificador del Restaurante, por ejemplo), un **array de los Menús** y un **array de los platos sueltos** que ofrece.

La clase tiene un par de métodos más complejos un poco después, pero primero comentar los métodos más sencillo de la misma: los *getters*. 
- `getNombreCarta()`, `getAllMenus()` y `getAllPlatosSueltos()` hacen lo que indica su nombre: devuelve el nombre de la carta, todos los Menús y/o todos los Platos.
- `getCarta()` devuelve todos los Menús y todos los Platos, y lo hace llamando al *getter* específico de cada uno.
- `nuevoMenu()` es una función que nos permite añadir nuevos `Menu` al almacén de elementos que es `Carta`.

```typescript
export class Carta {
  private arrayMenu: Menu[] = [];
  private arrayPlatosSueltos: Plato[] = [];
  constructor(private nombreCarta: string, arrayMenu: Menu[], arrayPlatosSueltos: Plato[]) {
    this.arrayMenu = arrayMenu;
    this.arrayPlatosSueltos = arrayPlatosSueltos; // si no, se queja que no existe
  }
  nuevoMenu(nombre: string, plato1: Plato, ...platos: Plato[]) {
    let nuevoMenu = new Menu(nombre, plato1, ...platos);
    this.arrayMenu.push(nuevoMenu);
  }
  getNombreCarta(): string {
    return this.nombreCarta;
  }
  getAllMenus(): Menu[] {
    return this.arrayMenu;
  }
  getAllPlatosSueltos(): Plato[] {
    return this.arrayPlatosSueltos;
  }
  getCarta() {
    let arrayCarta: (Menu|Plato)[] = [];
    arrayCarta.push(...this.getAllMenus(), ...this.getAllPlatosSueltos());
    return arrayCarta;
  }
}
```

Las funciones más complejas de la clase son las funciones `search`. Su cometido es realizar una búsqueda más o menos específica entre los Menús y/o Platos.
- `searchMenu()` recibe una subcadena que busca en el **nombre** de todos los Menús. Devuelve el objeto `Menu` de todos los que cumplan.
- `searchPlato()` también recibe una subcadena que busca en el **nombre** de todos los Platos y devuelve un array con todas las coincidencias.
- `searchEnGeneral()` lo que hace es llamar a las dos funciones anteriores, pasando la subcadena a buscar. Al final recibe todas las coincidencias, ya sean Menús y/o Platos, y las devuelve.

```typescript
searchMenu(nombreMenu: string): Menu[] {
  const arrayMatchedMenu: Menu[] = [];
  this.arrayMenu.forEach((element) => {
    if (element.getNombreMenu().search(nombreMenu) > -1) {
      arrayMatchedMenu.push(element);
    }
  });
  return arrayMatchedMenu;
}
  
searchPlato(nombrePlato: string): Plato[] {
  const arrayMatchedPlatos: Plato[] = [];
  this.arrayPlatosSueltos.forEach((platoSuelto) => {
    if (platoSuelto.getNombrePlato().search(nombrePlato) > -1) {
      arrayMatchedPlatos.push(platoSuelto);
    }
  });
  this.arrayMenu.forEach((cadaMenu) => {
    cadaMenu.getPlatos().forEach((platoDelMenu) => {
      if (platoDelMenu.getNombrePlato().search(nombrePlato) > -1) {
        arrayMatchedPlatos.push(platoDelMenu);
      }
    });
  });
  return arrayMatchedPlatos;
}

searchEnGeneral(nombre: string): (Menu|Plato)[] {
  const arrayMatched: (Menu|Plato)[] = [];
  arrayMatched.push(...this.searchMenu(nombre));
  arrayMatched.push(...this.searchPlato(nombre));
  return arrayMatched;
}
```

Hemos realizado los siguientes tests sobre la clase `Carta`. Primero hemos comprobado que los *getters* devuelve los valores esperados, ya sea el nombre o un array de objetos. 

La segunda parte consisten en comprobar que se pueden añadir nuevos elementos a la Carta. Para ello, comprobamos la longitud del array que devuelve el método `getAllMenu()` antes y después de añadir algo. Por último, comprobamos los métodos `search`, y que devuelvan correctamente los array de objetos esperados.

```typescript
import 'mocha';
import { expect } from 'chai';
import { Alimento } from '../src/alimento';
import { Plato } from '../src/plato';
import { Menu } from '../src/menu';
import { Carta } from '../src/carta';
describe('Test clase Carta', () => {
  const tomate = new Alimento('Tomate', 1.54, 'Huelva', 22, {carbohidratos: 3.5, proteinas: 1, lipidos: 0.11}, 'HORTALIZAS');
  /**
   * Resto de alimentos instanciados
   */ 
    const ensalada = new Plato('Ensalada', [[tomate, 70], [lechuga, 50], [cebolla, 10], [aceiteDeOlivaVirgen, 5]], 'ENTRANTE');
    const potajeDeLentejas = new Plato('Potaje de lentejas', [[lentejas, 50], [papasArrugadas, 30], [chorizo, 10], [cilantro, 5]], 'PRIMERO');
    const arrozCubana = new Plato('Arroz a la cubana', [[arroz, 250], [huevo, 150], [platano, 120]], 'SEGUNDO');
    const papasConMojo = new Plato('Papas con mojo de cilantro', [[papasArrugadas, 200], [cilantro, 50]], 'PRIMERO');
    const curryDeLentejas = new Plato('Curry de lentejas vegetariano', [[lentejas, 40], [papasArrugadas, 40], [arroz, 70], [lecheDeCoco, 100]], 'SEGUNDO');
  const MenuDelDia = new Menu('Menú del día', ensalada, potajeDeLentejas, arrozCubana);
  const MenuVegetariano = new Menu('Menú Vegetariano', ensalada, papasConMojo, curryDeLentejas);
  const quesillo = new Plato('Quesillo', [[huevo, 50], [azúcarBlanco, 150], [leche, 370], [lecheCondensada, 370]], 'POSTRE');
  
  const CartaRestauranteModerna = new Carta('Carta Restaurante Moderna', [MenuDelDia, MenuVegetariano], [quesillo]);
  describe('Es posible instanciar una Carta', () => {
    it('Instancia de la Carta.', () => {
      expect(CartaRestauranteModerna).to.exist;
    });
    it('Instancia de Carta no es nula.', () => {
      expect(new Carta('Carta Restaurante Moderna', [MenuDelDia, MenuVegetariano], [quesillo])).not.null;
    });
    it('Los métodos getter devuelven los valores esperados.', () => {
      expect(CartaRestauranteModerna.getNombreCarta()).to.eql('Carta Restaurante Moderna');
      expect(CartaRestauranteModerna.getAllMenus()).to.eql([MenuDelDia, MenuVegetariano]);
      expect(CartaRestauranteModerna.getAllPlatosSueltos()).to.eql([quesillo]);
      expect(CartaRestauranteModerna.getCarta()).to.eql([MenuDelDia, MenuVegetariano, quesillo]);
    });
    it('Se puede añadir un menú', () => {
      let CartaRestaurante2 = new Carta('Carta Restaurante Moderna', [MenuDelDia, MenuVegetariano], [quesillo]);
      expect(CartaRestaurante2.getAllMenus().length).to.eq(2);
      CartaRestaurante2.nuevoMenu('Menú de la Semana', ensalada, curryDeLentejas, quesillo);
      expect(CartaRestaurante2.getAllMenus().length).to.eq(3);
    });
    it('Los métodos search funcionan correctamente.', () => {
      expect(CartaRestauranteModerna.searchMenu('día')).to.eql([MenuDelDia]);
      expect(CartaRestauranteModerna.searchPlato('Quesillo')).to.eql([quesillo]);
      expect(CartaRestauranteModerna.searchEnGeneral('Papas')).to.eql([papasConMojo]);
    });
  });
});
```

<br/><br/>

### 2.5. Clase Comanda. <a name="id25"></a>
Casi en lo más alto de la jerarquía se encuentra la clase `Comanda`. Esta clase es la que almacena todos los elementos que el cliente desee pedir. Todo esos elementos provienen del objeto `Carta` que se recibe al instanciar el objeto. También, cada comanda recibe una `idComanda` para simular el número del pedido de cada cliente, y además tener así un identificador.

El único método sencillo es `mostrarComanda()`, que devuelve todos los elementos que el cliente haya decidido añadir a su comanda hasta el momento.

```typescript
export class Comanda {
  /**
   * Constructor de la clase Comanda.
   * @param carta Objeto Carta de la que consultar los Menús/Platos.
   */
  private comanda: (Menu|Plato)[] = [];
  protected idComanda: number;
  constructor(public readonly carta: Carta, numeroComanda: number) {
    this.idComanda = numeroComanda;
  }
  mostrarComanda() {
    return this.comanda;
  }
}
```

Los métodos `sumarMenu()` y `sumarPlato()` son prácticamente iguales, lo único que los diferencia es que uno busca en el array de Menús y otro en el de Platos. Es por eso que, en este informe, solo comentaremos `sumarMenu()`.
 
Lo que hace es buscar un menú dentro de la `Carta` y añadirlo en la `comanda` del cliente. Lo primero es lo sencillo, pues `Carta` ya tiene una función `searchMenu()` que devuelve todas las coincidencias. Lo complicado viene después, pues puede pasar que un cliente quiera algún menú de *barbacoa* y existan dos o más opciones, las cuales hay que ofrecer y consultar al cliente. Es por eso que creamos la variable `rl` que nos sirve para interactuar con la terminal (el cliente).

Si ocurre que hay 2 o más coincidencias al buscar un menú, le preguntamos al cliente si quiere añadirlas o no a su comanda. A nivel de código, ambas ya están en `matchedMenus`, así que si el cliente responde *sí*, no hacemos nada, pero si responde *no*, lo que hacemos es recortar ese elemento del array. Por último, todos los elementos guardados se añaden a `comanda`.

```typescript
sumarMenu(nombreMenu: string, cantidadMenu: number) {
  const matchedMenus = this.carta.searchMenu(nombreMenu);

  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

  if (matchedMenus.length <= 0) {
    console.log('No se encontró en la Carta.');
  } else {
    if (matchedMenus.length > 1) {
      matchedMenus.forEach((elemento) => {
        rl.question(('¿Añadir ' + elemento.getNombreMenu() + ' a la comanda?'), (answer) => {
          switch(answer.toLowerCase()) {
            case 'si':
              console.log('Menú añadido');
              break;
              case 'no':
              let index = matchedMenus.indexOf(elemento);
              if (index > -1)
                matchedMenus.splice(index, 1);
              break;
            default:
              console.log('Respuesta no soportada.')
          }
        });
      });
    }
    matchedMenus.forEach((element) => {
      for (let index = 0; index < cantidadMenu; index++) {
        this.comanda.push(element);
      }
    });
  }
} 
```

La función `encontrarEnComanda()` hace lo propiamente dicho: recibe un string que busca entre todos los nombres de todos los elementos de `comanda`. Para ello, recorre ese array, deshace el guardián de tipos (comprueba si el objeto es un `Menu` o un `Plato`) y hace una búsqueda de ese elemento. Al final devuelve un array con todas las coincidencias.

```typescript
encontrarEnComanda(nombre: string) {
  const matchedResults: (Menu|Plato)[] = [];
  this.comanda.forEach((elemento) => {
    if (elemento instanceof Menu) {
      if (elemento.getNombreMenu().search(nombre) > -1) {
        matchedResults.push(elemento);
      }
    } else if (elemento instanceof Plato) {
      if (elemento.getNombrePlato().search(nombre) > -1) {
        matchedResults.push(elemento);
      }
    }
  });
  return matchedResults;
}
```

La función `quitarElemento()` recibe un string con el nombre del elemento a quitar de la comanda. Para ello, hace uso de la función recién descrita: `encontrarEnComanda()`. Recibe su array y lo que hace es recortarlos del array `comando` usando su *index* como guía.

```typescript
quitarElemento(nombreElemento: string, cantidadMenu: number) {
  const matchedMenus: (Menu|Plato)[] = this.encontrarEnComanda(nombreElemento);
  let index;
  matchedMenus.forEach((elemento) => {
    index = this.comanda.indexOf(elemento);
    if (index > -1) {
      this.comanda.splice(index, 1);
    }
  });
}
```

Ahora entramos en la parte de **Inquirer**.

En primer lugar tenemos `promptApp()`. Esta función es la encargada del menu principal del programa que recoge los valores posibles que puede ejecutar, estos valores son analizados en un switch para posteriormente realizar si queremos realizar una comanda, gestionar la alimentación o simplemente salir.

```typescript
export function promptApp(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'respuesta',
    message: 'Seleccione una opcion:',
    choices: Object.values(optionsApp)
  }).then((answers: any) => {

  switch (answers["respuesta"]) {
    case optionsApp.Gestion:
      break;
    case optionsApp.Comanda:
      ComandaRestaurante.runInquirer();
      break;
    case optionsApp.Salir:
      console.log('Gracias por su visita. Buen dia');
      break;
    default:
      console.log('Seleccione una opción valida');
  }
  }) 
}
```

En cuanto a `promptcomanda()`. Esta función nos sirve para ejecutar el menu principal de todas las acciones relacionadas con comanda, aquí el usuario seleccionará la acción a realizar. Para esta función se hace uso de `inquirer.js` que es un modulo que permite la gestión de una línea de comando interactiva con el usuario. Basicamente especificamos en el atributo `type` el tipo de visualización que se busca, en nuestro caso seleccionamos una lista de acctiones por ello usamos el list.  con el atributo `message` visualizamos el mensaje que el usuario debe visualizar y con el comando `choices` le introducimos los diferentes valores recogidos en la variable `options` y en un switch posterior analizamos la opción que ha marcado el usuario y ejecutamos el coddigo correspondiente.

```typescript
promptComanda(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'respuesta',
    message: 'Seleccione una opcion:',
    choices: Object.values(options)
  }).then((answers: any) => {

  switch (answers["respuesta"]) {
    case options.Visualizar:
      this.promptVisualizar(); 
      break;
    case options.Comanda:
      this.promptSecond()
      break;
    case options.Salir:
      console.log('Gracias por su visita. Buen dia');
      break;
  }
  }) 
}
```
En caso de que el usuario seleccione la opción de visualizar, se accede al `PromptVisualizar` que nos preguntará que deseamos visualizar, si la carta de platos o si se desea visualizar los diferentes menús que tiene el restaurante, esta elección lo logramos gracias a un switch.

```typescript
promptVisualizar(){
  inquirer.prompt([{
    type: 'list',
    name: 'eleccionVisualizar',
    Message: 'Que desea ver:',
    choices: Object.values(optionsVisualizar)
  }]).then((respuesta: any) => {
    switch (respuesta["eleccionVisualizar"]) {
      case optionsVisualizar.Platos:
        this.carta.getAllPlatosSueltos().forEach((item) => {
          printPlato(item);
        });
        break;
      case optionsVisualizar.Menus:
        this.carta.getAllMenus().forEach((item) => {
          printMenu(item);
        });
        break;
      case optionsVisualizar.Volver:
        this.promptComanda();
        break;
    }
    inquirer.prompt({
      type: 'confirm',
      name: 'askAgain',
      message: 'Quieres visualizar otros menus?',
      default: true
    }).then((answers: any) => {
      if(answers.askAgain){
        this.promptVisualizar();
      } else {
        this.promptComanda();
      }
    })
  })
}
```

Una vez en el menu principal si se seleccionea la opción que permite acceder a la comanda para pedir, modificar o eliminar platos, se redirige al `PromptSecond` esta función prompt nos preguntará cual acción de las comentadas con anterioridad queremos realizar. El switch que recoge la acción ejecutará el promptElegirMenu, el promptElegirPlatos o el promptCustomMenu. 

```typescript
 promptSecond(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'SegundaRespuesta',
    Message: '¿Qué desea hacer ahora?',
    choices: Object.values(SecondOption)
  }).then((respuesta: any) => {
    switch(respuesta["SegundaRespuesta"]){
      case SecondOption.ElegirMenu:
        this.promptElegirMenu();
        break;
      case SecondOption.ElegirPlatos:
        this.promptElegirPlatos();
        break;
      case SecondOption.ModificarMenu:
        this.promptCustomMenu();
        break;
      case SecondOption.FinalizarComanda:
        console.log('Comanda ')
        this.promptComanda();
        break;
    }
  })
}
```

En caso de que se seleccione el `promptElegirMenu` se muestra una lista con todos los menus disponibles y nos permitirá seleccionar uno y despues nos preguntará la cantidad que queremos consumir y si se quiere algún otro menú. Para ello uamos una variable que almacene la cantidad y el menu seleccionado.

```typescript
promptElegirMenu(){
  let aux: string[] = [];
  this.carta.getAllMenus().forEach(function(element) {
    aux.push(element.getNombreMenu());
  });
  inquirer.prompt([{
    type: 'list',
    name: 'menuElegido',
    Message: 'Menu a elegir',
    choices: Object.values(aux)
  },
  {
    type: 'input',
    name: 'cantidad',
    Message: 'Cuantos desea',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Quieres continuar añadiendo otros menus?',
    default: true,
  }]).then((respuesta: any) => {
    this.sumarMenu(respuesta.menuElegido, respuesta.cantidad);
    console.log('Añadido(s) ' + respuesta.cantidad + ' menu(s) << ' + respuesta.menuElegido + ' >>');
    if(respuesta.askAgain){
      this.promptElegirMenu()
    } else {
      this.promptSecond();
    }
  })
}
```

En caso de seleccionar `promptElegirPlatos` que es la función que nos permite elegir los diferentes platos disponibles, este a través de una serie de variables y cálculos nos permite seleccionar el plato y añadir la cantidad del mismo.

```typescript
promptElegirPlatos(){
  let aux: string[] = [];
  this.carta.getAllPlatosSueltos().forEach(function(element) {
    aux.push(element.getNombrePlato());
  })

  inquirer.prompt([{
    type: 'list',
    name: 'platoElegido',
    Message: 'Plato a elegir',
    choices: Object.values(aux)
  },
  {
    type: 'input',
    name: 'cantidad',
    Message: 'Cuantos desea',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'confirm',
    name: 'askAgain',
    message: 'Quieres continuar añadiendo otros platos?',
    default: true,
  }]).then((respuesta: any) => {
    this.sumarPlato(respuesta.platoElegido, respuesta.cantidad);
    console.log('Añadido(s) ' + respuesta.cantidad + ' plato(s) << ' + respuesta.platoElegido + ' >>');
    if(respuesta.askAgain){
      this.promptElegirPlatos()
    } else {
      this.promptSecond();
    }
  })
}
```

En caso de seleccionar en el segundo menú la opción de modificiar, llamamos a la funcion  `promptCustomMenu`que permitirá o modificar un menu ya existente añadiendo un nuevo plato a el o eliminar un plato de uno de los menus actuales. Esto se hace con lun puntero al array que guarda los diferentes menus y platos de forma que extraemos o introducimos un nuevo elemento

```typescript
promptCustomMenu(){
  let aux: string[] = [];
  this.carta.getAllMenus().forEach(function(element) {
    aux.push(element.getNombreMenu());
  });

  inquirer.prompt([{
    type: 'list',
    name: 'menuElegido',
    Message: 'Menu a modificar',
    choices: Object.values(aux)
  },
  {
    type: 'input',
    name: 'cantidad',
    Message: 'Cuantos desea',
    validate: function (value) {
      var valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  }]).then((respuesta: any) => {
    const menuAux = this.carta.searchMenu(respuesta.menuElegido);
    let aux: string[] = [];
    menuAux[0].getPlatos().forEach(function(element) {
        aux.push(element.getNombrePlato());
      }
    );
    inquirer.prompt([{
      type: 'list',
      name: 'eliminarPlatos',
      Message: 'Plato a eliminar',
      choices: Object.values(aux)
    },
  
    ]).then((respuesta2: any) => {
      const bye = menuAux[0].getPlatos().find(elemento => elemento.getNombrePlato() === respuesta2.eliminarPlatos)
      if (bye instanceof Plato) {
        menuAux[0].deletePlato(bye);
      }
      printMenu(menuAux[0]);
    });

    let aux2: string[] = [];
    this.carta.getAllPlatosSueltos().forEach(function(element) {
    aux2.push(element.getNombrePlato());
    });

    inquirer.prompt([{
      type: 'list',
      name: 'nuevoPlatos',
      Message: 'Plato a añadir',
      choices: Object.values(aux2)
    }]).then((respuesta: any) => {
      const hello = this.carta.getAllPlatosSueltos().find(elemento => elemento.getNombrePlato() === respuesta.nuevoPlatos)
      if(hello instanceof Plato) {
        console.log('##########################' + hello.getNombrePlato());
        menuAux[0].addNuevoPlato(hello);
      }
      this.comanda.push(menuAux[0]);
      console.log('Menu personalizado añadido');
      printMenu(menuAux[0]);
    });
  });
}
```





Por último, están los tests de la clase. Usamos los mismos objetos que para los tests `Carta`. Y en un principio hacemos las mismas comprobaciones: que se puede instanciar un objeto, que podemos añadir elementos (esta vez a la **comanda**) y que podemos eliminarlos también. 

Para ello, hacemos uso de las funciones `sumarMenu()` y/o `sumarPlato()`, para después comprobar que se ha añadido correctamente consultando la longitud y los elementos del array. La última parte comprueba también el método `encontrarEnComanda()`, para lo cual deshacemos el guardián de tipos y comprobamos que el nombre del objeto es el esperado.

```typescript
import 'mocha';
import { expect } from 'chai';
import { Alimento } from '../src/alimento';
import { Plato } from '../src/plato';
import { Menu } from '../src/menu';
import { Carta } from '../src/carta';
import { Comanda } from '../src/comanda';
describe('Test clase Comanda', () => {
  const tomate = new Alimento('Tomate', 1.54, 'Huelva', 22, {carbohidratos: 3.5, proteinas: 1, lipidos: 0.11}, 'HORTALIZAS');
  /**
   * Resto de alimentos instanciados
   */ 
    const ensalada = new Plato('Ensalada', [[tomate, 70], [lechuga, 50], [cebolla, 10], [aceiteDeOlivaVirgen, 5]], 'ENTRANTE');
    const potajeDeLentejas = new Plato('Potaje de lentejas', [[lentejas, 50], [papasArrugadas, 30], [chorizo, 10], [cilantro, 5]], 'PRIMERO');
    const arrozCubana = new Plato('Arroz a la cubana', [[arroz, 250], [huevo, 150], [platano, 120]], 'SEGUNDO');
    const papasConMojo = new Plato('Papas con mojo de cilantro', [[papasArrugadas, 200], [cilantro, 50]], 'PRIMERO');
    const curryDeLentejas = new Plato('Curry de lentejas vegetariano', [[lentejas, 40], [papasArrugadas, 40], [arroz, 70], [lecheDeCoco, 100]], 'SEGUNDO');
  const MenuDelDia = new Menu('Menú del día', ensalada, potajeDeLentejas, arrozCubana);
  const MenuVegetariano = new Menu('Menú Vegetariano', ensalada, papasConMojo, curryDeLentejas);
  const quesillo = new Plato('Quesillo', [[huevo, 50], [azúcarBlanco, 150], [leche, 370], [lecheCondensada, 370]], 'POSTRE');

  const CartaRestauranteModerna = new Carta('Carta Restaurante Moderna', [MenuDelDia, MenuVegetariano], [quesillo]);
  const ComandaRestaurante = new Comanda(CartaRestauranteLunaRosa); 
  describe('Es posible instanciar un alimento', () => {
    it('Instancia de la comanda.', () => {
      expect(ComandaRestaurante).to.exist;
    });
    it('Instancia de Comanda no es nula.', () => {
      expect(new Comanda(CartaRestauranteLunaRosa)).not.null;
    });
  });
  describe('Los métodos que modifican la comanda funcionan correctamente.', () => {
    it('Se añade un menú a la comanda correctamente.', () => {
      ComandaRestaurante.sumarMenu('Vegetariano', 1);
      ComandaRestaurante.sumarMenu('día', 1);
      expect(ComandaRestaurante.mostrarComanda().length).to.eql(2);
    });
    it('Se añade un plato a la comanda correctamente.', () => {
      ComandaRestaurante.sumarPlato('Quesillo', 1);
      expect(ComandaRestaurante.mostrarComanda()).to.eql([MenuVegetariano, MenuDelDia, quesillo]);
    });
    it('El número de elementos en el menú es 3.', () => {
      expect(ComandaRestaurante.mostrarComanda().length).to.eql(3);
    });
    it('Se elimina un plato de la comanda correctamente.', () => {
      ComandaRestaurante.quitarElemento('Vegetariano', 1);
      expect(ComandaRestaurante.mostrarComanda().length).to.eql(2);
      expect(ComandaRestaurante.mostrarComanda()).to.eql([MenuDelDia, quesillo]);
    });
  });
  describe('Comprobando funciones de Comanda', () => {
    let elementoEncontrado = ComandaRestaurante.encontrarEnComanda('quesillo');
      it('Buscar en Comanda un plato: quesillo -> returns [quesillo]', () => {
        if (elementoEncontrado instanceof Plato) {
          expect(elementoEncontrado.getNombrePlato()).to.eql('Quesillo')
        }
      });
      elementoEncontrado = ComandaRestaurante.encontrarEnComanda('día');
      it('Buscar en Comanda un menu: Menu del dia -> returns [MenuDelDia]', () => {
        if (elementoEncontrado instanceof Menu) {
        expect(elementoEncontrado.getNombreMenu()).to.eql('Menú del día')
        }
      });
  });
});
```

<br/><br/>

### 2.6. Fichero Main. <a name="id26"></a>
El archivo `main.ts` es el fichero donde se ha implementado la funcionalidad principal del proyecto, es decir, la implementación del menú principal donde el usuario deberá seleccionar si desea realizar una comanda, gestionar la alimentación o salir del programa.
La función principal del main esta recogida con inquirer, esta se explica en el apartado correspondiente, es la función `promptApp`.

```typescript
export const inquirer = require('inquirer');

enum optionsApp{
  Comanda = "Realizar comanda",
  Gestion = "Gestion alimentacion",
  Salir = "Salir del programa"
}

export function promptApp(){
  console.clear();
  inquirer.prompt({
    type: 'list',
    name: 'respuesta',
    message: 'Seleccione una opcion:',
    choices: Object.values(optionsApp)
  }).then((answers: any) => {
  switch (answers["respuesta"]) {
    case optionsApp.Gestion:
      break;
    case optionsApp.Comanda:
      ComandaRestaurante.runInquirer();
      break;
    case optionsApp.Salir:
      console.log('Gracias por su visita. Buen dia');
      break;
    default:
      console.log('Expulsado por gracioso');
  }
  }) 
}
```

<br/><br/>

### 2.7. Fichero Stock. <a name="id27"></a>

El archivo `stock.ts` es el lugar donde hemos creados todos los objetos de todas las clases. Los 50 objetos de `Alimento`, los `Plato` y `Menu` están ahí, además de la **carta del restaurante**. 

Los hemos ubicado de esta manera para tener el código más organizado; pudiendo acceder a los objetos importantes simplemente con un `import`.

<br/><br/>

### 2.8. Fichero BBDD. <a name="id28"></a>

Este fichero **bbdd.ts** es el lugar donde se encuentra el código del módulo **lowdb** que nos permite trabajar con un fichero JSON donde almacenar datos como clases. 

En él se encuentra parte del código que hemos intentado hacer funcionar, sin éxito. Lo dejamos como evidencia del intento.

<br/><br/>

## 3. Dificultades. <a name="id3"></a>

A lo largo de la práctica, nos han surgido diferentes dudas o errores que hemos ido solucionando de mutuo acuerdo. 

Comenzando por el principio, lo primero que hicimos fue plantear la jerarquía de clases y qué atributos tendría cada una (de manera estimada).

Sin embargo, las partes más complejas comenzaron en la clase `Plato`. Las funciones de `calculo` son un poquito más complejas que un simple *getter*, con la excepción de `calculoGrupoPredominante()`, que no es difícil en sí, pero supone un bloque grande de código que hemos tenido que trabajar para obtener un solo dato, pero de manera precisa y más o menos óptima. 

La siguiente parte que nos dio problemas fue el **deshacer los guardianes de tipos** de para algunas funciones. Primeramente con fallos de compilador y luego con fallos durante la ejecución, los métodos `search` no funcionaban bien en un principio porque el compilador no era capaz de separar correctamente los objetos `Menu` y `Plato`. Probamos varias opciones que encontramos por internet, pero al final lo mejor resultó ser la que aparece en los apuntes: usar `instanceof`. 

Durante la creación de la clase `Comanda`, se nos planteó la duda de si un cliente solicitaba un producto de la carta, y daba la casualidad que habían varios de ellos con un nombre similar (por ejemplo, diferentes carnes o verduras *a la **barbacoa***), lo cual implicaba que se le sumaban todas esas coincidencias a su comanda. Nuestra forma de aplacar este problema es la de mostrar todas las opciones y preguntar al cliente cuáles quiere. Para ello hemos hecho uso del módulo/interfaz `readline` que nos permite trabajar con la terminal y permitir al cliente realizar su orden correctamente. 

El fichero `bbdd.ts` es la parte que más problemas nos ha dado. Para todos no es nuevo trabajar con `inquirer` y `lowdb`, lo cual ha supuesto bastante prueba y error (de compilación) con los ejemplos que hemos seguido. 

Al final hemos conseguido crear una estructura de menús con `inquirer`, con lo que nos quedamos satisfechos. Sin embargo, no hemos conseguido hacer funcionar el módulo **lowdb**. Hemos consultado la referencia del libro y ejemplos en internet. Entendemos su cometido, pero a nivel de código no lo hemos podido llevar a cabo. 

<br/><br/>

## 4. Conclusión. <a name="id4"></a>

Los objetivos que hemos cumplido satisfactoriamente sobre esta práctica han sido: crear una estructura de Menú usando los módulos Inquirer.js y Lowdb sobre un grupo de objetos en Typescript.

Es decir, hemos aplicado un buen diseño de las clases solicitadas en el guión y respetando los principios SOLID. Con ello, conseguimos que la información que contiene cada clase esté bien ordenada y tenga sentido, en un entorno práctico.

Hemos realizado las pruebas según la metodología TDD: primero creando las funciones para que fallen, y después completarlas hasta que supongamos que funcionen. Con este prueba y error en el que comparamos los resultados con los objetos instanciados dentro del fichero de pruebas, nos ha hecho adoptar un modelo y metodología que creemos correcta para TDD.

Por último, ha sido nuestro primer contacto con **Inquirer.js** y **Lowdb**. Nos ha costado hacer que los ejemplos no den errores de compilación y que nuestras implementaciones funcionen correctamente.

**Inquirer.js** nos ha enseñado a crear Menús intuitivos para el usuario, ofreciendo unas opciones fijas y muy claras para el usuario.

**Lowdb** nos permite almacenar los datos de objetos en un fichero JSON para poder leer esos datos más adelante, incluso en otra ejecución desde cero del mismo programa.

<br/><br/>

## 5. Referencias. <a name="id5"></a>
1. [Github.](http://github.com)
2. [Nuestro repositorio para esta práctica.](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-p)
3. [Enunciado Práctica 7.](https://ull-esit-inf-dsi-2021.github.io/prct07-menu-dataModel/)
4. [Documentación GitHub Actions](https://docs.github.com/en/actions)
5. [Documentación Istanbul](https://istanbul.js.org/)
6. [Documentación Coveralls](https://coveralls.io/)
7. [Documentación de TypeDoc.](https://typedoc.org/)
8. [Documentación de Mocha.](https://mochajs.org/)
9. [Documentación de Chai.](https://www.chaijs.com/)