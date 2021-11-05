import { useState , useEffect} from "react"
import { getGif } from "../helpers/getGif";



export const useFetchGifs = (categoria) => {

    const [state, setstate] = useState({
        data : [],
        loading: true
    })

    useEffect(()=>{
        getGif(categoria)
            .then(imagenes =>{
               
                setstate({
                data : imagenes,
                loading: false
                })
  
       })
    },[categoria])

    

    return state;
}
