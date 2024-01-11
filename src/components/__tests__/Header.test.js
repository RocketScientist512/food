import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utils/appstore";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom"

it("Should render header component with a login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

       const LoginButton=  screen.getByRole("button", {name : "Login"}) ;
    //    const LoginButton=  screen.getByText("Login") ;

       expect(LoginButton).toBeInTheDocument();

});

it("Should work when someone has clicked on the logout button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    fireEvent.click(LoginButton);
    const LogoutButton = screen.getByRole("button", {name:"Logout"});
    expect(LogoutButton).toBeInTheDocument();

});