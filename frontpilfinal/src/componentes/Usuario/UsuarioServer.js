// Conexión con la API del backend.
const API_URL = 'http://127.0.0.1:8000/Usuario/usuario-list/';

//recibir usuario
export const getUsuario = async () => {
    return fetch(API_URL); 
}

export const listarUsuarios = async () => {
    return await fetch(API_URL);
    
};
