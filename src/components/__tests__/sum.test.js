import { sum } from "../sum"


test("Sum function should calculate the sum of two functions",()=>{

    const result = sum(3,4);

    //assertion - if there is no assertion, the test will always pass. 
    expect(result).toBe(7);
})