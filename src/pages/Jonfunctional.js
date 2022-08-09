import React, { useEffect , useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Newjob from './New-job';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { maxHeight } from '@mui/system';

const axios = require('axios').default;

const columns= [
    { field: 'action', headerName: 'Action'},
    { field: 'submissionId', headerName: 'Submission ID',width:110 },
    { field: 'message', headerName: 'Message' },
    { field: 'jarParams', headerName: 'Jar Params'},
    { field: 'serverSparkVersion', headerName: 'Server Spark Version'},
    { field: 'isAccepted', headerName: 'Is Accepted'},
    { field: 'status', headerName: 'Status' },
    { field: 'isCompleted', headerName: 'Is Completed'},
    { field: 'createdAt', headerName: 'Created At',width:170 },
    { field: 'modifiedAt', headerName: 'Modify At',width:170},
   
  ];
//   const rows = [
//     {action: "Fifteen",
//     submissionId: "138",
//     message: "Thirty Eight",
//     jarParams: "Word",
//     serverSparkVersion: "2.12",
//     isAccepted: 2,
//     status: "process",
//     isCompleted: 2,
//     createdAt: "2022-08-05T07:08:10Z",
//     modifiedAt: "2022-08-05T07:08:10Z",
//     id: 1  }  

//   ]

const rows = [];

function Jonfunctional(props) {
    const [newjob, setNewJob] = useState(false);
    const [table_data, setTable_data]= useState([]);
    // const rows = table_data.Data;
    useEffect(() => {
        axios.get('http://localhost:8081/alljobs')
          .then(response => {
            const Data = response.data;
            setTable_data({ Data });
          })
      },[rows.concat(table_data.Data)]);
  return (
 
    <div className='jobs-main'>
        <div className='jobs-first-part'>
                <h1>Jobs</h1>
                <div>
                <Button
                variant='contained' 
                color='primary'
                size='small'  
                startIcon ={<AddIcon/>}
                onClick={() => setNewJob(!newjob)}>New Job</Button>
                </div>
                {newjob && <Newjob/>}
                <div style={{ height: 420, width: '113%' }}>
                {console.log(rows)}
                <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        // rowsPerPageOptions={[]}
        // checkboxSelection
      /></div>
                
            </div>
    </div>
  )
}

export default Jonfunctional;
