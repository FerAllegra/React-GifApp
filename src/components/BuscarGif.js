import { useFetchGifs } from "../hooks/useFetchGifs";
import { MostrarImagen } from "./MostrarImagen";


const BuscarGif = ({categoria}) => {

    const {data: imagenes, loading} = useFetchGifs(categoria);

    


    return (
        <>
            <h3 className = 'animate__fadeInLeftBig'>{categoria}</h3>
            
            {loading && <p className= 'animate-animated animate-flash'>Loading</p>}

            <div className = 'card-grid'>            
                    { imagenes.map(img=>
                        <MostrarImagen 
                            key = {img.id}
                            { ...img }
                        />
                    ) 
                    }          
            </div>
        </>
    )
}

export default BuscarGif