// funciones js
/*
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

*/
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola prro`;


export const getUser = () => ({
    uid:'123',
    username:'jederzeit'
});

export const getUserActive = (nombre)=>({ 
        uid: 'abc123',
        username: nombre
    });

export const userActiv = getUserActive("johan");
//console.log(userActiv);