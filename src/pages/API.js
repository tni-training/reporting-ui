const axios = require('axios').default;
const URL = "http://localhost:8081/";

export const Get = async () => {
    const res =  await axios.get(`${URL}alljobs`);
    return (res);
};

export const Post = async (addUser) => {
    return await axios.post(`${URL}addjob`, addUser);
};

export const Delete = async(ids) => {
    const res =  await axios.delete(`${URL}removejob?ids=${ids}`);
    return (res);
};

export const Put = async (newEntry) => {
    return await axios.put(`${URL}updatejob`, newEntry)
};