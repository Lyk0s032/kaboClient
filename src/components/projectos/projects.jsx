import React, { useState } from 'react';
import ViewProject from '../g/viewProject';
import { useSearchParams } from 'react-router-dom';

export default function Projects(props){
    const [modal, setModal] = useState(false);
    const carga = props.carga;
    const projects = props.projects;

    // Parametros
    const [params, setParams] = useSearchParams();

    if(modal == true){
         document.addEventListener('keyup', (e) => {
            if(e.keyCode == "27" || e.code == 'Escape'){
                setModal(!modal)
            }
        })

    }else{
        document.addEventListener('keyup', (e) => {
            if(e.code == 'ArrowDown'){
                const d = document.getElementById('scrollPage');
                d.scrollTo({
                    top: d.scrollTop + 400,
                    behavior: 'smooth'
                })
                // alert('hola')
                // return d.scroll(0, d.scrollTop + 100)
            }

            if(e.code == 'ArrowUp'){
                const d = document.getElementById('scrollPage');
                // alert('hola')
                console.log(d.scrollTop)

                if(d.scrollTop >=400){
                    d.scrollTo({
                        top: d.scrollTop - 400,
                        behavior: 'smooth'

                    })
                    
                }else{
                    d.scrollTo({
                        top: 0,
                        behavior: 'smooth'

                    })
                }
            }
        }) 

    }
      
        
    return ( 
        <div className='PrincipalProjects'> 

            
            <div className='containerThisPage'>
                <div className='smallTextLeft'>
                    <div className='containerLeft'>
                        <div className='head'>
                            <h1>KABO</h1>
                            <strong>Junior Fullstack Developer</strong><br />
                            <span>
                                Algunos proyectos en los que he tenido la oportunidad de trabajar
                            </span>
                        </div>
                    </div>
                </div>
                <div className='smallRightProjects'>
                    <div className='scrollProjects' id="scrollPage">
                        {/* <div className='smallText'>
                            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est obcaecati repellendus, atque accusantium deserunt sit, aspernatur doloremque minima inventore, cumque sed libero asperiores eveniet dolore illo dolores? Excepturi, reiciendis eius.</span>
                        </div> */}
                        {
                            carga || !projects ?
                                <div className='loading'>
                                    <img src="https://koriny-site.s3.amazonaws.com/koriny/kodkodkod/loading.gif" alt="" />
                                </div> 
                                :
                                <div className='listProjects'>
                                    {/* <div className='title-seccion'>
                                        <span>Desarrollo web</span>
                                    </div> */}
                                    {
                                        projects && projects.length ?
                                            projects.map((item, i) => {
                                                return (
                                                    <div className='projectItem' key={i+1} onClick={() => {
                                                        params.set('watch', item.id);
                                                        setParams(params);
                                                        // setModal(!modal)
                                                    }}>
                                                        <div className='containerItem'>
                                                            <div className='img'>
                                                                <img src={item.wallpaper} alt="" />
                                                            </div>
                                                            <div className='containerBuild'>
                                                                <div className='topInformation'>
                                                                    <h3>{item.nameProject}</h3>
                                                                    <span>
                                                                        {item.description}
                                                                    </span>
                                                                </div>
                                                                <div className='tags'>
                                                                    {
                                                                        item.tags && item.tags.length ?
                                                                            item.tags.map((tag, z) => {
                                                                                if(z + 1 < 3){
                                                                                    return (
                                                                                    <button>
                                                                                        <span>{tag}</span>
                                                                                    </button>
                                                                                    )
                                                                                }
                                                                            })
                                                                        :null
                                                                    }
                                                                    
                                                                    
                                                                    <button>
                                                                        <span>Javascript</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        :
                                            <h1>No hay registros</h1>
                                    }

                                </div>
                        }
                        
                    </div>
                </div>
            </div>
            {/* <div className='boxSectorProjects'>

                <div className='title'>
                    <h3>Proyectos FRONTEND</h3>
                </div>
                <div className='containerProjects'>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95176.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='boxSectorProjects'>

                <div className='title'>
                    <h3>Proyectos BACKEND</h3>
                </div>
                <div className='containerProjects'>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95176.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='boxSectorProjects'>

                <div className='title'>
                    <h3>Proyectos MOBILE</h3>
                </div>
                <div className='containerProjects'>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95176.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='p'>
                        <div className='img'>
                            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                        </div>
                        <div className='fastDesc'>
                            <h3>Todos somos genios</h3>
                            <span>Desarrollado en: </span>
                            <div className='lenguajes'>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='lenguage'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}