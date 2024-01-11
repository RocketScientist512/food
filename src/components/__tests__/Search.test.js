import { fireEvent, render, waitForElementToBeRemoved } from "@testing-library/react"
import React from "react"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body"
import MOCK_DATA from "../mocks/MockResListData.json"
import "@testing-library/jest-dom"

//we need to mock the fetch function here
//we don't make an actual n/w call in this test case. This is not being run on a browser, but a JS DOM. This test case will work even without internet.
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the body component with the search button", async ()=>{
    //this will be a little different because there is an await/fetch request being used here. 
    //act returns a promise, which returns a callback function. This is an async function that returns your render i.e. the Body component.
    await act(async() =>{render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    );})

    const SearchButton = screen.getByRole("button", {name: "Search"});
    console.log(SearchButton);
        //since we have nothing present in the search button, then we can take the help of getByTestId(). This can be used where we have nothing to pick up the value of an element
        const SearchInput = screen.getByTestId("searchInput");
        //we'll go back to where the input box is -> <Body /> and add a attribute -> data-testid and provide a value to it. 


        //this object is simulating what we get inside the 'onchange(e)' function in <Body />
        fireEvent.change(SearchInput, {target: {value : "burger"}});

        fireEvent.click(SearchButton);

        //screen should load 4 cards
        const cards= screen.getAllByTestId("resCard");

        expect(cards.length).toBe(4);

   // expect(SearchButton).toBeInTheDocument();
});