import React, {useState,useEffect} from "react";
import * as UsuarioServer from './UsuarioServer';
import {useParams,useNavigate } from "react-router-dom";


const Usuario = () => {

    //Variable del componente
    const history = useNavigate();
    const params = useParams();
    //Estados

    //Hook useState

    const initialState = { //Se inicializa un usuario en base al modelo del backend.
        idUsuario: 0,
        email:'',
        password:'',
        userName:'',
        nombre:'',
        apellido:'',
        token:''
    };

    const [usuario, setUsuario] = useState(initialState); //se almacena los datos de la inicialización dentro de una variable tipo objeto.




    //Funcion para obtener nuestro usuario

    const getUsuario = async () => {

        try{

            const res = await UsuarioServer.getUsuario();
            const data = await res.json();
            const {idUsuario,email,password,userName,nombre,apellido,token} = data.usuario;
            
            setUsuario({idUsuario,email,password,userName,nombre,apellido,token});

        } catch (error){
            console.log(error);
        }

    }

    const handleInputChange = (e) =>{
        setUsuario({...usuario, [e.target.name]: e.target.value}); //captura la informacion del input y lo almacena en un objeto "Usuario"
        console.log(usuario);
    }



    //Efecto
    useEffect(()=>{

    },[]);

    //Render o HTML o Return

    return(
        <div>
            <div className="col-md-3 mx-auto">
                <h2 className="mb-3 text-center">Usuario</h2>
                <form>
                    <div className="mb-8">

                        <label className="form-labe col-12"> idUsuario </label>
                        <input type='number' name='idUsuario' id='idUsuario' value={usuario.idUsuario} onChange={handleInputChange}></input>

                        <label className="form-label col-12"> Email </label>
                        <input type='text' name='email' id='email' value={usuario.email} onChange={handleInputChange}></input>

                        <label className="form-label col-12"> Contraseña </label>
                        <input type='password' name='password' id='password' value={usuario.password} onChange={handleInputChange}></input>

                        <label className="form-label col-12 "> Nombre Usuario</label>
                        <input type='text' name='userName' id='userName' value={usuario.userName} onChange={handleInputChange}></input>

                        <label className="form-label col-12 "> Nombre </label>
                        <input type='text' name='nombre' id='nombre' value={usuario.nombre} onChange={handleInputChange}></input>

                        <label className="form-label col-12"> Apellido </label>
                        <input type='text' name='apellido' id='apellido' value={usuario.apellido} onChange={handleInputChange}></input>

                        <label className="form-label col-12"> Token </label>
                        <input type='text' name='token' id='token' value={usuario.token} onChange={handleInputChange}></input>



                       
                    </div>
                         <div className="row">
                            <div className="d-grid gap-2">
                                {params.id ? (
                                <button type="submit" className="btn btn-block btn-primary mb-12">
                                    Update
                                </button>
                                ) : (
                                <button type="submit" className="btn btn-block btn-success mb-12">
                                    Register
                                </button>
                                )}
                        </div> 
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Usuario;