import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetail({users}) {
  const { id } = useParams();
  const user = users.find(u => u.id == id)
  console.log(user)
  return (
    <>
      <h1>Detalle Usuario</h1>
        <div style={{ margin: '10px' }}>
            <h1>{user?.usuario}</h1>
            <img src={"../../" + user?.foto} alt="" />
            <p>{user?.email}</p>
        </div>
    </>
  )
}

export default UserDetail