

import * as UsuarioServer from "./UsuarioServer";

const UsuarioItem = ({usuario,listUsuario}) =>{
      
    const eliminarUser = async (idUsuario) =>{

        await UsuarioServer.eliminarUsuario(idUsuario);
        listUsuario();
    }


    return(

        <button onClick={() => usuario.idUsuario && eliminarUser(usuario.idUsuario)} className="btn btn-danger my-2">
          Delete User
        </button>

    );
















};
export default UsuarioItem;