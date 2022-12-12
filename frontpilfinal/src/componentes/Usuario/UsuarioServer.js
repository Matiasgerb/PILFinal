// Conexión con la API del backend.
const API_URL = '127.0.0.1:8000/usuario/';

//recibir usuario
export const getUsuario = async () => {
    return fetch(API_URL); 
}

export const traerUsuario = [
    {
        idUsuario: 1,

    }
]

export const updateUsuario = async () => {
    return fetch(API_URL); 
}

export const listUsuario = async () => {
    return fetch(API_URL); 
}

export const deleteUsuario = async () => {
    return fetch(API_URL); 
}

export const createUsuarios = async () => {
    return fetch(API_URL); 
}