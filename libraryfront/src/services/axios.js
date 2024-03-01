import axios from 'axios';

let URL_BASE = "http://localhost:5173/"

const getAllLibros = async() =>{
    try{
        const res = await axios.get(`${URL_BASE}api/library/`);
        return res.data;
    }catch(error){
        throw error;
    }
}

const ordenAutor = async() =>{
    try{
        const res = await axios.get(`${URL_BASE}api/library/author`);
        return res.data;
    }catch(error){
        throw error;
    }
}

const ordenFecha = async() =>{
    try{
        const res = await axios.get(`${URL_BASE}api/library/publicationDate`)
        return res.data;
    }catch(error){
        throw error;
    }
}

const agregarlibro = async(book) =>{
    try{
        const res = await axios.post(`${URL_BASE}api/library/`,book);
        return res.data;
    }catch(error){
        throw error;
    }
}

const actualizarlibros = async(id, book) =>{
    try{
        const res = await axios.put(`${URL_BASE}api/library/${id}`,book);
        return res.data
    }catch(error){
        throw error;
    }
}

const borrarLibros = async(id) =>{
    try{
        const res = await axios.delete(`${URL_BASE}api/library/${id}`);
        return res.data;
    }catch(error){
        throw error;
    }
}

export {
    getAllLibros,
    ordenAutor,
    ordenFecha,
    agregarlibro,
    actualizarlibros,
    borrarLibros,
}