

const personajes = ['goku','vege','pan'];

const [ , , p2 ] = personajes;

// console.log(p2);

export const getArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros]= getArreglo();
// console.log(letras,numeros);



//tarea

const useStates = ( valor ) => {
    return [ valor, () => {console.log('hola mundo') } ];
}
    
const [nombre, setNombre] = useStates('Goku');

// console.log(nombre);
setNombre();
