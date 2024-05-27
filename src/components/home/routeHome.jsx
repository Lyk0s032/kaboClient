import React from 'react';
import Home from './home';
import { Routes, Route, useSearchParams} from 'react-router-dom';
import ViewProject from '../g/viewProject';
export default function RoutesHome(props){

    // Recibimos las propiedades
    const carga = props.carga;
    const projects = props.projects;
    
    const [params, setParams] = useSearchParams();

    
    return (
        <div className='routes' id="routesScroll">
            
            <Routes>
                <Route path="/" element={<Home carga={carga} projects={projects} />} />
            </Routes>
        </div>
    )
}