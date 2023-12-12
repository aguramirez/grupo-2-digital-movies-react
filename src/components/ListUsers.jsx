import React from 'react';
import { Link} from 'react-router-dom';

function ListUsers({users}) {
  
  return (
    <>
      <h1>Usuarios</h1>
      <ul>
        {users.map((u, index) => (
          <li key={index}>
            <Link to={"/api/users/" + u.id}>{u.usuario}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListUsers