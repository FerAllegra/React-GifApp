import React, { useState } from 'react';
import { PropTypes } from "prop-types";

const AddGif = ({ setcategorias })=>{

    const [add, setadd] = useState('escribe el gif que buscas');//si el useState esta vacio, va a arrojar error, si lo quiero vacio lo dejo ''

    const agregar = (e)=>{
        setadd(e.target.value);
    }

    const enviarForm = (e)=>{
        e.preventDefault();
        
        if(add.trim().length > 3){
            setcategorias( cats => [add,...cats] );    
            setadd('');
        }
       
    }

    return(
        <form onSubmit = { enviarForm }>
        <h1>{add}</h1>
        <input  
            type = "text"
            value = { add }
            onChange = {agregar}
        />
        </form>
    );
}
AddGif.propTypes = {
    setcategorias: PropTypes.func.isRequired
}
export default AddGif;