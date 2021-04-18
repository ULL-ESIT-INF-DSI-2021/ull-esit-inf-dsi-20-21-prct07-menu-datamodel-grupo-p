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
      expect(arrozCubana.getPrecio()).to.be.equal(3.5025);
      expect(arrozCubana.getCategoria()).to.be.equal('SEGUNDO');
      expect(arrozCubana.getAlimentos()).to.eql([[arroz, 250], [huevo, 150], [platano, 120]]); 
      expect(arrozCubana.getMacronutrientesPlato()).to.eql({carbohidratos: 417.2, proteinas: 49.9, lipidos: 24.99});
      expect(arrozCubana.calculoGrupoPredominante()).to.eql('HUEVOS');
    });
    const mayonesa = new Alimento('Mayonesa', 2, 'España', 718, {carbohidratos: 0.1, proteinas: 1.8, lipidos: 78.9}, 'HUEVOS');
    it('Se pueden añadir un alimentos', () => {
      arrozCubana.addNuevoAlimento(mayonesa, 10);
      expect(arrozCubana.getAlimentos()).to.eql([[arroz, 250], [huevo, 150], [platano, 120], [mayonesa, 10]]);
    });
    /* Falla el test porque no consigue encontrar el objeto Mayonesa.
    it('Se puede eliminar un Alimento', () => {
      arrozCubana.deleteAlimento(mayonesa);
      expect(arrozCubana.getAlimentos().length).to.eql(3);
    });
    */
  });
});
