export function activateNotification(type, mensaje, icono){    
    createNotification(getColor(type), mensaje, icono);    
}

function getColor(type){   
    let color; 
    switch(type){
        case "ok":
            color = "--ok-bg-color";
            break;
        case "warn":
            color = "--warn-bg-color";
            break;
        case "error":
            color = "--error-bg-color";
            break;
    }
    return color;
}

function createNotification(color, mensaje, icono){
    let newNotification = document.createElement("div");    

    newNotification.setAttribute("id", "notification");
    let notification = document.getElementById("notification");

    document.body.appendChild(newNotification);

    if(notification == null){
        let notification_container = document.createElement("div");
        let notification_message = document.createElement("p");
        let notification_icon = document.createElement("p");
        let notification_progress = document.createElement("span");

        newNotification.appendChild(notification_container);
        newNotification.appendChild(notification_progress);

        notification_container.appendChild(notification_message);
        notification_container.appendChild(notification_icon);

        newNotification.classList.add("notification");
        notification_container.classList.add("notification-container");

        notification_progress.classList.add("progress");

        newNotification.classList.add('notification-animation');

        notification_icon.classList.add('notification-icon'); 
        
        notification_message.innerHTML = mensaje;
        notification_icon.innerHTML = icono;
        if(color != null)
            newNotification.style = "--banner-bg-color: var(" + color + ")";
    }else{
        newNotification.remove();
    }   

    setTimeout(()=>{
        newNotification.remove();
    }, 4000);
}