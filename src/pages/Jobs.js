import Newjob from './New-job';
import Editjob from './Edit-job';
import { Alert, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid} from '@mui/x-data-grid';
import './pages.css';
import React from 'react';

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

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          form : false,
          formEdit : false,
          table_length: 0,
          table_data : [],
          arr: "",
          selected_ids :"",
        };
      }
    componentDidMount() {
        axios.get('http://localhost:8081/alljobs')
          .then(response => {
            const Data = response.data;
            this.setState({ table_data : Data });
          })
      }
   
    entry_forms=()=>{
        this.setState({form: !this.state.form})
    }
    save=()=>{
        this.setState({form: false})
        axios.get('http://localhost:8081/alljobs')
          .then(response => {
            const Data = response.data;
            this.setState({ table_data : Data });
          })
        
        alert("Job is created successfully.");
         
    }
    save_changes=()=>{
        this.setState({formEdit: false})
        axios.get('http://localhost:8081/alljobs')
          .then(response => {
            const Data = response.data;
            this.setState({ table_data : Data });
          })
          this.update();
          alert("Row is edited successfully.");
    }
    update=()=>{
        axios.get('http://localhost:8081/alljobs')
        .then(response => {
          const Data = response.data;
          this.setState({ table_data : Data });
        })
    }
    cancel=()=>{
        this.setState({form: false})
        this.setState({formEdit: false})
    }
    edit_selected_id=()=>{
        if(this.state.selected_ids.length==1){
        this.setState({formEdit: !this.state.formEdit})
        this.setState({ arr : this.state.table_data.find((o, i) => {
          if (o.id == this.state.selected_ids) {
              return this.state.table_data[i];
          }
      })
    })
        }
        else{
        if(this.state.selected_ids.length==0){
          alert("Please select one row for editing.")
        }
        else{
          alert("Please select only one row for editing.")
        }
        }
      }
      delete_selected_id=()=>{
        if(this.state.selected_ids.length!=0){
          var answer = window.confirm("Are you sure you want to DELETE the selected data?");
           if (answer) {
            axios.delete(`http://localhost:8081/removejob?ids=${(this.state.selected_ids)}`)
            .then(res => console.log(res.data)); 
            axios.get('http://localhost:8081/alljobs')
           .then(response => {
            const Data = response.data;
            this.setState({ table_data : Data }); 
        })
            this.update();
            alert("Row is deleted successsfully.")
           }  
          else {
          alert("Your request to delete the data is abort");

          }
        } 
        else{
            alert("Please select atleast one row.") 
        }
    }
      render(){
        console.log("re-render")
        return(
        <div className='jobs-main'>
            <div className='jobs-first-part'>
            <h1>Jobs</h1>
                <div>
                <Button
                variant='contained' 
                color='primary'
                size='small'  
                startIcon ={<AddIcon/>}
                onClick={this.entry_forms}>New Job</Button>
                </div>
            </div>
            {this.state.form &&
            <Newjob save={this.save} cancel={this.cancel}/>}
            {this.state.formEdit &&<div>
            <Editjob save={this.save_changes}
             cancel={this.cancel}
             edit={this.state.formEdit} 
             action= {this.state.arr.action}
             submission_id={this.state.arr.submissionId}
             message={this.state.arr.message}
             jar_params={this.state.arr.jarParams}
             server_spark_version={this.state.arr.serverSparkVersion}
             status={this.state.arr.status}
             is_accepted={this.state.arr.isAccepted}
             is_completed={this.state.arr.isCompleted}
             id={this.state.selected_ids[0]}/> 
            </div>
            } 
             <div className='table-delete'>
        <Button size='small'  
                startIcon ={<DeleteIcon/>}
                onClick={this.delete_selected_id}
                >Delete</Button>
        <Button size='small'  
                startIcon ={<EditIcon/>}
                onClick={this.edit_selected_id}>Edit</Button>
        </div>
           <div style={{ height: 420, width: '100%' }}>
            <DataGrid
        rows={this.state.table_data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          const selectedIDs = ids;
          this.setState({selected_ids: selectedIDs})
        }}
        UnselectAllCells 
        disableSelectionOnClick={true}
        />
           </div>
           </div>
        )
      }
    }
export default Jobs;