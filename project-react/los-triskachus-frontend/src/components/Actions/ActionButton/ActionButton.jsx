import classes from './ActionButton.module.scss';
import { Link } from "react-router-dom";
import { MdLogout, MdPerson } from 'react-icons/md';

const ActionButton = ({ Icon = "" }) => {
    const icons = [
        {
            IconName: "Logout",
            Message: "Cerrar sesión",
            classes: classes["Icon"],
            Icon: MdLogout,
            Link: "/Login"
        },
        {
            IconName: "Profile",
            Message: "Perfil",
            classes: classes["Icon"],
            Icon: MdPerson,
            Link: "/Profile"
        },
    ];

    const iconToUse = icons.filter(icon => icon.IconName === Icon);
    Icon = iconToUse[0].Icon;
    const IconName = iconToUse[0].IconName;
    const iconToUseElements = iconToUse.length !== 0 ? [
        <Icon key={ Icon } className={ classes["Icon"] } />,
        <p key={ iconToUse[0].IconName } className={ classes["IconMessage"] }> {iconToUse[0].Message}</p>
    ] : "";    

    return (
        <>
        { IconName === 'Profile' ? 
            <Link to={ iconToUse[0].Link } className={ [classes["ActionButton"], classes["Profile"]].join(" ") }>
                { iconToUseElements }
                <div className={ classes["Profile-decoration"] }>
                </div>
            </Link>
            :
            <Link to={ iconToUse[0].Link } className={ classes["ActionButton"] }>
                { iconToUseElements }
            </Link>
        }
        </>
    );
}

export default ActionButton;