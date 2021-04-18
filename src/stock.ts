import { Alimento } from "./alimento";
import { Macronutrientes } from "./alimento"
import { Grupo } from "./alimento";
import { Plato } from "./plato";
import { Categoria } from "./plato";
import { Menu } from "./menu";
import { Carta } from "./carta";
import { Comanda } from "./comanda";


//#############################################################################################################
// ALIMENTOS
//#############################################################################################################
// 50 Alimentos
// export type Grupo = 'CARNES' | 'PESCADOS' | 'HUEVOS' | 'TOFU' | 'FRUTOS_SECOS' | 'SEMILLAS' | 'LEGUMBRES' |
// 'VERDURAS' | 'HORTALIZAS' | 'LACTEOS' | 'CEREALES' | 'FRUTAS' | 'PROCESADOS';
const aceiteDeOlivaVirgen = new Alimento('Aceite de oliva virgen', 5.99, 'Jeréz', 899, {carbohidratos: 0, proteinas: 0, lipidos: 99.9}, 'PROCESADOS');
const ajo = new Alimento('Ajo', 0.80, 'Canarias', 76, {carbohidratos: 23 ,proteinas:5.3 ,lipidos: 0.3}, 'VERDURAS');
const albahaca = new Alimento(' Albahaca', 1.03, 'Verona', 25, {carbohidratos: 0.44, proteinas: 2.5, lipidos:0.61}, 'VERDURAS');
const arroz = new Alimento('Arroz blanco', 1.5, 'China', 381, {carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES');
const anís = new Alimento('Anís', 7.85, 'Canarias', 390, {carbohidratos: 27.6, proteinas: 0, lipidos: 0}, 'PROCESADOS');
const apio = new Alimento('Apio', 1.32, 'España', 16, {carbohidratos: 1.3, proteinas: 1.3, lipidos: 0.2}, 'VERDURAS');
const atún = new Alimento('Atún', 24, 'Atlántico', 200, {carbohidratos: 0, proteinas: 23, lipidos: 9}, 'PESCADOS');
const azúcarBlanco = new Alimento('Azúcar blanca', 0.89, 'Canarias', 398, {carbohidratos: 99.5, proteinas: 0, lipidos: 0}, 'PROCESADOS');
const basePizza = new Alimento('Base de pizza', 2, 'Nápoles', 273, {carbohidratos: 43.9, proteinas: 6.7, lipidos: 7.4}, 'PROCESADOS');
const bechamel = new Alimento('Salsa Bechamel', 2.78, 'Las Palmas', 153, {carbohidratos: 10.8, proteinas: 3.9, lipidos: 11}, 'LACTEOS');
const cacao = new Alimento('Cacao en polvo azucarado', 16.76, 'México', 330, {carbohidratos: 67.1, proteinas: 9.8, lipidos: 2.5}, 'PROCESADOS');
const café = new Alimento('Café', 6, 'Colombia', 4, {carbohidratos: 11, proteinas: 14, lipidos: 0}, 'PROCESADOS');
const canela = new Alimento('Canela en polvo', 9.74, 'Ceylan', 44,  {carbohidratos: 0, proteinas: 20.2, lipidos: 14}, 'SEMILLAS');
const carneMolida = new Alimento('Carne molida', 6, 'España', 245, {carbohidratos: 0, proteinas: 15.2, lipidos: 20.5}, 'CARNES');
const cebolla = new Alimento('Cebolla', 1.4, 'Canarias', 33, {carbohidratos: 7, proteinas: 1.2, lipidos: 0}, 'HORTALIZAS');
const cilantro = new Alimento('Cilantro', 1.3, 'Canarias', 57, {carbohidratos: 8, proteinas: 3.3, lipidos: 0.7}, 'VERDURAS');
const chorizo = new Alimento('Chorizo', 11, 'Portuano', 285, {carbohidratos: 2, proteinas: 22, lipidos: 21}, 'CARNES');
const chuleta = new Alimento('Chuleta de cerda', 3, 'España', 327, {carbohidratos: 0, proteinas: 15.4, lipidos: 29.5}, 'CARNES');
const fideos = new Alimento('fideos', 0.80, 'Huelva', 385, {carbohidratos: 78, proteinas: 12.9, lipidos: 1.5}, 'CEREALES')
const fresa = new Alimento('Fresa', 2, 'España', 40, {carbohidratos: 7, proteinas: 0.7, lipidos: 0.5}, 'FRUTAS');
const galletasBizcochos = new Alimento('Galletas de bizcocho', 2.5, 'Valencia', 450, {carbohidratos: 71.5, proteinas: 7, lipidos: 14}, 'PROCESADOS');
const galletasMaria = new Alimento('Galletas María', 1.24, 'Canarias', 414, {carbohidratos: 76, proteinas: 7, lipidos: 8}, 'PROCESADOS');
const garbanzos = new Alimento('Garbanzos', 1.35, 'Canarias', 154, {carbohidratos: 18.7, proteinas: 8.9, lipidos: 2}, 'LEGUMBRES');
const gorgonzola = new Alimento('Queso Gorgonzola', 1.62, 'Bolzano',361, {carbohidratos: 0.62, proteinas: 19.4, lipidos: 31.2}, 'LACTEOS' )
const harinaBlanca = new Alimento('Harina de trigo blanca', 0.53, 'Tenerife', 375, {carbohidratos: 80, proteinas: 9.3, lipidos: 1.2}, 'PROCESADOS');
const huevo = new Alimento('Huevo', 0.45, 'América', 390, {carbohidratos: 90, proteinas: 20, lipidos: 15}, 'HUEVOS');
const leche = new Alimento('Leche entera', 0.79, 'Asturias', 63 , {carbohidratos: 4.7, proteinas: 3.1, lipidos: 3.5}, 'LACTEOS');
const lecheCondensada = new Alimento('Leche Condensada Entera', 3.09, 'Madriz', 343, {carbohidratos: 26, proteinas: 8.8, lipidos: 9.3}, 'LACTEOS');
const lecheDeCoco = new Alimento('Leche de coco', 5.24, 'Tailandia', 241, {carbohidratos: 3.3, proteinas: 2.3, lipidos: 23.8}, 'FRUTAS');
const lentejas = new Alimento('Lentejas Cocidass', 1.49, 'España', 103, {carbohidratos: 12.5, proteinas: 8.2, lipidos: 0.5}, 'LEGUMBRES');
const lechuga = new Alimento('Lechuga', 1.01, 'España', 14, {carbohidratos: 1.4, proteinas: 1.34, lipidos: 0.2}, 'VERDURAS');
const mantequilla = new Alimento('Mantequilla', 1.50, 'Irlanda', 749, {carbohidratos: 0.2, proteinas: 0.6, lipidos: 83 }, 'PROCESADOS');
const manzana = new Alimento('Manzana', 1.79, 'Chile', 53, {carbohidratos: 12, proteinas: 0.3, lipidos: 0}, 'FRUTAS');
const mascarpone = new Alimento('mascarpone', 1.65, 'Italia', 320, {carbohidratos:0.1, proteinas: 19.3, lipidos: 26.9}, 'LACTEOS');
const mayonesa = new Alimento('Mayonesa', 2, 'España', 718, {carbohidratos: 0.1, proteinas: 1.8, lipidos: 78.9}, 'HUEVOS');
const merluza = new Alimento('Merluza', 3.39 , 'Galicia', 89, {carbohidratos: 0, proteinas: 15.9, lipidos: 2.8}, 'PESCADOS');
const mozzarella =  new Alimento('Mozzarella', 2.05, 'Lazio', 223, {carbohidratos: 0.0, proteinas: 19.5, lipidos: 16.1}, 'LACTEOS' )
const MusloPolloSinPiel = new Alimento('Muslo de Pollo', 3.99, 'Barcelona', 111, {carbohidratos: 0, proteinas: 17.9, lipidos: 4.4}, 'CARNES');
const nataMontada = new Alimento('Nata Montada', 1.69, 'España', 331, {carbohidratos: 10.1, proteinas: 2.1, lipidos: 31.4}, 'LACTEOS');
const PanRallado = new Alimento('PanRallado', 1.51, 'La Palma', 227, {carbohidratos: 58 , proteinas: 7.8, lipidos: 1}, 'CEREALES');
const papasCocidas = new Alimento('Papa', 1, 'Canarias', 105, {carbohidratos: 22.8, proteinas: 2.3, lipidos: 0.1}, 'HORTALIZAS');
const parmesano = new Alimento('Parmesano', 25, 'Italia', 420, {carbohidratos: 0, proteinas: 40, lipidos: 28.9}, 'LACTEOS');
const perejil = new Alimento('Perejil', 0.69, 'España', 45, {carbohidratos: 49.5 , proteinas: 3, lipidos: 1.3 }, 'VERDURAS');
const pimientoRojo = new Alimento( 'Pimiento Rojo', 3.05, 'LatinoAmerica', 37, {carbohidratos: 6.4, proteinas: 1, lipidos: 0.4},'HORTALIZAS');
const platano = new Alimento ('Plátano', 0.5, 'Sudamerica', 220, {carbohidratos: 56, proteinas: 2, lipidos: 0.2}, 'FRUTAS');
const pollo = new Alimento('Pollo', 2.18, 'Brasil', 167, {carbohidratos: 0, proteinas: 20, lipidos: 9.7}, 'CARNES');
const salsaBarbacoa = new Alimento('Salsa Barbacoa', 1.10, 'Asia', 71, {carbohidratos: 11.6, proteinas: 1.8, lipidos: 1.8}, 'PROCESADOS')
const salsaDeCurry = new Alimento('Salsa de curry', 23, 'Asia', 78, {carbohidratos: 6.8, proteinas: 1.5, lipidos: 5}, 'PROCESADOS');
const setas = new Alimento('Setas', 1.99, 'Hokkaido', 31,{carbohidratos: 4 , proteinas: 1.8, lipidos: 0.3}, 'HORTALIZAS');
const spaguetti = new Alimento('Spaguettis', 0, 'Italia', 369, {carbohidratos: 74.1, proteinas: 12, lipidos: 1.8}, 'CEREALES');
const tomate = new Alimento('Tomate', 1.54, 'Huelva', 22, {carbohidratos: 3.5, proteinas: 1, lipidos: 0.11}, 'HORTALIZAS');
const zanahoria = new Alimento('Zanahoria', 1, 'España', 40, {carbohidratos: 7.3, proteinas: 0.9, lipidos: 0.2}, 'HORTALIZAS');

//#############################################################################################################
// PLATOS
//#############################################################################################################
// Entre 5 y 10 por Categoría (Entrante, Primero, Segundo, Postre)
//entrantes:
const ensalada = new Plato('Ensalada', [[tomate, 70], [lechuga, 50], [cebolla, 10], [aceiteDeOlivaVirgen, 5]], 'ENTRANTE');
const potajeDeLentejas = new Plato('Potaje de lentejas', [[lentejas, 50], [papasCocidas, 30], [chorizo, 10], [cilantro, 5]], 'PRIMERO');
const PlatoCroquetasPollo = new Plato('PlatoCroquetasPollo:',[[bechamel, 50], [PanRallado, 15], [ajo, 10], [cebolla, 10], [perejil, 5], [pollo, 40], [aceiteDeOlivaVirgen, 10]], 'ENTRANTE');
const PlatoCroquetasMerluza = new Plato('PlatoCroquetasMerluza:',[[bechamel, 50], [PanRallado, 15], [ajo, 10], [cebolla, 10], [perejil, 5], [merluza, 250], [aceiteDeOlivaVirgen, 10]], 'ENTRANTE');
const PinchoTortilla = new Plato('Pincho Tortilla', [[papasCocidas, 50], [perejil, 10], [huevo, 6], [cebolla, 10] ], 'ENTRANTE');
const PapasDeluxe = new Plato('Papas Deluxe', [[papasCocidas, 60], [PanRallado, 50]], 'ENTRANTE');
// primer plato:
const papasConMojo = new Plato('Papas con mojo de cilantro', [[papasCocidas, 200], [cilantro, 50]], 'PRIMERO');
const Nuggets = new Plato('Nuggets de Pollo',[[pollo, 100], [huevo, 2], [PanRallado, 20], [harinaBlanca, 200]], 'PRIMERO');
const ensaladilla = new Plato('Ensaladilla', [[papasCocidas, 90], [huevo, 2], [zanahoria, 20], [mayonesa, 30], [atún, 40], [pimientoRojo, 10]], 'PRIMERO');
const sopa = new Plato('Sopa de pollo', [[fideos, 100], [pollo, 70], [aceiteDeOlivaVirgen, 30]], 'PRIMERO');
const ropaVieja = new Plato('Ropa vieja', [[garbanzos, 80], [papasCocidas, 80], [pollo, 80]], 'PRIMERO');
// segundo plato:
const arrozCubana = new Plato('Arroz a la cubana', [[arroz, 250], [huevo, 150], [platano, 120]], 'SEGUNDO');
const chuletas = new Plato('Chuletas con papas', [[chuleta, 100], [papasCocidas, 60]], 'SEGUNDO');
const muslodePollo = new Plato('Muslo de Pollo', [[salsaBarbacoa, 20], [MusloPolloSinPiel, 20]], 'SEGUNDO');
const curryDeLentejas = new Plato('Curry de lentejas vegetariano', [[lentejas, 100], [papasCocidas, 40], [arroz, 70], [lecheDeCoco, 100], [salsaDeCurry, 20]], 'SEGUNDO');
const pizzaCojonuda = new Plato('Pizza Cojonuda', [[basePizza, 1], [mozzarella, 50], [albahaca, 10], [chorizo, 85], [setas, 5], [gorgonzola, 50]], 'SEGUNDO');
const spaguettisBoloñesa = new Plato('Spaguettis a la boloñesa', [[tomate, 80], [spaguetti, 100], [cebolla, 20], [zanahoria, 20], [apio, 20], [carneMolida, 50]], 'SEGUNDO');
// postres:
const quesillo = new Plato('Quesillo', [[huevo, 50], [azúcarBlanco, 150], [leche, 370], [lecheCondensada, 370]], 'POSTRE');
const tiramisú = new Plato('Tiramisú', [[mascarpone, 110], [azúcarBlanco, 40], [huevo, 2], [café, 60], [cacao, 20], [galletasBizcochos, 6], [anís, 100]], 'POSTRE');
const natillaChocolate = new Plato('Natillas de Chocolate', [[huevo, 4], [azúcarBlanco, 20], [leche, 500], [canela, 5], [galletasMaria, 1], [cacao, 20]], 'POSTRE');
const arrozConLeche = new Plato('Arroz con leche', [[arroz, 50], [leche, 50], [azúcarBlanco, 10], [canela, 5]], 'POSTRE');
const tartaManzana = new Plato('Tarta de manzana', [[manzana, 2], [leche, 60], [azúcarBlanco, 30], [huevo, 2], [harinaBlanca, 60]], 'POSTRE');
const tartaFresaNata = new Plato('Tarta de Fresa con Nata', [[fresa, 40], [nataMontada, 20], [azúcarBlanco, 20], [leche, 60], [harinaBlanca, 60]], 'POSTRE')

//#############################################################################################################
// MENUS
//#############################################################################################################
// 5 Menús
export const MenuVegetariano = new Menu('Menú Vegetariano', ensalada, papasConMojo, curryDeLentejas );
export const MenuDelDia = new Menu('Menú del día', ensalada, potajeDeLentejas, arrozCubana, quesillo);
export const MenuKids = new Menu('Menu para niños', PlatoCroquetasMerluza, PlatoCroquetasPollo, Nuggets, pizzaCojonuda, natillaChocolate);
export const MenuCarnivoro = new Menu('Menú carnivoro', PapasDeluxe, Nuggets, muslodePollo, chuletas )
export const MenuDelTrabajador = new Menu('Menu del trabajador', PinchoTortilla, sopa, spaguettisBoloñesa, arrozConLeche);

//#############################################################################################################
// CARTA
//#############################################################################################################
export const CartaRestauranteLunaRosa = new Carta('Carta Restaurante Moderna', 
  [MenuDelDia, MenuVegetariano, MenuCarnivoro, MenuKids, MenuDelTrabajador], 
  [ensalada, potajeDeLentejas, PlatoCroquetasPollo, PlatoCroquetasMerluza, PinchoTortilla, PapasDeluxe, papasConMojo, Nuggets,
  ensaladilla, sopa, ropaVieja, arrozCubana, chuletas, muslodePollo, curryDeLentejas, pizzaCojonuda, spaguettisBoloñesa, quesillo,
  tiramisú, natillaChocolate, arrozConLeche, tartaManzana, tartaFresaNata]);
