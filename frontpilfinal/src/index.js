import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//componentes extras
import { BrowserRouter, Routes, Route   } from "react-router-dom";



//componentes propios
//Usuarios
import UsuariosForm from './componentes/Usuario/UsuariosForm';
import UsuarioList from './componentes/Usuario/UsuarioList';
import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/Home/home';
//Notas
import NotasForm from './componentes/Notas/NotasForm';
import NotasList from './componentes/Notas/NotasList';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  {/* <Navbar> */}
  
  <BrowserRouter>
    <Navbar></Navbar> 
        {/* SIEMPRE DEBE ESTAR DENTRO DEL BROWSER-ROUTER O ROUTES */}
          <div className="conteiner my-4">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/UsuariosForm" element={<UsuariosForm />} />
              <Route exact path='/usuario-list' element={<UsuarioList /> } />
              <Route exact path='/usuario-delete/:idUsuario' element={<UsuarioList /> } />
              <Route exact path="/NotasForm" element={<NotasForm />} />
              <Route exact path='/notas-list' element={<NotasList /> } />

            </Routes>
            
          </div>
      </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
