import React from 'react';
import { useParams } from 'react-router-dom';

function PeliculaDetail({peliculas}) {
  const { id } = useParams();
  const peli = peliculas.find(p => p.id == id)
  console.log(peli);
  return (
    <>
        <div>
            <h1>{peli?.titulo}</h1>
            <p>{peli?.descripcion}</p>
            <img src={"../../" + peli?.imagen} alt="" />
        </div>
    </>
  )
}

export default PeliculaDetail