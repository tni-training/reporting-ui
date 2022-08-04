import React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import './New-job.css';

class Newjob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Action: null,
          Submission_id: null,
          Message: null,
          Jar_params : null,
          Server_Spark_Version: null,
          Status: null,
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
      save=()=>{
        console.log(this.state.Action);
        console.log(this.state.Submission_id);
        console.log(this.state.Message);
        console.log(this.state.Jar_params);
        console.log(this.state.Server_Spark_Version);
        console.log(this.state.Status);
        this.props.save();
      }
   
  render(){
  return (
     <div className='form'>
      <div className='form-first-part'>
        <div className='form-title'>JOB</div>
        <CloseIcon onClick={this.props.cancel}/>
      </div>
      <div className='form-second-part'>
                <div className='title'>
                <label className='label-form'>Action</label> 
                <label className='label-form'>Submission Id </label>
                <label className='label-form'>Message</label>
                <label className='label-form'>Jar params</label> 
                <label className='label-form'>Server Spark Version </label>
                <label className='label-form'>Status</label>
                </div>
                <div >
                <TextField id="standard-basic" label="action" variant="standard" size='small' onChange={this.action} /><br></br>
                <TextField id="standard-basic" label="submission_id" variant="standard" size='small' onChange={this.submission_id}/><br></br>
                <TextField id="standard-basic" label="message" variant="standard" size='small' onChange={this.message}/><br></br>
                <TextField id="standard-basic" label="jar_parms" variant="standard" size='small' onChange={this.jar_parms}/><br></br>
                <TextField id="standard-basic" label="server_spark_version" variant="standard" size='small' onChange={this.server_spark_version}/><br></br>
                <TextField id="standard-basic" label="status" variant="standard" size='small' onChange={this.status}/><br></br>
              <div className='save-button'> 
               <Button variant='contained' color='primary'size='small' onClick={this.save}>Save</Button></div>
              </div> 
              </div>
    </div>
  )
}
}

export default Newjob;
