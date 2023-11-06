import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>{
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const createPerson = newObject =>{
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = idPersonToDelete =>{
    axios.delete(`${baseUrl}/${idPersonToDelete}`)
}

const updatePerson = (idPerson, changedPerson) => {
    const request = axios.put(`${baseUrl}/${idPerson}`, changedPerson)
    return request.then(response => response.data)
}

export default {getAll, createPerson, updatePerson, deletePerson} 