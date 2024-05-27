import React from 'react';
import Slider from './sliders';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Home(props){
    const carga = props.carga;
    const projects = props.projects;

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
                            <img src="https://res.cloudinary.com/dr8pv3hga/image/upload/v1716847617/avatar.jpg" alt="" />
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
                                <button>
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

            <div className='skills'>
                <div className='title'>
                    <h1>Algunas habilidades</h1>
                </div>

                <div className='containerSkills'>
                    <div className='skill'>
                        <div className='smallTitle'>
                            <h3>Desarrollo web</h3>
                        </div>
                        <div className='listItems'>
                            <div className='containerItems'>
                                <div className='item'>
                                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png" alt="" />
                                </div>
                                <div className='item'>
                                    <img src="https://th.bing.com/th/id/OIP.DN7ToydkJZEdVaJVK_NhvwAAAA?rs=1&pid=ImgDetMain" alt="" />
                                </div>
                                <div className='item'>
                                    <img src="https://th.bing.com/th/id/OIP.bI8KDjd8-nDvzTX_Uok7FwHaHa?rs=1&pid=ImgDetMain" alt="" />
                                </div>
                                <div className='item'>
                                    <img src="https://katrinayates.github.io/resume/img/logos/css3.png" alt="" />
                                </div>
                                <div className='item'>
                                    <img src="https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png" alt="" />
                                </div>
                                
                                <div className='item'>
                                    <img src="https://th.bing.com/th/id/R.40c0ab13ebdb348c12da438b21ca9ee5?rik=fkjjRZlg6AIErA&pid=ImgRaw&r=0" alt="" />
                                </div>
                                
                                
                                <div className='item'>
                                    <img src="https://th.bing.com/th/id/R.ca5246ac49ffa139a8253653cdbe94cd?rik=eIZRfRO3avsmCQ&pid=ImgRaw&r=0" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='skill'>
                        <div className='smallTitle'>
                            <h3>Desarrollo Backend</h3>
                        </div>
                        <div className='listItems'>
                            <div className='containerItems'>
                                <div className='item'>
                                    <img src="https://logodix.com/logo/1764875.png" alt="" />
                                </div>
                                <div className='item'>
                                    <img src="https://www.dicoding.com/blog/wp-content/uploads/2022/04/logo-express-js-1024x626.png" alt="" />
                                </div>
                                <div className='item'>
                                    <img src="https://th.bing.com/th/id/R.9d460ec0196c99cdb14cb98647305309?rik=%2b64YtxB0LZSCTg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpython-logo-png-open-2000.png&ehk=OtjI1WIsGN2xW1l53b3QwDql%2fKrtBvqmXkwe8GhANPY%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                </div>
                                
                                <div className='item'>
                                    <img src="https://w7.pngwing.com/pngs/657/27/png-transparent-postgresql-original-wordmark-logo-icon.png" alt="" />
                                </div>
                                <div className='item'>
                                    <img src="https://pngimg.com/uploads/mysql/mysql_PNG23.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='skill'>
                        <div className='smallTitle'>
                            <h3>Desarrollo Mobile</h3>
                        </div>
                        <div className='listItems'>
                            <div className='containerItems'>
                                <div className='item'>
                                    <img src="https://www.onu.ro/wp/wp-content/uploads/2020/03/react-native-logo-768x890.png" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='someFixs'>
                <div className='titleFix'>
                    <h3>Algunas herramientas</h3>
                </div>
                <div className='sliderFixs'>
                    <div className='marquee'>
                        {
                            listFix.map((item, i) =>  {
                                return(
                                    <div className='item' key={i+1}>
                                        <img className='fix' src={item.img} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className='lastProjects'>
                <div className='title'>
                    <h3>Últimos proyectos</h3>
                </div>
                <div className='containerProjects'>
                    <div className='twoProjects'>
                        <div className='box'>
                            <div className='header'>
                                <strong>En proceso...</strong>
                                <h3>Software de gestión empresarial</h3>
                                <span>
                                    Esto es una pequeña description del proyecto. Un ejemplo superficial de lo que
                                    realmente se ha estado haciendo.
                                </span>
                            </div>
                            <div className='containerWallpaper'>
                                <img src="https://149841302.v2.pressablecdn.com/wp-content/uploads/2021/06/adminty-html-dashboard-template.jpg" alt="" />
                            </div>

                            <div className="details">
                                <button>
                                    <span>Visitar</span>
                                </button>
                                <button className='dtl'>
                                    <span>Detalles</span>
                                </button>
                            </div>

                        </div>

                        <div className='box Gray'>
                            <div className='header'>
                                <strong>En proceso...</strong>
                                <h3>Software de gestión empresarial</h3>
                                <span>
                                    Esto es una pequeña description del proyecto. Un ejemplo superficial de lo que
                                    realmente se ha estado haciendo.
                                </span> 
                            </div>
                            <div className='containerWallpaper'>
                                <img src="https://149841302.v2.pressablecdn.com/wp-content/uploads/2021/06/adminty-html-dashboard-template.jpg" alt="" />
                            </div>
                            
                            <div className="details">
                                <button>
                                    <span>Visitar</span>
                                </button>
                                <button className='dtl'>
                                    <span>Detalles</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}