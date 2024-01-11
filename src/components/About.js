import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

//This is a class component
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent Render");
        return(
            <div>

            <h1>This is a heading</h1>
            {/* <div>
                    Logged In User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1>{loggedInUser}</h1>};
                    </UserContext.Consumer>
            </div> */}

            <h2>You should be able to understand what happens when you see this page.</h2>
            <UserClass name={"Rohan Shorey(class props)"} location={"New Delhi (Class props)"}/>
           
            </div>
        )
    }
}



// //This is a functional component
// const About = () => {
//     return(
//         <div>
//             <h1>This is a heading</h1>
//             <h2>You should be able to understand what happens when you see this page.</h2>
            
//             <UserClass name={"Rohan Shorey(class props)"} location={"New Delhi (Class props)"}/>
//         </div>
//     )
// }

export default About ;