import classes from './Header.module.scss';

import NavBarMenu from './NavBarMenu/NavBarMenu';
import Header_SearchBar from './Header-SearchBar/Header-SearchBar';
import Actions from './../Actions/Actions';

const Header = () => {
    let user = "Client";
    return (
        <header className={ classes["Header"] }>  
            <NavBarMenu />
            {user === 'Client' && 
                <Header_SearchBar/>
            }
            <Actions />
        </header>
    );
}

export default Header;