import React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import './New-job.css';
const axios = require('axios').default;
class Editjob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Action: this.props.action,
          Submission_id: this.props.submission_id,
          Message:this.props.message,
          Jar_params : this.props.jar_params,
          Server_Spark_Version: this.props.server_spark_version,
          Status: this.props.status,
          Is_accepted : this.props.is_accepted,
          Is_completed : this.props.is_completed,
         };
      }
   
      action=(e)=>{
        this.setState({Action: e.target.value})
      }
      submission_id=(e)=>{
        this.setState({Submission_id: e.target.value})
      }
      message=(e)=>{
        this.setState({Message: e.target.value})
      }
      jar_parms=(e)=>{
        this.setState({Jar_params: e.target.value})
      }
      server_spark_version=(e)=>{
        this.setState({Server_Spark_Version: e.target.value})
      }
      status=(e)=>{
        this.setState({Status: e.target.value})
      }
      is_accepted=(e)=>{
        var myInt = parseInt(e.target.value);
        this.setState({Is_accepted: myInt})
      }
      is_completed=(e)=>{
        var myInt = parseInt(e.target.value);
        this.setState({Is_completed: myInt})
      }


      save_changes=()=>{
        var answer = window.confirm("Are you sure you want to make changes in the selected row?");
        if (answer) {
        axios.put('http://localhost:8081/updatejob',{
        action: this.state.Action,
        submissionId:this.state.Submission_id, 
        message: this.state.Message, 
        jarParams:this.state.Jar_params, 
        serverSparkVersion:this.state.Server_Spark_Version, 
        isAccepted:this.state.Is_accepted,
        status:this.state.Status, 
        isCompleted:this.state.Is_completed,
        id:this.props.id,
    })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.props.save();
      }
      else{
        alert("Your request to make changes in the selected row is abort.");
      }
    }
  render(){
  return (
     <div className='form'>
      <div className='form-first-part'>
        <div className='form-title'><h1>JOB</h1></div>
        <CloseIcon onClick={this.props.cancel}/>
      </div>
      <div className='form-second-part'>
                <div className='title'>
                <label className='label-form'>Action</label> 
                <label className='label-form'>Submission Id </label>
                <label className='label-form'>Message</label>
                <label className='label-form'>Jar params</label> 
                <label className='label-form'>Server Spark Version </label>
                <label className='label-form'>Is Accepted</label>
                <label className='label-form'>Status</label>
                <label className='label-form'>Is Completed</label>
                </div>
                <div >
                <TextField id="standard-basic" label="action" variant="standard" size='small' autoComplete='off' onChange={this.action} defaultValue={this.state.Action}/><br></br>
                <TextField id="standard-basic" label="submission_id" variant="standard" size='small' autoComplete='off' onChange={this.submission_id} defaultValue={this.state.Submission_id}/><br></br>
                <TextField id="standard-basic" label="message" variant="standard" size='small' autoComplete='off' onChange={this.message} defaultValue={this.state.Message}/><br></br>
                <TextField id="standard-basic" label="jar_parms" variant="standard" size='small' autoComplete='off' onChange={this.jar_parms} defaultValue={this.state.Jar_params}/><br></br>
                <TextField id="standard-basic" label="server_spark_version" variant="standard" size='small' autoComplete='off' onChange={this.server_spark_version} defaultValue={this.state.Server_Spark_Version}/><br></br>
                <TextField id="standard-basic" label="is_accepted" variant="standard" size='small' type="number" autoComplete='off' onChange={this.is_accepted} defaultValue={this.state.Is_accepted}/><br></br>
                <TextField id="standard-basic" label="status" variant="standard" size='small' autoComplete='off' onChange={this.status} defaultValue={this.state.Status}/><br></br>
                <TextField id="standard-basic" label="is_completed" variant="standard" size='small' type="number" autoComplete='off'  onChange={this.is_completed} defaultValue={this.state.Is_completed}/><br></br>
              
              <div className='save-button'> 
              <Button variant='contained' color='primary'size='small' onClick={this.save_changes}>Save Changes </Button> 
               </div>
              </div> 
              </div>
    </div>
  )
}
}

export default Editjob;
