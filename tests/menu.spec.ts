import 'mocha';
import {expect} from 'chai';
import {Menu} from '../src/menu';

describe('Test clase Menú', () => {
    describe('Es posible instanciar un menú', () => {
        
        const arroz = new Alimento('Arroz blanco', 1.5, 'China', 381, {carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES');
        const huevo = new Alimento('Huevo', 0.45, 'América', 390, {carbohidratos: 90, proteinas: 20, lipidos: 15}, 'HUEVOS');
        const platano = new Alimento ('Plátano', 0.5, 'Sudamerica', 220, {carbohidratos: 56, proteinas: 2, lipidos: 0.2}, 'FRUTAS');
        const arrozCubana = new Plato('Arroz a la cubana', [[arroz, 250], [huevo, 150], [platano, 120]], 'SEGUNDO');

        it('Instancia del alimento', () => {
            expect(arrozCubana).to.exist;
        });
        it('Instancia del alimento no es nula', () => {
            expect(new Alimento('Arroz blanco', 1.5, 'China', 381,{carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES')).not.null;
        });
    });
});