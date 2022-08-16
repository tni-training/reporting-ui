const axios=require('axios');

test("Get call testing",async()=>{
        const response = await axios.get('http://localhost:8081/alljobs', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        expect(response.status).toEqual(200);
});

test("Post call testing",async()=>{
    const response = await axios.post('http://localhost:8081/addjob', {
        headers: {
            'Content-Type': 'application/json',
        },
        action: "XYZ",
        submissionId: "123", 
        message: "Hello", 
        jarParams: "word", 
        serverSparkVersion: "2.12", 
        isAccepted:1,
        status : "completed", 
        isCompleted: 1,
    });
    expect(response.status).toEqual(200);
});

test("Delete call testing",async()=>{
  const response = await axios.delete('http://localhost:8081/removejob?ids=1,2', {
      headers: {
          'Content-Type': 'application/json',
      }
  });
  expect(response.status).toEqual(200);
});

test("Put call testing",async()=>{
  const response = await axios.put('http://localhost:8081/updatejob', {
      headers: {
          'Content-Type': 'application/json',
      },
      action: "XYZ",
      submissionId: "123", 
      message: "Hello", 
      jarParams: "word", 
      serverSparkVersion: "2.12", 
      isAccepted:1,
      status : "completed", 
      isCompleted: 1,
      id : 1,

  });
  expect(response.status).toEqual(200);
});