import React from 'react'

export const MostrarImagen = ({id,title,imagen}) => {

    console.log(id,title,imagen);
    return (
        <div className = 'card animate__fadeInLeftBig'>
            <img src={imagen} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
