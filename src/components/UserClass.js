//writing a class based component here
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            userInfo:{
                name: "Dummy data",
                location: "Default location",
                avatar_url: "dummy photo"
            }
        };
        console.log(this.props.name + " Child Constructor");
    }

   async componentDidMount(){
        console.log(this.props.name + " Child Component Did Mount");
        //API Call

        const data = await fetch("https://api.github.com/users/rocketscientist512"); 
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    render(){
        // const{name, location} = this.props;

        console.log(this.props.name + " Child Render");

        return (
            <div className="user-card">
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>{
                    //never update state variables directly.  
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Count increase</button><br></br><br></br><br></br>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location:{this.state.userInfo.location}</h3>
                <h4>Contact: @ThoughtsLexicon</h4>
            </div>
        );
    }
}

export default UserClass;