import classes from './MainLayout.module.scss';

import { useEffect, useRef } from 'react';
import { Navigate  } from 'react-router-dom';

import Home from './../views/Home/Home';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Contact from './../views/Contact/Contact';
import Profile from './../views/Profile/Profile';
import SideMenu from '../components/Header/NavBarMenu/SideMenu/SideMenu';
import SideMenuClasses from '../components/Header/NavBarMenu/SideMenu/SideMenu.module.scss';

const MainLayout = ({Page = ""}) => {
    useEffect(() => {
        document.addEventListener("click", handleClick, true);
    }, []);

    const refOne = useRef(null);

    const handleClick = (e) => {
        const SideMenu = document.getElementsByClassName(SideMenuClasses["SideMenu"])[0];
        const MainWrapper = document.getElementsByClassName(classes['Main-Wrapper'])[0];

        if (refOne.current.contains(e.target)){            
            if(MainWrapper.classList.contains(classes["Main-Wrapper-black"])) {
                SideMenu.classList.toggle(SideMenuClasses["SideMenu-active"]);
                MainWrapper.classList.toggle(classes["Main-Wrapper-black"]);
            }
        }
    } 

    const PagesList = [
        {
            PageDir: Home,
            PageName: "Home",
        },
        {
            PageDir: Contact,
            PageName: "Contact",
        },
        {
            PageDir: Profile,
            PageName: "Profile",
        }
    ];
    
    const PageFound = PagesList.filter(pageList => pageList.PageName === Page);
    const PageName = PageFound.length !== 0 ? PageFound[0].PageDir : "";

    return (
        <>
        {PageName !== "" ? 
            <>
                <SideMenu />
                <div className={ classes['Main-Wrapper'] } ref={refOne}>
                </div>  
                <Header/>
                <main>
                    <PageName />
                </main>
                <Footer/>
            </> :
            <Navigate  to="/" />
        } 
        </>
    );
}

export default MainLayout;