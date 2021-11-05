export const getGif = async(categoria)=>{
    const url = `http://api.giphy.com/v1/gifs/search?api_key=ujtk8QsqLwpyPMpGpcpdeqK9e4eNzH5J&q=${ encodeURI ( categoria )}&limit=10`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gif = data.map(img=>{
        return {
            id: img.id,
            title: img.title,
            imagen: img.images.downsized_medium.url
        }
    });

    return gif; 
    
}