const nombre="claudio";
const apellido="reyes";

const nombreCompleto = nombre + ' ' + apellido;
const nombreCompletoDos= `${nombre}  ${apellido}`;
//  console.log(nombreCompletoDos);

export function getNombre(nombre = 'Carlos'){
    return 'Hola ' + nombre;
}

// console.log(getNombre(nombreCompletoDos));
