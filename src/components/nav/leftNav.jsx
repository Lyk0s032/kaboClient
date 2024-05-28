import React from 'react';
import { AiOutlineWindows } from 'react-icons/ai';
import { GoDesktopDownload, GoHome, GoHomeFill } from 'react-icons/go';
import { RouterProvider, useLocation, useNavigate } from 'react-router-dom';
export default function LeftNav(){
    const navigation = useNavigate();

    const location = useLocation();
    return (
        <div className='leftNav'>
            {
                console.log(location.pathname)
            }
            <nav className='nav top-options'>
                <ul>
                    <li className={location.pathname == '/' ? 'active' : null}>
                        <div onClick={() => navigation('/')}>
                            <GoHome className='icon' /><br />
                            <span>Principal</span>
                        </div>
                    </li>
                    <li className={location.pathname == '/p' ? 'active' : null}>
                        <div onClick={() => navigation('/p')}>
                            <AiOutlineWindows className='icon' /><br />
                            <span>Proyectos</span>
                        </div>
                    </li>

                </ul>
            </nav>  
            <nav className='nav Bottom-options'>
                <ul>
                    <li>
                        <div>
                            <GoDesktopDownload className='icon' /><br />
                            <span>CV</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    ) 
}