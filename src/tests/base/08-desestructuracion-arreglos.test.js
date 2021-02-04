import { getArreglo } from "../../base/08-desestructuracion-arreglos"

describe('08-desestructuracion-arreglos.test ', () => {

    test('debe retornar un string y un numerow', () => {

        const arr = getArreglo();//['ABC', 123]
        expect(arr).toEqual(['ABC', 123]) 
    })
    
})
