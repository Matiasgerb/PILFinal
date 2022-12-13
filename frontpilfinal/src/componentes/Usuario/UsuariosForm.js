import React, {useState,useEffect} from "react";
import * as UsuarioServer from './UsuarioServer';
import {useParams,useNavigate } from "react-router-dom";


const UsuarioForm = () => {

    //Variable del componente
    const history = useNavigate();
    const params = useParams();
    //Estados

    //Hook useState

    const initialState = { //Se inicializa un usuario en base al modelo del backend.
        idUsuario: 0,
        email:'example@email.com',
        password:'contraseña',
        userName:'Usuario',
        nombre:'Nombre',
        apellido:'Apellido',
        token:'Token'
    };

    const [usuario, setUsuario] = useState([initialState]); //se almacena los datos de la inicialización dentro de una variable tipo objeto.


    const handleInputChange = (e) => {
        // OBSERVAR FUNCIONAMIENTO CON LOS CONSOLE.LOG()
        // console.log(e.target.name);
        // console.log(e.target.value);
        //ESTA LINEA CAPTURA LOS VALORES DEL INPUT, LOS GUARDA EN USUARIO Y RENDERIZA EN EL INPUT
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
      };
    
        //POST
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Podemos ver como se crea el nuevo usuario en un json
        //  console.log(usuario);
        try {
          let res;
          if (!params.idUsuario) {
            res = await UsuarioServer.registrarUsuario(usuario);
            // console.log("RES: ", res);
            const data = await res.json();
            console.log("Data: ",data);
            if (data.idUsuario != 0) {
              setUsuario(initialState);
            }
          } else {
            // await UsuarioServer.updateUsuario(params.id, usuario);
          }
           history("/");
        } catch (error) {
          console.log(error);
        }
      };



    //Funcion para obtener nuestro usuario

    const getUsuario = async (usuarioId) => {

        try{

            const res = await UsuarioServer.getUsuario(usuarioId);
            const data = await res.json();
            const {idUsuario,email,password,userName,nombre,apellido,token} = data.usuario;
            
            setUsuario({idUsuario,email,password,userName,nombre,apellido,token});

        } catch (error){
            console.log(error);
        }

    }

  

  



    //Efecto
    useEffect(() => {
        if (params.idUsuario) {
          getUsuario(params.idUsuario);
        }
        // eslint-disable-next-line
      }, []);

    //Render o HTML o Return

    return(
        <div>
            <div className="col-md-3 mx-auto">
                <h2 className="mb-3 text-center">Usuario</h2>
                <form onSubmit={handleSubmit}>
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
                                {params.idUsuario ? (
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

export default UsuarioForm;