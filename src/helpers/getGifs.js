
const getGifs = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria) }&limit=9&api_key=JGlWDLxWDuhY6Np69Sw6GJJttMSI4Ykg`

    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            img: img.images?.downsized_medium.url
        }
    } );

    return gifs;

}

export default getGifs;