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
            "descrip": (newNotas.descrip),
            "estado": Number(newNotas.estado),
            "fechCreacion": (newNotas.fechCreacion),
            "fechCierre": (newNotas.fechCierre),
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
            "descrip": (notasActu.descrip),
            "estado": Number(notasActu.estado),
            "fechCreacion": (notasActu.fechCreacion),
            "fechCierre": (notasActu.fechCierre),
            "idUsuario": Number(notasActu.idUsuario),
        })
    };
};


export const eliminarNota = async (idNotas) => {
    return await fetch(`${URL_DELETE}${idNotas}`, {
        method: 'DELETE'
    });
};