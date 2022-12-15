// Conexión con la API del backend.
const URL_USUARIOSLIST = 'http://127.0.0.1:8000/Usuario/usuario-list/';
const URL_USUARIOREGISTER ='http://127.0.0.1:8000/Usuario/usuario-create/';
const URL_DELETE ='http://127.0.0.1:8000/Usuario/usuario-delete/';
const API_URL ='http://127.0.0.1:8000/Usuario/';

//recibir usuario
export const getUsuario = async () => {
    return fetch(API_URL); 
}

export const listarUsuarios = async () => {
    return await fetch(URL_USUARIOSLIST);
    
};
export const registrarUsuario = async (newUsuario) => {
    return await fetch(URL_USUARIOREGISTER,{
        // metodos doc: https://www.w3schools.com/tags/ref_httpmethods.asp || doc: https://openjavascript.info/2022/01/03/using-fetch-to-make-get-post-put-and-delete-requests/
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        // headers: [],
        body: JSON.stringify({
            "idUsuario": Number(newUsuario.idUsuario),
            "email": String(newUsuario.email).trim(),
            "password": String(newUsuario.password).trim(),
            "userName": String(newUsuario.userName).trim(),
            "nombre": String(newUsuario.nombre).trim(),
            "apellido": String(newUsuario.apellido).trim(),
            "token": String(newUsuario.token).trim()
           
        })
    });
};


export const eliminarUsuario = async (idUsuario) => {
    return await fetch(`${URL_DELETE}${idUsuario}`, {
        method: 'DELETE'
    });
};
