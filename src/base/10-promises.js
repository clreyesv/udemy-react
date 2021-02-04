import { getHeroesById } from "./09-imports-exp";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( ( ) => {
//         const heroe = getHeroesById(2);
//         //console.log(heroe);
//         resolve(heroe);
//         //reject('no se encontro');
//     }, 2000 )
// });

// promesa.then( (heroe) => {
//     console.log("resolve?")
//     console.log('heroe', heroe);
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroe = getHeroesById(id);
            //console.log(heroe);
            if(heroe !== undefined){
                resolve(heroe);}
            else{reject('no se encontro')}
            //reject('no se encontro');
        }, 2000)
    });
};

getHeroeByIdAsync(10)
.then( heroe => console.log('Heroe', heroe))
.catch( err => console.warn(err));

