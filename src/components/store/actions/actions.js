import axios from "axios";

import { useActionData } from "react-router-dom";

// Para cargar los proyectos
export function toGettingProjects(carga){
    return {
        type: 'GETTING_PROJECTS',
        payload: carga
    }
}

// Almacenar el estado de todos los proyectos
export function getProjects(projects){
    return {
        type: 'GET_PROJECTS',
        payload: projects
    }
}
// Petición HTTP para obtener todos los proyectos disponibles.
export function axiosGetProjects(carga){
    return function(dispatch){
        dispatch(toGettingProjects(carga));
        axios.get('pr/general')
        .then((info) => info.data)
        .then(inf => {
            return dispatch(getProjects(inf));
        })
        .catch(e => {
            if(e.response.status == 404){
                return dispatch(getProjects(404))
            }else if(e.request){
                return dispatch(getProjects('request'))
            }
        })
    }
}

// Para cargar proyecto en especifico
export function toGettingProject(carga){
    return {
        type: 'GETTING_PROJECT',
        payload: carga
    }
}

// Almacenar estado del proyecto
export function getProject(project){
    return {
        type: 'GET_PROJECT',
        payload: project
    }
}
// Petición HTTP para obtener toda la información del proyecto. Incluidas las imagenes.
export function axiosGetProject(carga, route){
    return function(dispatch){
        dispatch(toGettingProject(carga));
        axios.get('pr/watch/' + route)
        .then((info) => info.data)
        .then((data) => {
            console.log(data);
            return dispatch(getProject(data));
        })
        .catch(err => {
            // Mostramos posible error por consola.
            console.log(err);
            if(err.responses && err.response.status == 404){
                return dispatch(getProject(404))
            }else{
                return dispatch(getProject('request'))
            }

        })
    }
}