// Conexión con la API del backend.
const URL_USUARIOSLIST = 'http://127.0.0.1:8000/Notas/notas-list/';
const URL_NOTASREGISTER ='http://127.0.0.1:8000/Notas/notas-create/';
const URL_DELETE ='http://127.0.0.1:8000/Notas/notas-delete/';
const URL_Update ='http://127.0.0.1:8000/Notas/notas-details/';
const API_URL='http://127.0.0.1:8000/Notas';

//recibir Notas
export const getNotas = async () => {
    return fetch(API_URL); 
}

export const listarNotas = async () => {
    return await fetch(URL_USUARIOSLIST);
    
};
export const registrarNotas= async (newNotas) => {
    return await fetch(URL_NOTASREGISTER,{
        // metodos doc: https://www.w3schools.com/tags/ref_httpmethods.asp || doc: https://openjavascript.info/2022/01/03/using-fetch-to-make-get-post-put-and-delete-requests/
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        // headers: [],
        body: JSON.stringify({
            "idNotas": Number(newNotas.idNotas),
            "Titulo": String(newNotas.Titulo).trim(),
            "descrip": String(newNotas.descrip).trim(),
            "estado": Number(newNotas.estado),
            "fechCreacion": Date(newNotas.fechCreacion).trim(),
            "fechCierre": Date(newNotas.fechCierre).trim(),
            "idUsuario": Number(newNotas.idUsuario),
         
        })
    });
};
export const actualizarNota = async (notasActu) => {
    // AQUI DEBEMOS DEFINIR LOS PARAMETOS PARA ENVIAR LOS DATOS AL BACKEND
    return await fetch(URL_Update),{
        // metodos doc: https://www.w3schools.com/tags/ref_httpmethods.asp || doc: https://openjavascript.info/2022/01/03/using-fetch-to-make-get-post-put-and-delete-requests/
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "idNotas": Number(notasActu.idNotas),
            "Titulo": String(notasActu.Titulo).trim(),
            "descrip": String(notasActu.descrip).trim(),
            "estado": Number(notasActu.estado),
            "fechCreacion": Date(notasActu.fechCreacion).trim(),
            "fechCierre": Date(notasActu.fechCierre).trim(),
            "idUsuario": Number(notasActu.idUsuario),
        })
    };
};


export const eliminarNota = async (idNotas) => {
    return await fetch(`${URL_DELETE}${idNotas}`, {
        method: 'DELETE'
    });
};