import classes from './Actions.module.scss';

import ActionButton from './ActionButton/ActionButton';

const Actions = () => {
    return (
        <div className={ classes["Actions"] }>
            <ActionButton Icon='Profile'/>
            <ActionButton Icon='Logout'/>            
        </div>
    );
}

export default Actions;