import './App.css';
import ListPeliculas from './components/ListPeliculas';
import ListUsers from './components/ListUsers';
import PeliculaDetail from './components/PeliculaDetail';
import UserDetail from './components/UserDetail';

import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <ListUsers />
    <ListPeliculas />
    {/* <Link to="/api/users">Lista de Usuarios</Link>
    <Link to="/api/products">Lista de Usuarios</Link>
    <Switch>
      <Route path="/api/users" component={ListUsers}/>
      <Route path="/api/users/:id" component={UserDetail}/>
      <Route path="/api/products" component={ListPeliculas}/>
      <Route path="/api/products/:id" component={PeliculaDetail}/>
    </Switch> */}
    </>
  );
}

export default App;
