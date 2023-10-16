import { createContext } from "react";

const UserContext = createContext({ // giving piece of info that it will hold. 
    loggedInUser : "Default User",
}); 

export default UserContext;