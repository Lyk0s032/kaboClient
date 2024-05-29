import React from 'react';
import Slider from './sliders';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

export default function Home(props){
    const carga = props.carga;
    const projects = props.projects;
    const [params , setParams ] = useSearchParams();
    const listFix = [
        {name:'AdobeXD', img: 'https://rongcon.net/wp-content/uploads/2020/12/adobe-xd-2020-build-35-2-12-ban-luot-bo-creative-cloud-phan-mem-thiet-ke-ux-ui_5fdb46e005ac2-768x768.png'},
        {name:'Slack', img: 'https://th.bing.com/th/id/OIP.zQx4lAQ4wDnsHavraLPzOQHaHa?rs=1&pid=ImgDetMain'},
        {name:'VSC', img: 'https://user-images.githubusercontent.com/29654835/27530003-e78876b8-5a13-11e7-8863-83fbdb900f72.png'},
        {name:'Git', img: 'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253808/git-icon-icon-md.png'},
        {name:'GitHub', img: 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png'},
        {name:'Vite', img: 'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png'},
        {name:'Spreedsheet', img: 'https://th.bing.com/th/id/OIP.GJT32HntNdXnyODtapukTAHaHa?rs=1&pid=ImgDetMain'},
        {name:'AdobeXD', img: 'https://rongcon.net/wp-content/uploads/2020/12/adobe-xd-2020-build-35-2-12-ban-luot-bo-creative-cloud-phan-mem-thiet-ke-ux-ui_5fdb46e005ac2-768x768.png'},
        {name: 'Excalidraw', img: 'https://th.bing.com/th/id/OIP.GJT32HntNdXnyODtapukTAHaHa?rs=1&pid=ImgDetMain'},
        {name:'GitHub', img: 'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png'},

    ]

    
    return (
        <div className='home' id="kaboScroll">
            <div className='firstSeccion'>
                <Slider carga={carga} projects={projects}/>
            </div>
            <div className='twoSeccion'>
               <div className='container'>
                    <div className='avatarLeft'>
                        <div className='avatar'>
                            <img src="https://res.cloudinary.com/dr8pv3hga/image/upload/v1716928021/me/meWallpaper_b3alz6.png" alt="" />
                        </div>
                    </div>
                    <div className='rightContainer'>
                        <div className='titleDescription'>
                            <h1>Hola, soy Kevin</h1>
                            <span>
                                Soy Junior Fullstack Developer. Me gusta resolver problemas y trabajar en equipo. <br /><br />
                                
                            </span>
                        
                        <div className='socialMedia'>
                            <div className='networking'>
                                <button onClick={() => {
                                    window.open('https://instagram.com/keviin_shg')
                                }}>
                                    <FaInstagram className='icon' />
                                </button>
                                <button onClick={() =>{
                                    window.open('https://linkedin.com/in/kevinbolaños')
                                }}>
                                    <FaLinkedin className='icon' />
                                </button>
                                <button onClick={() => {
                                    window.open('https://facebook.com/lyk0sll')
                                }}>
                                    <FaFacebook className='icon' />
                                </button>
                            </div>
                        </div>
                        </div>
                        
                    </div>
               </div>
            </div>
            <div className='pilarsContainer'>
                <div className='containerPilar'>
                <div className='pilar'>
                        <div className='header'>
                            <div className='icon'>
                                <AiFillHome className='iconPilar' />
                            </div>
                            <div className='tl'>
                                <h3>Diseñador</h3>
                                <span>
                                    Me apasiona el diseño y el orden al momento de 
                                    aterrizar ideas a la realidad. Amante del <strong>minimalismo</strong>. 
                                </span>
                            </div>
                        </div>
                        <div className='contentPilar'>
                            <div className='seccion'>
                                <h3>Cosas que disfruto diseñando:</h3>
                                <div className='res'>
                                    <span>UX, UI, Web, Mobile</span>
                                </div>
                            </div>
                            <div className='seccion'>
                                <h3>Herramientas de diseño:</h3>
                                <div className='navSeccion'>
                                    <ul>
                                        <li>
                                            <span>Pluma y Papel</span>
                                        </li>
                                        <li>
                                            <span>Excalidraw</span>
                                        </li>
                                        <li>
                                            <span>Corel Draw</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pilar Center'>
                        <div className='header'>
                            <div className='icon'>
                                <AiFillHome className='iconPilar' />
                            </div>
                            <div className='tl'>
                                <h3>Fullstack Developer</h3>
                                <span>
                                    Me divierto demasiado desarrollando en el frontend, y codeando plataformas en el backend
                                </span>
                            </div>
                        </div>
                        <div className='contentPilar'>
                            <div className='seccion'>
                                <h3>Desarrollo Frontend</h3>
                                <div className='navSeccion'>
                                    <ul>
                                        <li>
                                            <span>Javascript</span>
                                        </li>
                                        <li>
                                            <span>ReactJS</span>
                                        </li>
                                        <li>
                                            <span>Less</span>
                                        </li>
                                        <li>
                                            <span>Redux</span>
                                        </li>
                                        <li>
                                            <span>Bootstrap</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='seccion'>
                                <h3>Desarrollo Backend</h3>
                                <div className='navSeccion'>
                                    <ul>
                                        <li>
                                            <span>NodeJS</span>
                                        </li>
                                        <li>
                                            <span>Python</span>
                                        </li>
                                        <li>
                                            <span>PostgreSQL</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='seccion'>
                                <h3>Desarrollo Mobile</h3>
                                <div className='navSeccion'>
                                    <ul>
                                        <li>
                                            <span>React Native</span>
                                        </li>
                                        <li>
                                            <span>Java</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pilar'>
                        <div className='header'>
                            <div className='icon'>
                                <AiFillHome className='iconPilar' />
                            </div>
                            <div className='tl'>
                                <h3>Personal</h3>
                                <span>
                                    Me apasiona el aprendizaje y el autodesarrollo. <br /><br />
                                </span>
                            </div>
                        </div>
                        <div className='contentPilar'>
                            <div className='seccion'>
                                <h3>Idiomas:</h3>
                                <div className='navSeccion'>
                                    <ul>
                                        <li>
                                            <span>Español (Natal)</span>
                                        </li>
                                        <li>
                                            <span>Ingles (Intermedio)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='seccion'>
                                <h3>Mis hobbies:</h3>
                                <div className='navSeccion'>
                                    <ul>
                                        <li>
                                            <span>Leer</span>
                                        </li>
                                        <li>
                                            <span>Escribir</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='seccion'>
                                <h3>Mis pasiones</h3>
                                <div className='navSeccion'>
                                    <ul>
                                        <li>
                                            <span>Astronomía</span>
                                        </li>
                                        <li>
                                            <span>Física</span>
                                        </li>
                                        <li>
                                            <span>Codear</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='lastItemProjects'>
                <div className='title'>
                    <h1>Últimos Proyectos</h1>
                    <span>Algunos proyectos personales de mi tiempo libre.</span>
                </div>

                <div className='containerLastProjects'>
                    <div className='containerLast'>
                        <div className='wallpaper'>
                            <img src="https://res.cloudinary.com/dr8pv3hga/image/upload/v1716599704/screenshotsProjects/lattice/Diapositiva10_eb8rnf.jpg" alt="" />
                        </div>
                        <div className='desc'>
                            <div className='containerDesc'>
                                <div className='res'>
                                    <strong>En desarrollo...</strong>
                                    <h1>Lattice</h1>
                                    <span>
                                        Lattice ha sido un proyecto personal. Esta siendo desarrollado para que las
                                        pequeñas empresas u emprendedores, logren automatizar algunos procesos (Finanzas, tareas, clientes, entre otros) de forma rápida y precisa.
                                    </span>

                                </div>
                                <div className='btn'>
                                    <button onClick={() => {
                                        params.set('watch', 2);
                                        setParams(params);
                                    }}>
                                        <span>Ver detalles</span>
                                    </button>
                                    <button className="link" onClick={() => {
                                        window.open('https://lattice-cliente.vercel.app')
                                    }}>Visitar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerLastProjects'>
                    <div className='containerLast Reverse'>
                        <div className='wallpaper'>
                            <img src="https://res.cloudinary.com/dr8pv3hga/image/upload/v1716954016/nasur/landing.png" alt="" />
                        </div>
                        <div className='desc'>
                            <div className='containerDesc'>
                                <div className='res'>
                                    <strong>En proceso...</strong>
                                    <h1>NovaX</h1>
                                    <span>
                                        La plataforma NovaX esta siendo desarrollada en un intento por encontrar un punto de unión entre 
                                        el mundo del azar, y las inversiones empresariales.
                                    </span>
                                
                                </div>
                                <div className='btn'>
                                    <button onClick={() => {
                                        params.set('watch', 8);
                                        setParams(params);
                                    }}>
                                        <span>Ver proyecto</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='fotter'>
                    <img src="https://mattfarley.ca/img/hero-devices.svg" alt="" />
                </div>
            </div>
        </div>
    )
}