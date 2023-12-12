import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail({users}) {
  const { id } = useParams();
  const user = users.find(u => u.id == id)
  console.log(user)
  return (
    <>
      <h1>Detalle Usuario</h1>
        <div>
            <h1>{user?.usuario}</h1>
            <img src="{user?.foto}" alt="" />
        </div>
    </>
  )
}

export default UserDetail