import React, { useState,useEffect } from "react";

import DataTable from "react-data-table-component";

import * as UsuarioServer from './UsuarioServer';


const UsuarioList= () => {

    
        //Creamos una variable de tipo usuario, y el metodo set para modificar el componente.
        const [usuarios, setUsuario] = useState([]);
    const ListUsuarios = async () => {

        try{
            //instancia la funcion listar usuarios de Usuario Server
            const res = await UsuarioServer.listarUsuarios();
            console.log(res)

            //convierte la respuesta en un archivo json.
            const data = await res.json();

            // ahora coloca los usuarios.
            setUsuario(data);

        }catch(error){
            console.log(error);
        }
    }
    const eliminarUser = async (idUsuario) =>{

        await UsuarioServer.eliminarUsuario(idUsuario);
        ListUsuarios();
    }
    const handleInputChange = (e) => {
        // OBSERVAR FUNCIONAMIENTO CON LOS CONSOLE.LOG()
        // console.log(e.target.name);
        // console.log(e.target.value);
        //ESTA LINEA CAPTURA LOS VALORES DEL INPUT, LOS GUARDA EN USUARIO Y RENDERIZA EN EL INPUT
        setUsuario({ ...usuarios, [e.target.name]: e.target.value });
      };


    useEffect(()=>{
        //instanciamos la funcionar listUsuarios
        ListUsuarios();
    },[]);    



    //<---------------- DISEÑO ----------------------->

    //COLUMNAS
    
    const columns = [
        {
            name: "ID",
            selector: row => row.idUsuario
        },
        {
            name: "E-MAIL",
            selector: row => row.email
        },
        {
            name: "PASSW0RD",
            selector: row => row.password
        },
        {
            name: "USERNAME",
            selector: row => row.userName
        },
        {
            name: "NOMBRE",
            selector: row => row.nombre
        },
        {
            name: "APELLIDO",
            selector: row => row.apellido
        },
        {
            name: "TOKEN",
            selector: row => row.token
        }

    ];
    //Boton

    const buttons = [
        // { extend: "create", editor: editor },
         { icon: 'edit', tooltip: "Editar Usuario", onClick:(event, rowData)=>alert("Va a Editar el Usuario: "+ rowData.idUsuario)}
    ];


    return(
        <div className="container">

             <div className="col-md-10 mb-10 my-2">
                        <DataTable columns={columns} data={usuarios} buttons={buttons}/>
                </div> 
                <div className="containerDEL">                
                    <label className="form-labe col-12"> idUsuario </label>
                    <input type='number' name='idUsuario' id='idUsuario' value={usuarios.idUsuario} onChange={handleInputChange}></input> 
                    <button onClick={() => usuarios.idUsuario && eliminarUser(usuarios.idUsuario)} className="btn btn-danger my-2">
                        Delete User
                </button>
                </div>

        </div>
    )
   
};

export default UsuarioList;