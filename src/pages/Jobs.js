import React, { useEffect, useState } from 'react';
import Newjob from './New-job';
import Editjob from './Edit-job';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid} from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import './pages.css';

const axios = require('axios').default;
const columns= [
  { field: 'action', headerName: 'Action',editable: true},
  { field: 'submissionId', headerName: 'Submission ID',width:110,editable: true },
  { field: 'message', headerName: 'Message' },
  { field: 'jarParams', headerName: 'Jar Params'},
  { field: 'serverSparkVersion', headerName: 'Server Spark Version',editable: true},
  { field: 'isAccepted', headerName: 'Is Accepted',editable: true},
  { field: 'status', headerName: 'Status',editable: true },
  { field: 'isCompleted', headerName: 'Is Completed',editable: true},
  { field: 'createdAt', headerName: 'Created At',width:170,editable: true },
  { field: 'modifiedAt', headerName: 'Modify At',width:170,editable: true},
];

function Jobs(props) {

    const [form,setForm]= useState(false);
    const [formEdit,setFormEdit]= useState(false);
    const [table_length,setTable_length]= useState(0);
    const [table_data,setTable_data]= useState([]);
    const [arr,setArr]= useState("");
    const [selected_ids,setSelected_ids]= useState("");
    const [snackbar, setSnackbar] = React.useState(false);
    const handleCloseSnackbar = () => setSnackbar(false);
    
    useEffect(() => {
        axios.get('http://localhost:8081/alljobs')
          .then(response => {
            const Data = response.data;
            setTable_data(Data);
          })
      }, []);

    const entry_forms=()=>{
        setForm(!form)
    }

    const save=()=>{
        setForm(false);
        axios.get('http://localhost:8081/alljobs')
          .then(response => {
            const Data = response.data;
            setTable_data(Data);
          })
          setSnackbar({ children: 'New Job added successfully.', severity: 'success' });   
    }

    const save_changes=()=>{
        setFormEdit(false)
        axios.get('http://localhost:8081/alljobs')
          .then(response => {
            const Data = response.data;
            setTable_data(Data);
          })
          update();
          setSnackbar({ children: 'Changes saved successfully.', severity: 'success' });
    }

    const update=()=>{
        axios.get('http://localhost:8081/alljobs')
        .then(response => {
          const Data = response.data;
          setTable_data(Data);
        })
    }

    const cancel=()=>{
        setForm(false)
        setFormEdit(false)
    }

    const edit_selected_id=()=>{
        if(selected_ids.length==1){
        setFormEdit(!formEdit)
        setArr(table_data.find((o, i) => {
          if (o.id == selected_ids) {
              return table_data[i];
          }
      })
    )
        }
        else{
        if(selected_ids.length==0){
          alert("Please select one row for editing.")
        }
        else{
          alert("Please select only one row for editing.")
        }
        }
      }

      const delete_selected_id=()=>{
        if(selected_ids.length!=0){
          var answer = window.confirm("Are you sure you want to DELETE the selected data?");
           if (answer) {
            axios.delete(`http://localhost:8081/removejob?ids=${(selected_ids)}`)
            .then(res => console.log(res.data)); 
            axios.get('http://localhost:8081/alljobs')
           .then(response => {
            const Data = response.data;
            setTable_data(Data); 
        })
            update();
            setSnackbar({ children: 'Selected rows deleted successfully.', severity: 'success' });
           }  
          else {
          alert("Your request to delete the data is abort");
          }
        } 
        else{
            alert("Please select atleast one row.") 
        }
    }

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
                onClick={entry_forms}>New Job</Button>
                </div>
            </div>

            {form &&
            <Newjob save={save} cancel={cancel}/>}
             
            {formEdit &&<div>
            <Editjob save={save_changes}
             cancel={cancel}
             edit={formEdit} 
             action= {arr.action}
             submission_id={arr.submissionId}
             message={arr.message}
             jar_params={arr.jarParams}
             server_spark_version={arr.serverSparkVersion}
             status={arr.status}
             is_accepted={arr.isAccepted}
             is_completed={arr.isCompleted}
             id={selected_ids[0]}/> 
            </div>
            } 
             
            <div className='table-delete'>
            <Button size='small'  
                startIcon ={<DeleteIcon/>}
                onClick={delete_selected_id}>
                Delete
            </Button>
            <Button size='small'  
                startIcon ={<EditIcon/>}
                onClick={edit_selected_id}>
                Edit
            </Button>
            </div>

            <div style={{ height: 420, width: '100%' }}>
            <DataGrid
            rows={table_data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(ids) => {
            const selectedIDs = ids;
            setSelected_ids(selectedIDs)
            }}
            UnselectAllCells 
            disableSelectionOnClick={true}
            />
           {snackbar && (
           <Snackbar
           open
           anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
           onClose={handleCloseSnackbar}
           autoHideDuration={3000}>
          <Alert {...snackbar} onClose={handleCloseSnackbar} ></Alert>
          </Snackbar>
          )}
          </div>
        </div>
      );
}
export default Jobs;