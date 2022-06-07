
import GifGridItem from "./GifGridItem"
import useFetchGifs from "../hooks/useFetchGifs"

const GifGrid = ({ categoria }) => {

    const { data:images, loading } = useFetchGifs( categoria );

    return (
        <>  
            <div className="contenedor_titulo_categoria animate__animated animate__fadeIn">
                <h3 className="titulo_categoria ">
                    { categoria }
                </h3>
            </div>

            { loading && <p className="loading">Cargando...</p> }

            <div className="card-grid">
            {
                images.map( img => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                    />
                ) )
            }
            </div>
        </>
    )
}

export default GifGrid