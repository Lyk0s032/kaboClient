import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, useSearchParams } from 'react-router-dom'
import Home from './components/home/home'
import LeftNav from './components/nav/leftNav'
import RoutesHome from './components/home/routeHome'
import PanelProject from './components/projectos/panelProject';
import * as actions from './components/store/actions/actions';
import { useDispatch, useSelector } from 'react-redux'
import ViewProject from './components/g/viewProject'
import PanelRoutes from './components/panelRoutes'

function App() {
  const dispatch = useDispatch();
  const load = useSelector(store => store.loadingProjects); // Obtenemos la carga del estado general.
  const projects = useSelector(store => store.projects);    // Obtenemos la lista del proyectos del estado general.

  document.addEventListener('keyup', (e) => {
    
    // General Scroll
    if(e.code == 'ArrowDown'){
        const scrollGeneral = document.getElementById('routesScroll');
        scrollGeneral.scrollTo({
            top: scrollGeneral.scrollTop + 400,
            behavior: 'smooth'
        })
        // alert('hola')
        // return d.scroll(0, d.scrollTop + 100)
    }

    if(e.code == 'ArrowUp'){
        const scrollGeneral = document.getElementById('routesScroll');
        // alert('hola')
        console.log(scrollGeneral.scrollTop)

        if(scrollGeneral.scrollTop >=400){
            scrollGeneral.scrollTo({
                top: scrollGeneral.scrollTop - 400,
                behavior: 'smooth'

            })
            
        }else{
            scrollGeneral.scrollTo({
                top: 0,
                behavior: 'smooth'

            })
        }
    }
})
  
  useEffect(() => {
      // Usamos dispatch para disparar la peticion y el cambio de estado.
      dispatch(actions.axiosGetProjects(true))
  }, []) 
  return (
    <div className='app'>
      
      <Router>
        <div className='left'>
          <LeftNav />
        </div>
        <div className='containt' id="routesScroll">
          {
            load == true || !projects ? <h1>Cargando....</h1>
            :
            <Routes>
              <Route path="/*" element={<PanelRoutes load={load} projects={projects} /> } />
             
            </Routes>
          }
          
        </div>
      </Router>
    </div>
  )
}

export default App
