import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Rick and Morty'])

    return (
        <>
            <h1 className="animate__animated animate__flash">Gif Expert App</h1>

            <AddCategory setCategorias={ setCategorias } />

            <hr/>
            
            <div className='contenedor_categoria'>
                {
                    categorias.map( categoria => (

                        <GifGrid 
                            key={categoria} 
                            categoria={categoria} 
                        />
                        
                     ) )
                }
            </div>
        </>
    )
}

export default GifExpertApp