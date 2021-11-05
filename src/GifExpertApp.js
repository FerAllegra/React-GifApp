import React, { useState } from 'react';
import AddGif from './components/AddGif';
import BuscarGif  from './components/BuscarGif';

const GifExpertApp = ()=>{

    

    const [categorias, setcategorias] = useState(['goku']);


    return (
        <>
             <AddGif setcategorias = { setcategorias }/>

            <hr />
            <ol>
                {
                categorias.map(categoria => (
                    <BuscarGif 
                        key = {categoria}
                        categoria = {categoria}
                    />
                ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;