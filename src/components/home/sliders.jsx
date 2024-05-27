import React, { useState } from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Slider(props){
    const projects = props.projects;
    const carga = props.carga;
    const [watch, setWatch] = useState(0);
    const [params,setParams] = useSearchParams();

    const navigation = useNavigate();

    const move = (lade) => {
        const screen = document.getElementById('ScrollProjects');
        if(lade == 'right'){
            screen.scrollTo({
                left: watch >= 3 ? 0 : screen.scrollLeft +280,
                behavior: 'smooth'
            });
            setWatch(watch >= 3 ? 0 : watch + 1)
        }else{
            screen.scrollTo({
                left: screen.scrollLeft >= 280 ? screen.scrollLeft - 280 : 0,
                behavior: 'smooth'
            })
            setWatch(watch == 0 ? 0 : watch - 1)                
        }
    }
    return (
        <div className='sliderProject'>
            <div className='controllers-nav'>
                <div className='btns'>
                    <button onClick={() => move('left')}>
                        <FaChevronLeft className="icon" />
                    </button>
                </div>
                <div className='btns R'>
                    <button onClick={() => move('right',)}>
                        <FaChevronRight className="icon" />
                    </button>
                </div>
            </div>
            <div className='containerSlider' id="ScrollProjects">
                
                <div className='scroll' >
                    {
                        projects && projects.length ?
                            projects.map((item, i) => { 
                                if(i+1 <= 4){
                                    return (
                                        <div className={watch == i ? 'project Active' : 'project'} key={i+1}>
                                            <div className='subProject'>
                                                <div className="wallpaper">
                                                    <img src={item.wallpaper} alt="" />
                                                </div>
                                                <div className='opacity'></div>
                                                {
                                                    i == watch ?
                                                    <div className='descWallpaper'>
                                                        <div className='informationWorking'>
                                                            <h1>{item.nameProject}</h1>
                                                            <span>
                                                                {item.description}
                                                            </span>
                                                            <div className='btn'>
                                                                <button onClick={() => {
                                                                    window.open(item.link)
                                                                }}>
                                                                    <FaExternalLinkAlt className='icon' />
                                                                    <span>
                                                                        Visitar
                                                                    </span>
                                                                </button>
                                                                <button className="details" onClick={() => {
                                                                    params.set('watch', item.id);
                                                                    setParams(params);
                                                                }}> 
                                                                    <AiOutlineExclamationCircle className='icon' />
                                                                    <span>
                                                                        Detalles
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :null
                                                }
                                            </div>
                                        </div>  
                                        
                                    )
                                }
                            })
                        : <h1> No hay proyectos</h1>
                        
                    }
                    <div className='project Navigation'>
                        <div className='opacityWallpaper'>
                            
                        </div>
                        <div className='containerMore'>
                            <div className='go'>
                                <h3>{projects.length - 4} Proyectos más</h3>
                                <span>Ver lista completa</span>
                                <button onClick={() => navigation('/p')}>
                                    <span>Ver todo</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
            
            
        </div>
    )
}