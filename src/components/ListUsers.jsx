import React, { useEffect, useState } from 'react'

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/users')
    .then( (response) => response.json())
    .then( (data) => {
      setUsers(data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    })
  },[]);
  return (
    <>
      <h1>Usuarios</h1>
      <ul>
        {users.map((u, index) => (
          <li key={index}>
            <a href="/api/users/{u.id}">{u.usuario}</a>
            </li>
        ))}
      </ul>
    </>
  )
}

export default ListUsers