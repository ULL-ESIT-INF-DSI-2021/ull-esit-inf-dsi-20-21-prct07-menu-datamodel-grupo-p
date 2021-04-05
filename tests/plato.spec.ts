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
        it('Se devuelven correctamente los elementos del plato', () => {
            expect(arrozCubana.getNombrePlato()).to.be.equal('Arroz a la cubana');
            expect(arrozCubana.getPrecio()).to.be.equal(1.5); // arreglar esto y calcular nuevos valores
            expect(arrozCubana.getOrigen()).to.be.equal('China');
            expect(arrozCubana.getCalorias()).to.be.equal(381);
            expect(arrozCubana.getMacronutrientes()).to.have.same.members([86, 7, 0.9]);
            expect(arrozCubana.getGrupo()).to.be.equal('CEREALES');  
        });




    });
});
