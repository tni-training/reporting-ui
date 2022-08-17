import axios from "axios";
import { act } from "react-dom/test-utils";
import { renderHook} from '@testing-library/react';
import Jobs from './../Jobs';

 
jest.spyOn(console, "error").mockImplementation(()=>{});

jest.mock("axios", ()=>({
    ...jest.requireActual("axios"),
    post: jest.fn(),
    get: jest.fn(),
}));

test("shouls return list of jobs when call", async()=>{
    const job = [{ 
        action: "XYZ",
        submissionId: "123", 
        message: "Hello", 
        jarParams: "word", 
        serverSparkVersion: "2.12", 
        isAccepted:1,
        status : "completed", 
        isCompleted: 1,
        id: 1,  
    }];
    axios.get.mockImplementationOnce(()=> Promise.resolve({data : job}));

    const {result} = renderHook(()=> Jobs());
    console.log(result.current.update);
    act(()=>{
        result.current.update();
    });
    expect(result.current.table_data).toEqual(job);
})