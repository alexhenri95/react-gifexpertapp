import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ( { setCategorias } ) => {

    const [ buscar, setBuscar ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (buscar === '') return

        setCategorias( cats => [ buscar.trim() , ...cats] )

        setBuscar('')
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    placeholder="Escribe algo a buscar..."
                    value={ buscar }
                    onChange={ e => setBuscar(e.target.value) }
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory