import React, { useEffect, useState } from 'react'

function Dashboard({ users, peliculas }) {
    const cantidadProductos = peliculas?.length
    const cantidadUsuarios = users?.length
    const ultimoProducto = peliculas[cantidadProductos - 1]
    const ultimoUsuario = users[cantidadUsuarios - 1]
    return (
        <>
            <div className='container'>
                <div className='cantidad-productos'>
                    <h3>Cantidad de productos</h3>
                    <h3>{cantidadProductos}</h3>
                </div>
                <div className='cantidad-usuarios'>
                    <h3>Cantidad de usuarios</h3>
                    <h3>{cantidadUsuarios}</h3>
                </div>
                <div className='cantidad-categorias'>

                </div>
                <div className='ultimo-producto'>
                    <h3>Ultimo producto</h3>
                    <h3>{ultimoProducto ? ultimoProducto.titulo : 'No hay producto'}</h3>
                </div>
                <div className='ultimo-usuario'>
                    <h3>Ultimo usuario</h3>
                    <h3>{ultimoUsuario ? ultimoUsuario.usuario : 'No hay usuario'}</h3>
                </div>
                <div className='productos-por-categoria'>

                </div>
                <div className='listado-productos'>
                    <h3>Listado de productos</h3>
                    <ul>
                        {peliculas?.map((p, index) => (
                            <li key={index}>
                                {p.titulo}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dashboard