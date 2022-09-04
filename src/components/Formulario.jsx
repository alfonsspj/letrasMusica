import { useState } from 'react'
 
const Formulario = () => {

  const [busqueda, setBusqueda] = useState({
    artista: '',
    cancion: ''
  })

  return (
    <form>
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