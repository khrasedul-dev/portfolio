import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import TopNav from './TopNav'

function Navbar() {

    const [menu,setMenu] = useState('hide')

    const showMenu = ()=>{
        if (menu == 's') {
            setMenu('hide')
        } else {
            setMenu('s')
        }
    }
    
    return(
        <>
            <TopNav/>
            <div className="header">
                <div className="container flex headerItem">
                    <div className="logo"><div className='fff sss'>KH Rasedul</div><div className="fff vvv" id="menuIcon" onClick={showMenu}>&equiv;</div></div>

                    <ul className="menuItem" id={menu}>
                        <li><NavLink exact activeClassName="navItemActive" to="/">Home</NavLink></li>
                        <li><NavLink exact activeClassName="navItemActive" to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink exact activeClassName="navItemActive" to="/services">Services</NavLink></li>
                        <li><NavLink exact activeClassName="navItemActive" to="/about">About</NavLink></li>
                        <li className='last-child'><NavLink exact activeClassName="navItemActive" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar