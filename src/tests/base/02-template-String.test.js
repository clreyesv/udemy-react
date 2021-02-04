import '@testing-library/jest-dom';
import { getNombre } from '../../base/02-template-String';
describe('pruebas en 02-template-String ', () => {

    test('getSaludo should return hola name' ,() => {
        const name = 'Claudio';
    
       const saludo = getNombre(name);

       expect(saludo).toBe('Hola '+ name);

    })
    
    test('getSaludo should return hola Carlos' ,() => {
        const  experado = 'Carlos';
    
       const saludo = getNombre();

       expect(saludo).toBe('Hola '+ experado);

    })
    
    
})
