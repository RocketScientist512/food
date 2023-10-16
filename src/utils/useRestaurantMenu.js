import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


//this is the hook for restauraunt menu. Its always good to name the hook after the file its being used for. 
//React understands that 'use' is a hook. 
const useRestaurantMenu = (resId)  => {

    const [resInfo, setResInfo] = useState(null); 

        //we use this to fetch data in the components as well. 
        useEffect( () =>{
            fecthData();    
        },[]);

    const fecthData = async() => {
            const data = await fetch(MENU_API + resId); 
            const json = await data.json();
            setResInfo(json.data);
        };
        return resInfo;
};

export default useRestaurantMenu;    

