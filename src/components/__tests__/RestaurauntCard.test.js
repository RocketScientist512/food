import React from "react"
import { render } from "@testing-library/react"
import RestaurauntCard from "../RestaurauntCard"
import MOCK_DATA from "../mocks/ResCardMocks.json"
import "@testing-library/jest-dom"


//we are writing code to test for prop information being passed. We are checking mock data
//mock data added to Mocks > ResCardMocks.json 

it("Should render restauraunt card component with data", ()=>{
    render(<RestaurauntCard resData={MOCK_DATA}/>);

    const resName = screen.getByText("Andhra Gunpowder");
    expect(resName).toBeInTheDocument();
})