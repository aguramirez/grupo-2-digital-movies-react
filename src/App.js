import './App.css';
import ListPeliculas from './components/ListPeliculas';
import ListUsers from './components/ListUsers';
import UserDetail from './components/UserDetail';

import { Link, Route, Routes } from 'react-router-dom';
import PeliculaDetail from './components/PeliculaDetail';
import { useEffect, useState } from 'react';

function App() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/products')
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      })
  }, []);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      })
  }, []);
  
  return (
    <>
      <Link to="/api/users">Lista de Usuarios</Link>
      <Link to="/api/products">Lista de Peliculas</Link>
      <Routes>
        <Route path="/api/users" exact element={<ListUsers users={users}/>} />
        <Route path="/api/users/:id" exact element={<UserDetail users={users}/>} />
        <Route path="/api/products" exact element={<ListPeliculas peliculas={peliculas}/>} />
        <Route path="/api/products/:id" exact element={<PeliculaDetail peliculas={peliculas} />} />
      </Routes>
    </>
  );
}

export default App;
