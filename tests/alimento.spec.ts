import 'mocha';
import {expect} from 'chai';
import {Alimento} from '../src/alimento';


describe('Test clase Alimento', () => {
    
    describe('Es posible instanciar un alimento', () => {
        const arroz = new Alimento('Arroz blanco', 1.5, 'China', 381,{carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES');   
        it('Instancia del alimento', () => {
            expect(arroz).to.exist;
        });
        it('Instancia del alimento no es nula', () => {
            expect(new Alimento('Arroz blanco', 1.5, 'China', 381,{carbohidratos: 86, proteinas: 7, lipidos: 0.9}, 'CEREALES')).not.null;
        });
        it('Se devuelven correctamente los datos del alimento', () => {
            expect(arroz.getNombreAlimento()).to.be.equal('Arroz blanco');
            expect(arroz.getPrecio()).to.be.equal(1.5);
            expect(arroz.getOrigen()).to.be.equal('China');
            expect(arroz.getCalorias()).to.be.equal(381);
            expect(arroz.getMacronutrientes()).to.have.same.members([86, 7, 0.9]);
            expect(arroz.getGrupo()).to.be.equal('CEREALES');  
        });
    });
});
