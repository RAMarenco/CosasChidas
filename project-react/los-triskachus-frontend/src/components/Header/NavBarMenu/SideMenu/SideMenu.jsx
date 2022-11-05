import classes from './SideMenu.module.scss';

import SideMenu_SearchBar from "./SideMenu-SearchBar/SideMenu-SearchBar";
import Actions from '../../../Actions/Actions';

const SideMenu = () => {
    return (
        <div className={ classes["SideMenu"] }>
            <div className={ classes["SideMenu-Container"]  }>
                <SideMenu_SearchBar />
                <div className={ classes["SideMenu-Actions"] }>
                    <Actions />
                </div>
            </div>            
        </div>
        
    );
}

export default SideMenu;