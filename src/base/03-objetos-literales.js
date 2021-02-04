const persona = {
 nombre: 'tony',
 apellido: 'stark',
 edad: 45,
 direccion:{
     ciudad:'berlin',
     zip:2113,
     lat:1212,
     lng:1212
 }
};

// ... crea un nuevo objeto copiando el objeto que se pasa por param
const persona2 = {...persona};
persona2.nombre="Diego"
//console.table( { persona} );
console.log( persona );
console.log( persona2 );