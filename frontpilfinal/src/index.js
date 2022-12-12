import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//componentes extras
import { BrowserRouter, Routes, Route   } from "react-router-dom";



//componentes propios
import UsuariosForm from './componentes/Usuario/UsuariosForm';
import Navbar from './componentes/Navbar/Navbar';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  {/* <Navbar> */}

  <BrowserRouter>
    <Navbar></Navbar> 
        {/* SIEMPRE DEBE ESTAR DENTRO DEL BROWSER-ROUTER O ROUTES */}
          <div className="conteiner my-4">
            <Routes>
              <Route exact path="/" element={<App />} />
              <Route path="/UsuariosForm" element={<UsuariosForm />} />
              {/* <Route path="/heroes-batallas" element={<HeroesForm />} /> */}
              {/* <Route path="/login" element={<LoginForm/>} /> */}
            </Routes>
          </div>
      </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
