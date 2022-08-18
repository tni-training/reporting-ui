import axios from "axios";
import { fetchUsers, deleteUsers } from './../Jobs';
import { addUsers } from './../New-job';
import { editUser } from './../Edit-job';

jest.mock("axios");

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {

        const users = [{ 
                action: "XYZ",
                submissionId: "123", 
                message: "Hello", 
                jarParams: "word", 
                serverSparkVersion: "2.12", 
                isAccepted:1,
                status : "completed", 
                isCompleted: 1,
                id: 1,  
            }]
        axios.get.mockResolvedValueOnce(users);

        const result = await fetchUsers();
        expect(axios.get).toHaveBeenCalledWith("http://localhost:8081/alljobs");
        expect(result).toEqual(users);
    })
  })
})

describe("addUsers", () => {
    describe("when API call is successful", () => {
      it("should return users list", async () => {
  
          const users = [{ 
                  action: "ABC",
                  submissionId: "456", 
                  message: "Hey", 
                  jarParams: "number", 
                  serverSparkVersion: "2.12", 
                  isAccepted:2,
                  status : "process", 
                  isCompleted: 1,
                  id: 2,  
              }]
          axios.post.mockResolvedValueOnce(users);
  
          const result = await addUsers();
          expect(axios.post).toHaveBeenCalledWith("http://localhost:8081/addjob");
          expect(result).toEqual(users);
      })
    })
  })

  describe("deleteUsers", () => {
    describe("when API call is successful", () => {
      it("should return url with selected ids", async () => {

        const ids = [1,2,3];
        
        axios.delete.mockResolvedValueOnce(ids);
        await deleteUsers(ids);   
        expect(axios.delete).toHaveBeenCalledWith(`http://localhost:8081/removejob?ids=${ids}`);
      })
    })
  })

  describe("editUser", () => {
    describe("when API call is successful", () => {
      it("should return empty list", async () => {

        const newEntry = { 
            action: "ABC",
            submissionId: "456", 
            message: "Hey", 
            jarParams: "number", 
            serverSparkVersion: "2.12", 
            isAccepted:2,
            status : "process", 
            isCompleted: 1,
            id: 2,  
        }
        
        axios.put.mockResolvedValueOnce(newEntry);
        await editUser(newEntry);   
        expect(axios.put).toHaveBeenCalledWith("http://localhost:8081/updatejob", newEntry); 
      })
    })
  })