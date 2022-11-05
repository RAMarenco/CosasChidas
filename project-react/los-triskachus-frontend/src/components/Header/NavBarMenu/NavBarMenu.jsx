import { useEffect, useRef } from 'react';

import SideMenuClasses from './SideMenu/SideMenu.module.scss';
import MainLayoutClasses from '../../../Layouts/MainLayout.module.scss';
import classes from './NavBarMenu.module.scss';
import logo from '../../../assets/logo.png';
import { MdMenu } from 'react-icons/md';
import { Link } from "react-router-dom";

const NavBarMenu = () => {
    useEffect(() => {
        document.addEventListener("click", handleClick, true);
    }, []);

    const refOne = useRef(null);

    const handleClick = (e) => {
        
        const SideMenu = document.getElementsByClassName(SideMenuClasses["SideMenu"])[0];    
        const MainWrapper = document.getElementsByClassName(MainLayoutClasses["Main-Wrapper"])[0];        
        if (refOne.current.contains(e.target)) {
            SideMenu.classList.toggle(SideMenuClasses["SideMenu-active"]);
            MainWrapper.classList.toggle(MainLayoutClasses["Main-Wrapper-black"]);
        }
        
    };

    return (
        <div className={ classes["NavBarMenu"] }>
            <div ref={refOne}>
                <MdMenu className={ classes["NavBarMenu-Icon"]} />
            </div>
            
            <Link to="/">
                <figure className={ classes["logo-container"] }>
                    <img src={ logo } className={ classes["logo"] } alt="Tienduki-logo" />
                </figure>
            </Link>            
        </div>
    );
}

export default NavBarMenu;