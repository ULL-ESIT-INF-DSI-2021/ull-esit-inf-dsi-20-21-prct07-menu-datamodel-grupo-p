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
const arroz = new Alimento('Arroz blanco', 1.5, 'China', 381, {carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES');
const azúcarBlanco = new Alimento('Azúcar blanca', 0.89, 'Canarias', 398, {carbohidratos: 99.5, proteinas: 0, lipidos: 0}, 'PROCESADOS');
const basePizza = new Alimento('Base de pizza', 2, 'Nápoles', 273, {carbohidratos: 43.9, proteinas: 6.7, lipidos: 7.4}, 'PROCESADOS');
const bechamel = new Alimento('Salsa Bechamel', 2.78, 'Las Palmas', 153, {carbohidratos: 10.8, proteinas: 3.9, lipidos: 11}, 'LACTEOS');
const cebolla = new Alimento('Cebolla', 1.4, 'Canarias', 33, {carbohidratos: 7, proteinas: 1.2, lipidos: 0}, 'HORTALIZAS');
const cilantro = new Alimento('Cilantro', 1.3, 'Canarias', 57, {carbohidratos: 8, proteinas: 3.3, lipidos: 0.7}, 'VERDURAS');
const chorizo = new Alimento('Chorizo', 11, 'Portuano', 285, {carbohidratos: 2, proteinas: 22, lipidos: 21}, 'CARNES');
const harinaBlanca = new Alimento('Harina de trigo blanca', 0.53, 'Tenerife', 375, {carbohidratos: 80, proteinas: 9.3, lipidos: 1.2}, 'PROCESADOS');
const huevo = new Alimento('Huevo', 0.45, 'América', 390, {carbohidratos: 90, proteinas: 20, lipidos: 15}, 'HUEVOS');
const leche = new Alimento('Leche entera', 0.79, 'Asturias', 63 , {carbohidratos: 4.7, proteinas: 3.1, lipidos: 3.5}, 'LACTEOS');
const lecheCondensada = new Alimento('Leche Condensada Entera', 3.09, 'Madriz', 343, {carbohidratos: 26, proteinas: 8.8, lipidos: 9.3}, 'LACTEOS');
const lecheDeCoco = new Alimento('Leche de coco', 5.24, 'Tailandia', 241, {carbohidratos: 3.3, proteinas: 2.3, lipidos: 23.8}, 'FRUTAS');
const lentejas = new Alimento('Lentejas Cocidass', 1.49, 'España', 103, {carbohidratos: 12.5, proteinas: 8.2, lipidos: 0.5}, 'LEGUMBRES');
const lechuga = new Alimento('Lechuga', 1.01, 'España', 14, {carbohidratos: 1.4, proteinas: 1.34, lipidos: 0.2}, 'VERDURAS');
const mantequilla = new Alimento('Mantequilla', 1.50, 'Irlanda', 749, {carbohidratos: , proteinas: , lipidos: }, 'PROCESADOS');
const masc
const
const papasCocidas = new Alimento('Papa', 1, 'Canarias', 105, {carbohidratos: 22.8, proteinas: 2.3, lipidos: 0.1}, 'HORTALIZAS');
const perejil = new Alimento('Perejil', 0.69, 'España', 45, {carbohidratos: 49.5 , proteinas: 3 lipidos: 1.3 }, 'VERDURAS');
const platano = new Alimento ('Plátano', 0.5, 'Sudamerica', 220, {carbohidratos: 56, proteinas: 2, lipidos: 0.2}, 'FRUTAS');
const pollo = new Alimento('Pollo', 2.18, 'Brasil', 167, {carbohidratos: 0, proteinas: 20, lipidos: 9.7});
const tomate = new Alimento('Tomate', 1.54, 'Huelva', 22, {carbohidratos: 3.5, proteinas: 1, lipidos: 0.11}, 'HORTALIZAS');


//#############################################################################################################
// PLATOS
//#############################################################################################################
// Entre 5 y 10 por Categoría (Entrante, Primero, Segundo, Postre)
//entrantes:
const ensalada = new Plato('Ensalada', [[tomate, 70], [lechuga, 50], [cebolla, 10], [aceiteDeOlivaVirgen, 5]], 'ENTRANTE');
const potajeDeLentejas = new Plato('Potaje de lentejas', [[lentejas, 50], [papasCocidas, 30], [chorizo, 10], [cilantro, 5]], 'PRIMERO');
const PlatoCroquetas = new Plato('PlatoCroquetas:',[[bechamel, 50], [ajo, 10], [cebolla, 10], [perejil, 5], [pollo, 40], [aceite, 10]]);
// primer plato:
const papasConMojo = new Plato('Papas con mojo de cilantro', [[papasCocidas, 200], [cilantro, 50]], 'PRIMERO');

// segundo plato:
const arrozCubana = new Plato('Arroz a la cubana', [[arroz, 250], [huevo, 150], [platano, 120]], 'SEGUNDO');
const curryDeLentejas = new Plato('Curry de lentejas vegetariano', [[lentejas, 100], [papasCocidas, 40], [arroz, 70], [lecheDeCoco, 100]], 'SEGUNDO');

// postres:
const quesillo = new Plato('Quesillo', [[huevo, 50], [azúcarBlanco, 150], [leche, 370], [lecheCondensada, 370]], 'POSTRE');
const tiramisú = new Plato('Tiramisú', [[mascarpone, 450], [azúcarBlanco, 160], [huevo, 5], [café, 250], [cacao, 100], [galletasBizcochos, 200], [brandy, 100]], 'POSTRE');
//export const natillaChocolate = new Plato();


//#############################################################################################################
// MENUS
//#############################################################################################################
// 5 Menús
export const MenuVegetariano = new Menu('Menú Vegetariano', ensalada, papasConMojo, curryDeLentejas);
export const MenuDelDia = new Menu('Menú del día', ensalada, potajeDeLentejas, arrozCubana);
//export const MenuKids = new Menu('Menu para niños', Croquetas, )
//export const MenuCarnivoro = new Menu('Menú carnivoro',)
//export const MenuDelTrabajador = new Menu('Menu del trabajador', )

//#############################################################################################################
// CARTA
//#############################################################################################################
export const CartaRestauranteLunaRosa = new Carta('Carta Restaurante Moderna', [MenuDelDia, MenuVegetariano], [quesillo]);