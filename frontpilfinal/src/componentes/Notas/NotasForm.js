import React, {useState,useEffect} from "react";
import Select from 'react-select'

import * as NotasServer from './NotasServer';
import {useParams } from "react-router-dom";


const NotasForm = () => {

    //Variable del componente
    
    const params = useParams();
    //Estados

    //Hook useState

    const initialState = { //Se inicializa una nota en base al modelo del backend.
        idNotas: 0,
        titulo:'',
        descrip:'',
        estado:1,
        fechCreacion:'2022-12-14',
        fechCierre:'2022-12-09',
        idUsuario: 1,
    };

    const [nota, setNotas] = useState([initialState]); //se almacena los datos de la inicialización dentro de una variable tipo objeto.
   

    const handleInputChange = (e) => {
      
        //ESTA LINEA CAPTURA LOS VALORES DEL INPUT, LOS GUARDA EN NOTA Y RENDERIZA EN EL INPUT
        setNotas({ ...nota, [e.target.name]: e.target.value });
      };
      
     
    const handleDatePickerCreacion = (e) => {

      setNotas({ ...nota, fechCreacion: e.target.value });
      console.log(e)

    }
    const handleDatePickerCierre = (e) => {

      setNotas({ ...nota, fechCierre: e.target.value });
      console.log(e);

    }
      const handleInputSelectEstado = (e) =>{
        // console.log(e);
       setNotas({ ...nota, estado: e.value});
      


   }

   


        //POST
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Podemos ver como se crea la nueva nota en un json
       
        try {
          let res;
          if (!params.idNotas) {
            res = await NotasServer.registrarNotas(nota);
            // console.log("RES: ", res);
            const data = await res.json();
            console.log("Data: ",data);
            if (data.idNotas != 0) {
              setNotas(initialState);
            }
          } 
        } catch (error) {
          console.log(error);
        }
      };



    //Funcion para obtener nuestra nota

    const getNotas = async (notasId) => {

        try{

            const res = await NotasServer.getNotas(notasId);
            const data = await res.json();
            const {idNotas,titulo,descrip,estado,fechCreacion,fechCierre,idUsuario} = data.notasId;
            
            setNotas({idNotas,titulo,descrip,estado,fechCreacion,fechCierre,idUsuario});

        } catch (error){
            console.log(error);
        }

    }

  

  



    //Efecto
    useEffect(() => {
        if (params.idNotas) {
          getNotas(params.idNotas);
        }
        // eslint-disable-next-line
      }, []);

    //Render o HTML o Return
    const options_estado = [
      { value: '1', label: 'Aprobado' },
      { value: '2', label: 'Desaprobado'},
      { value:'3',label:'Verificando'},
    ]

    return(
        <div>
            <div className="col-md-3 mx-auto">
                <h2 className="mb-3 text-center">Notas</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">

                        <label className="form-labe col-12"> idNotas </label>
                        <input type='number' name='idNotas' id='idNotas' value={nota.idNotas} onChange={handleInputChange}></input>

                        <label className="form-label col-12"> Titulo: </label>
                        <input type='text' name='Titulo' id='Titulo' value={nota.idTitulo} onChange={handleInputChange}></input>

                        <label className="form-label col-12"> Descripcion: </label>
                        
                        <textarea type='text' name='descrip' id='descrip' value={nota.descrip} onChange={handleInputChange}></textarea>

                        <label className="form-label col-12"> Estado: </label>
                        <Select id="estado" name="estado" className="form-control"
                                        onChange={handleInputSelectEstado}
                                        // onChange={handleInputChange}
                                        classNamePrefix="my-react-select"
                                        options={options_estado} 
                                        />

                      

                        <label className="form-label col-12 "> Fecha Creacion:</label>
                        <input type='date' name='fechCreacion' id='fechCreacion' value={nota.fechCreacion} onChange={handleDatePickerCreacion} ></input>
                        
                     


                        <label className="form-label col-12 "> Fecha Cierre: </label>
                        <input type='date' name='fechCierre' id='fechCierre' value={nota.fechCierre} onChange={handleDatePickerCierre} ></input>

                        <label className="form-label col-12"> idUsuario: </label>
                        <input type='number' name='idUsuario' id='idUsuario' value={nota.idUsuario} onChange={handleInputChange}></input>
                        


                       
                    </div>
                         <div className="row">
                            <div className="d-grid gap-2">
                                
                                <button type="submit" className="btn btn-block btn-success mb-12">
                                    Register
                                </button>
                              
                        </div> 
                    </div>
              </form>

            </div>
        </div>
    );
    };

export default NotasForm;