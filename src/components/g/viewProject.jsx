import React, { useEffect } from 'react';
import { BsArrowLeft, BsBox, BsCalendar3, BsTag } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../store/actions/actions';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function ViewProject(props){
    const dispatch = useDispatch();
    const project = useSelector(store => store.project);
    const load = useSelector(store => store.loadingProject);

    const rute = props.rute;
    const navigation = useNavigate();
    // Obtenemos ruta
    const [params, setParams] = useSearchParams();
    useEffect(() => {
        dispatch(actions.axiosGetProject(true, params.get('watch') ? params.get('watch') : null));
    }, [])
    document.addEventListener('keyup', (e) => {
        
        if(e.code == 'ArrowRight'){
            const screen = document.getElementById('Screenshots');
            screen.scrollTo({
                left: screen.scrollLeft + 500,
                behavior: 'smooth'
            })
            // alert('hola')
            // return d.scroll(0, d.scrollTop + 100)
        }

        if(e.code == 'ArrowLeft'){
            const screen = document.getElementById('Screenshots');
            // alert('hola')
            if(screen.scrollLeft >=500){
                screen.scrollTo({
                    left: screen.scrollLeft - 500,
                    behavior: 'smooth'

                })
                
            }else{
                screen.scrollTo({
                    left: 0,
                    behavior: 'smooth'

                })
            }
        }
        // General Scroll
        if(e.code == 'ArrowDown'){
            const scrollGeneral = document.getElementById('generalScroll');
            scrollGeneral.scrollTo({
                top: scrollGeneral.scrollTop + 200,
                behavior: 'smooth'
            })
            // alert('hola')
            // return d.scroll(0, d.scrollTop + 100)
        }

        if(e.code == 'ArrowUp'){
            const scrollGeneral = document.getElementById('generalScroll');
            if(scrollGeneral.scrollTop >=200){
                scrollGeneral.scrollTo({
                    top: scrollGeneral.scrollTop - 200,
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

    return (
        <div className='viewProject'>
  
            <div className='modalView'>
                {
                    load == true || !project ?
                        <div className='loading'>
                            <img src="https://koriny-site.s3.amazonaws.com/koriny/kodkodkod/loading.gif" alt="" />
                        </div>
                    :
                    <div className='boxView'>
                    <div className='containerView'>
                        <div className='leftNavButton'>
                            <button onClick={() => {
                                params.delete('watch');
                                setParams(params);
                            }}>
                                <BsArrowLeft className='icon' />
                            </button>
                        </div>
                        <div className='leftProject'>
                            <div className='topInformation'>
                                <div className='img'>
                                    <img src={project.wallpaper} alt="" />
                                </div>
                                <div className='name'>
                                    <h1>{project.nameProject}</h1>
                                    <span>
                                        {project.category}
                                    </span>
                                </div>
                                <div className='btns'>
                                {
                                    project.avaliable ?
                                    <button onClick={() => {
                                        window.open(project.link)
                                    }}>
                                        <span>Visitar</span>
                                    </button>
                                    :
                                    <button>
                                        <span>Solo vista</span>
                                    </button>
                                }
                                </div>
                            </div>
                            <div className='enlace'>
                                <button onClick={() => {
                                        window.open(project.link)
                                    }}><span>{project.link}</span></button>
                            </div>
                        </div>
                        <div className='rightContaint'>
                            <div className='scrollDiv' id="generalScroll">
                                <div className='generalInformation'>
                                    <div className='subBoxView'>
                                        <div className='header'>
                                            <h3>Capturas de pantalla</h3>
                                        </div>
                                        <div className='contSubBoxView'>
                                            <div className='screenshots' id="Screenshots">
                                                <div className='scrollHorizontal'>
                                                    {
                                                        project.imagenes && project.imagenes.length ?
                                                            project.imagenes.map((screenshot, i) =>{
                                                                return (
                                                                    <div className='screenshot' key={i+1}>
                                                                        <img src={screenshot.screenshot} alt="" />
                                                                    </div>
                                                                )
                                                            })
                                                        : <h2>No hay Screenshots disponibles</h2>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden'>
                                        {
                                            project.avaliable ?
                                            <button onClick={() =>{
                                                window.open(project.link)
                                            }}>
                                                <span>Visitar</span>
                                            </button>
                                            :
                                            <button >
                                                <span>Solo vista</span>
                                            </button>
                                        }
                                    </div>
                                    <div className='subBoxView'>
                                        <div className='header'>
                                            <h3>Descripción</h3>
                                        </div>
                                        <div className='contSubBoxView'>
                                            <div className='description'>
                                                <div className='hidden'>
                                                    <strong>{project.nameProject}</strong>
                                                </div>
                                                <span>
                                                    {
                                                        project.description
                                                    }
                                                </span>
                                                
                                            </div>
                                            <div className='hidden'>
                                                <div className='tags-h'>
                                                        <span>Javascript, </span>
                                                        <span>NodeJs</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='subBoxView'>
                                        <div className='header'>
                                            <h3>Informacion adicional</h3>
                                        </div>
                                        <div className='contSubBoxView'>
                                            <div className='more'>
                                                <div className='boxMore'>
                                                    <div className='header-box'>
                                                        <BsBox className='icon' />
                                                        <span>Desarrollado por</span>
                                                    </div>
                                                    <div className='desc'>
                                                        <span className='descSpan'>
                                                            <span>Kevin Andrés Bolaños</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='boxMore'>
                                                    <div className='header-box'>
                                                        <BsCalendar3 className='icon' />
                                                        <span>Fecha</span>
                                                    </div>
                                                    <div className='desc'>
                                                        <span className='descSpan'>
                                                            <span>{new Date(project.time.split('T')[0]).toLocaleDateString("es-ES", {day: "numeric", month: "long", year:"numeric"})}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='boxMore'>
                                                    <div className='header-box'>
                                                        <BsTag className='icon' />
                                                        <span>Categoría</span>
                                                    </div>
                                                    <div className='desc'>
                                                        <span className='descSpan'>
                                                            <span>{project.category}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='boxMore'>
                                                    <div className='header-box'>
                                                        <BsTag className='icon' />
                                                        <span>Direccion</span>
                                                    </div>
                                                    <div className='desc'>
                                                        <span className='descSpan'>
                                                            {
                                                                project.avaliable && project.link ?
                                                                <span>{project.link}</span>
                                                                :
                                                                <span>Enlace no disponible</span>
                                                            }
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='subBoxView H'>
                                        <div className='header'>
                                            <h3>Tags</h3>
                                        </div>
                                        <div className='contSubBoxView'>
                                            <div className='tags'>
                                                {
                                                    project.tags && project.tags.length ?
                                                        project.tags.map((tag, i) => {
                                                            return (
                                                                <button key={i+1}>
                                                                    <span>{tag}</span>
                                                                </button>
                                                            )
                                                        })
                                                    : 
                                                        <span>
                                                            No hay tags registradas.
                                                        </span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                }
            </div>
        </div>
    )
}