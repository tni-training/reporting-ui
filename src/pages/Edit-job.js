import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import {  Put } from './API';
import './New-job.css';
const axios = require('axios').default;

function EditJob(props) {
    
    const [Action,setAction]=useState(props.action);
    const [Submission_id,setSubmission_id]=useState(props.submission_id);
    const [Message,setMessage]=useState(props.message);
    const [Jar_params,setJar_params]=useState(props.jar_params);
    const [Server_Spark_Version,setServer_Spark_Version]=useState(props.server_spark_version);
    const [Status,setStatus]=useState(props.status);
    const [Is_accepted,setIs_accepted]=useState(props.is_accepted);
    const [Is_completed,setIs_completed]=useState(props.is_completed);

    
     const action=(e)=>{
        setAction(e.target.value)
      }
      const submission_id=(e)=>{
        setSubmission_id(e.target.value)
      }
      const message=(e)=>{
        setMessage(e.target.value)
      }
      const jar_parms=(e)=>{
        setJar_params(e.target.value)
      }
      const server_spark_version=(e)=>{
        setServer_Spark_Version(e.target.value)
      }
      const statuss=(e)=>{
        setStatus(e.target.value)
      }
      const is_accepted=(e)=>{
        var myInt = parseInt(e.target.value);
        setIs_accepted(myInt)
      }
      const is_completed=(e)=>{
        var myInt = parseInt(e.target.value);
        setIs_completed(myInt)
      }
      
      const save_changes=async()=>{
        var answer = window.confirm("Are you sure you want to make changes in the selected row?");
        if (answer) {
        const newEntry = {
          action: Action,
          submissionId:Submission_id, 
          message: Message, 
          jarParams:Jar_params, 
          serverSparkVersion:Server_Spark_Version, 
          isAccepted:Is_accepted,
          status:Status, 
          isCompleted:Is_completed,
          id: props.id,
        }
        await Put(newEntry); 
        props.save();
      }
      else{
        alert("Your request to make changes in the selected row is abort.");
      }
    }
    return(
        <div className='form'>
      <div className='form-first-part'>
        <div className='form-title'>JOB</div>
        <CloseIcon onClick={props.cancel}/>
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
                <TextField id="standard-basic" label="action" variant="standard" size='small' autoComplete='off' onChange={action} defaultValue={Action}/><br></br>
                <TextField id="standard-basic" label="submission_id" variant="standard" size='small' autoComplete='off' onChange={submission_id} defaultValue={Submission_id}/><br></br>
                <TextField id="standard-basic" label="message" variant="standard" size='small' autoComplete='off' onChange={message} defaultValue={Message}/><br></br>
                <TextField id="standard-basic" label="jar_parms" variant="standard" size='small' autoComplete='off' onChange={jar_parms} defaultValue={Jar_params}/><br></br>
                <TextField id="standard-basic" label="server_spark_version" variant="standard" size='small' autoComplete='off' onChange={server_spark_version} defaultValue={Server_Spark_Version}/><br></br>
                <TextField id="standard-basic" label="is_accepted" variant="standard" size='small' type="number" autoComplete='off' onChange={is_accepted} defaultValue={Is_accepted}/><br></br>
                <TextField id="standard-basic" label="status" variant="standard" size='small' autoComplete='off' onChange={statuss} defaultValue={Status}/><br></br>
                <TextField id="standard-basic" label="is_completed" variant="standard" size='small' type="number" autoComplete='off'  onChange={is_completed} defaultValue={Is_completed}/><br></br>
              
              <div className='save-button'> 
              <Button variant='contained' color='primary'size='small' onClick={save_changes}>Save Changes </Button> 
               </div>
              </div> 
              </div>
    </div>
    )
  }
export default EditJob;