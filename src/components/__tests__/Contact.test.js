import React from "react"
import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

//All of this is a part of Unit Testing
//group multiple test cases to blocks
describe("Contact us page test case", ()=>{
    //in place of 'test' we can also write 'it'. 
    test("Should load us contact component", ()=>{
        render(<Contact />); //this needs to be rendered on JS Dom
    
        const heading = screen.getByRole("button");
    
        //writing assertion here
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load two input boxes in the contact component", ()=>{
        render(<Contact/>);
    
        //querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        //writing assertion here
        // expect(inputBoxes).toBeInTheDocument(); - this will give an error because expect() requires html return, but we are getting an array
        expect(inputBoxes.length).toBe(2);
    });

    //expect(inputBoxes.length).toBeTruthy();
});

