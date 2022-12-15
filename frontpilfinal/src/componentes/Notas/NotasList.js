import React, { useState,useEffect } from "react";

import DataTable from "react-data-table-component";

import * as NotasServer from './NotasServer';


const NotasList= () => {

    
    
        const [nota, setNotas] = useState([]);
    const listNotas = async () => {

        try{
         
            const res = await NotasServer.listarNotas();
            console.log(res)

            //convierte la respuesta en un archivo json.
            const data = await res.json();

            setNotas(data);

        }catch(error){
            console.log(error);
        }
    }
    const eliminarNota= async (idNotas) =>{

        await NotasServer.eliminarNota(idNotas);
        listNotas();
    }
    const handleInputChange = (e) => {
        // OBSERVAR FUNCIONAMIENTO CON LOS CONSOLE.LOG()
        // console.log(e.target.name);
        // console.log(e.target.value);
        //ESTA LINEA CAPTURA LOS VALORES DEL INPUT, LOS GUARDA EN USUARIO Y RENDERIZA EN EL INPUT
        setNotas({ ...nota, [e.target.name]: e.target.value });
      };


    useEffect(()=>{
        
        listNotas();
    },[]);    



    //<---------------- DISEÑO ----------------------->

    //COLUMNAS
    
    const columns = [
        {
            name: "ID",
            selector: row => row.idNotas
        },
        {
            name: "Titulo",
            selector: row => row.titulo
        },
        {
            name: "Estado",
            selector: row => row.estado
        },
        {
            name: "Fecha Creacion",
            selector: row => row.fechCreacion
        },
        {
            name: "Fecha Cierre",
            selector: row => row.fechCierre
        },
        {
            name: "IdUsuario",
            selector: row => row.idUsuario
        },
      

    ];
    //Boton

    const buttons = [
        // { extend: "create", editor: editor },
         { icon: 'edit', tooltip: "Editar Nota", onClick:(event, rowData)=>alert("Va a Editar la nota: "+ rowData.idNotas)}
    ];


    return(
        <div className="container">

             <div className="col-md-10 mb-10 my-2">
                        <DataTable columns={columns} data={nota} buttons={buttons}/>
                </div> 

                
                <div className="containerDEL">                
                    <label className="form-labe col-12"> idNotas </label>
                    <input type='number' name='idNotas' id='idNotas' value={nota.idNotas} onChange={handleInputChange}></input> 
                    <button onClick={() => nota.idNotas && eliminarNota(nota.idNotas)} className="btn btn-danger my-2">
                        Delete Nota
                </button>
                </div>

        </div>
    )
   
};

export default NotasList;