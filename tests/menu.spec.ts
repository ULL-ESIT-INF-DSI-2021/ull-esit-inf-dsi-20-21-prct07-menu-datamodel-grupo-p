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

  const chorizo = new Alimento('Chorizo', 11, 'Portuano', 285, {carbohidratos: 2, proteinas: 22, lipidos: 21}, 'CARNES');
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
      // Arroz a la cubana: c: 232 p: 29 l: 16.1
      // Papas con mojo: c: 30.8 p: 5.6 l: 0.8
      // Potaje de lentejas: c: 
      expect(MenuDelDia.getGruposAlimentos()).to.be.equal(['CEREALES', 'HUEVOS', 'FRUTAS', 'HORTALIZAS', 'VERDURAS', 'CARNES', 'LEGUMBRES']);
      expect(MenuDelDia.getPrecioMenu()).to.be.at.least(3)
    });
  });
});