import 'mocha';
import { expect } from 'chai';
import { Alimento } from '../src/alimento';
import { Plato } from '../src/plato';
import { Menu } from '../src/menu';
import { Carta } from '../src/carta';


describe('Test clase Carta', () => {
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