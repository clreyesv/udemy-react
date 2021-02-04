

const getImagen = async () => {
    const apiKey = '2beTjWtztNlk4E2OVSwjgmCfo6FO3lGt';
    

    try {
        //fetch retorna una promesa, pero con el await cambia a response.
    //y eso significa que es sincrono, es decir, esperara que termine la peticion 
    //para seguir cpn la sgte linea
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    console.log(data)
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}

getImagen();