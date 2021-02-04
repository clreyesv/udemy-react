import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//functional component return html
const PrimeraApp = ({ saludo , 
        subtitulo})=> {

   

    ////  <>  misma cosa que fragment 
    return (
        <>     
        <h1> {saludo} </h1>
        {/* <pre>{ JSON.stringify(saludo) }</p7re> */}
        <p>{subtitulo}</p>
        </>
        
        );
   
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}


PrimeraApp.defaultProps = {
    subtitulo: 'soy un subntituli'
}


export default PrimeraApp;