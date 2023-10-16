import { useEffect, useState } from "react";


const useOnlineStatus = () =>{

    const [OnlineStatus, setOnlineStatus] = useState(true);
    
    //try to check if user is online or not. 
    
    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        });
        
    }, []);


    //this will be a boolean value
    return OnlineStatus; 
};

export default useOnlineStatus; 