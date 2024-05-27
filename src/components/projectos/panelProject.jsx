import React from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import Projects from './projects';
import ViewProject from '../g/viewProject';

export default function PanelProject(props){
    // Recibimos las propiedades
    const carga = props.carga;
    const projects = props.projects;


    
    return (
        <div className='project'>
            <Routes>
                <Route path="/" element={<Projects carga={carga} projects={projects}/>} />
            </Routes>
        </div>
    )
}