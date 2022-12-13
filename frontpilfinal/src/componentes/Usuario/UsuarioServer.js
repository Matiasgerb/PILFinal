// Conexión con la API del backend.
const URL_USUARIOSLIST = 'http://127.0.0.1:8000/Usuario/usuario-list/';
const URL_USUARIOREGISTER ='http://127.0.0.1:8000/Usuario/usuario-create/';
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
export const actualizarUsuario = async (usuario) => {
    // AQUI DEBEMOS DEFINIR LOS PARAMETOS PARA ENVIAR LOS DATOS AL BACKEND
    return await fetch(API_URL),{
        // metodos doc: https://www.w3schools.com/tags/ref_httpmethods.asp || doc: https://openjavascript.info/2022/01/03/using-fetch-to-make-get-post-put-and-delete-requests/
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "idUsuario": Number(usuario.idUsuario),
            "email": String(usuario.email).trim(),
            "password": String(usuario.password).trim(),
            "userName": String(usuario.userName).trim(),
            "nombre": String(usuario.nombre).trim(),
            "apellido": String(usuario.apellido).trim(),
            "token": String(usuario.token).trim()
        })
    };
};
