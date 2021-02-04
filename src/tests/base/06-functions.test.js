import '@testing-library/jest-dom';
import { getUser, getUserActive } from '../../base/06-functions';


describe('pruebas en 06-function', () => {
    test ('testing getUser funciton',()=> {
        const  { username }  = getUser();
        expect(username).toEqual('jederzeit');
    })

    test ('testing getUserActive function',()=> {
        const expectedObj = {uid:'abc123', username:'machi' };
        const nombre = 'machi';
        const userActive = getUserActive(nombre);
        //console
        expect(expectedObj).toEqual(userActive);

        
    })

   

    

})
