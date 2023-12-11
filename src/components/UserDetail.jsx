import React, { useEffect, useState } from 'react'

function UserDetail() {
    const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/users/:id')
    .then( (response) => response.json())
    .then( (data) => {
      setUser(data);
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    })
  },[]);
  return (
    <>
        <div>
            <h1>{user.usuario}</h1>
            <img src="{user.foto}" alt="" />
        </div>
    </>
  )
}

export default UserDetail