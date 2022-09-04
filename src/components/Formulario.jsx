import { useState } from 'react'
import useLetras from '../hooks/useLetras'
 
const Formulario = () => {

  const { setAlerta, busquedaLetra } = useLetras()

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(busqueda).includes('')) {
      setAlerta('Coloca nombre de artista y canción')
      return
    }

    busquedaLetra(busqueda)
    // desaparzca la alerta en caso de que se envien artista y cancion
    setAlerta('')
  }
  return (
    <form
      onSubmit={handleSubmit} 
    >
      <legend>Busca por Artistas y Canción</legend>

      <div className="form-grid">
        {/* busqueda de artista */}
        <div>
          <label>Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Nombre Artista"
            value={busqueda.artista}
            onChange={e => setBusqueda({
              ...busqueda,
              [e.target.name] : e.target.value
            })}
          >
          </input>
        </div>
        
        {/* busqueda por cancion */}
        <div>
          <label>Canción</label>
          <input
            type="text"
            name="cancion"
            placeholder="Nombre Canción"
            value={busqueda.cancion}
            onChange={e => setBusqueda({
              ...busqueda,
              [e.target.name] : e.target.value
            })}
          >
          </input>
        </div>

        <input type="submit" value="Buscar" />
      </div>
    </form>
  )
}

export default Formulario