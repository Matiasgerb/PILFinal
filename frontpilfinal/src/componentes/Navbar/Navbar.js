
import React from 'react';
import { Link } from "react-router-dom";

const Navbar=()=>{


    return(    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" to="#/">
                Proyecto Final | ISPC | REACT + Django
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                    Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/UsuariosForm">
                    Add User
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Usuario-list">
                    User List
                    </Link>
                <li className="nav-item">
                    <Link className="nav-link" to="/Notas-list">
                    Notas List
                    </Link>
                </li>
                    
                </li>
                    <Link className="nav-link" to="/NotasForm">
                    Add Notas
                    </Link>
                </ul>
                
            </div>
            </div>
        </nav>








        
    );

}

export default Navbar;