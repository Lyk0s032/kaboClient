import {createStore} from 'redux';

const initialState = {
    // Estados generales
    projects:null, // Todos los proyectos.
    loadingProjects:false, // Cargando los proyectos.

    project: null, // Proyecto especifico.
    loadingProject: false, // Cargando un proyecto en especifico.
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'GETTING_PROJECTS':
            return {
                ...state,
                loadingProjects: action.payload
            }
        case 'GET_PROJECTS':
            return {
                ...state,
                projects:action.payload,
                loadingProjects: false
            }
        
        case 'GETTING_PROJECT':
            return {
                ...state,
                loadingProject: action.payload
            }
        case 'GET_PROJECT':
            return {
                ...state,
                project: action.payload,
                loadingProject: false
            }
        default:
            return {
                ...state
            }
    }
}