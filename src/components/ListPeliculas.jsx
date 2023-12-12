import React from "react";
import { Link } from "react-router-dom"


function ListPeliculas({peliculas}) {
  return (
    <>
      <h1>Peliculas</h1>
      <ul>
        {peliculas.map((p, index) => (
          <li key={index}>
            <Link to={"/api/products/" + p.id}>{p.titulo}</Link>
            </li>
        ))}
      </ul>
    </>
  )
}

export default ListPeliculas