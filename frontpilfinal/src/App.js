import logo from './logo.svg';
import './App.css';
import UsuariosForm from '../src/componentes/Usuario/UsuariosForm'

import 'bootstrap/dist/css/bootstrap.min.css';
import ListUsuarios from './componentes/Usuario/UsuarioList';

function App() {
  return (
      <div className='conteiner'>
          <ListUsuarios></ListUsuarios>

      </div>
  );
}

export default App;
