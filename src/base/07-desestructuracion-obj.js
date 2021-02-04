//desestructuracion, // asignacion desestructrurante

const persona = {
    nombre: 'tony',
    edad:45,
    clave:'tomo',
    rango:"cabo"
};

// const {nombre, edad, clave} = persona;
// console.log(nombre);
// console.log(edad);
// console.log(clave);


//const getPersona = (user) =>{
const getPersona = ({ nombre,edad,clave,rango="cap" }) =>{
//const {nombre, edad, clave} = user;
    // console.log(nombre,edad,clave,rango);

    return {
        nombreClave: clave,
        anios:edad
    }
}

const {nombreClave, anios} = getPersona(persona);
console.log(nombreClave, anios);
