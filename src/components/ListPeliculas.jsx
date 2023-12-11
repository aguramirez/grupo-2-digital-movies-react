import React, { useEffect, useState } from 'react'

function ListPeliculas() {
    const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/products')
    .then( (response) => response.json())
    .then( (data) => {
        setPeliculas(data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    })
  },[]);
  return (
    <>
      <h1>Peliculas</h1>
      <ul>
        {peliculas.map((p, index) => (
          <li key={index}>{p.titulo}</li>
        ))}
      </ul>
    </>
  )
}

export default ListPeliculas