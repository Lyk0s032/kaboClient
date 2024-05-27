import React from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import PanelProject from './projectos/panelProject';
import RoutesHome from './home/routeHome';
import ViewProject from './g/viewProject';

export default function PanelRoutes(props){
    const load = props.carga;
    const projects = props.projects;

    const [params, setParams] = useSearchParams();

    if(params.get('watch')){
        document.addEventListener('keyup', (e) => {
            if(e.keyCode == "27" || e.code == 'Escape'){
                params.delete('watch');
                setParams(params);
            }
        })
    }
    return (
        <div>
            {
                params.get('watch') ? <ViewProject />  : null 
            }
            <Routes>
                <Route path="/" element={<RoutesHome carga={load} projects={projects}/>}/>
                <Route path="/p/*" element={<PanelProject carga={load} projects={projects} />}/> {/* Pasamos datos por parametro entre rutas. */}

            </Routes>
        </div>
    )
}