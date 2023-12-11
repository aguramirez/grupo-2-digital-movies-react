import React, { useEffect, useState } from 'react'

function PeliculaDetail() {
    const [peli, setPeli] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/users/:id')
    .then( (response) => response.json())
    .then( (data) => {
        setPeli(data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    })
  },[]);
  return (
    <>
        <div>
            <h1>{peli.titulo}</h1>
            <p>{peli.descripcion}</p>
        </div>
    </>
  )
}

export default PeliculaDetail