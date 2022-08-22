import React, { useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import {  Post } from './API';
import './New-job.css';
const axios = require('axios').default;

function NewJob(props) {
    
    const [Action,setAction]=useState(null);
    const [Submission_id,setSubmission_id]=useState(null);
    const [Message,setMessage]=useState(null);
    const [Jar_params,setJar_params]=useState(null);
    const [Server_Spark_Version,setServer_Spark_Version]=useState(null);
    const [Status,setStatus]=useState(null);
    const [Is_accepted,setIs_accepted]=useState(null);
    const [Is_completed,setIs_completed]=useState(null);

    
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
      const save=async()=>{       
        const addUser = {
          action: Action,
          submissionId:Submission_id, 
          message: Message, 
          jarParams:Jar_params, 
          serverSparkVersion:Server_Spark_Version, 
          isAccepted:Is_accepted,
          status:Status, 
          isCompleted:Is_completed,
        }
        await Post(addUser);
        props.save();
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
                <TextField id="standard-basic" label="action" variant="standard" size='small' autoComplete='off' onChange={action} /><br></br>
                <TextField id="standard-basic" label="submission_id" variant="standard" size='small' autoComplete='off' onChange={submission_id}/><br></br>
                <TextField id="standard-basic" label="message" variant="standard" size='small' autoComplete='off' onChange={message}/><br></br>
                <TextField id="standard-basic" label="jar_parms" variant="standard" size='small' autoComplete='off' onChange={jar_parms}/><br></br>
                <TextField id="standard-basic" label="server_spark_version" variant="standard" size='small' autoComplete='off' onChange={server_spark_version}/><br></br>
                <TextField id="standard-basic" label="is_accepted" variant="standard" size='small' type="number" autoComplete='off' onChange={is_accepted}/><br></br>
                <TextField id="standard-basic" label="status" variant="standard" size='small' autoComplete='off' onChange={statuss}/><br></br>
                <TextField id="standard-basic" label="is_completed" variant="standard" size='small' type="number" autoComplete='off'  onChange={is_completed}/><br></br>
              <div className='save-button'> 
              <Button variant='contained' color='primary'size='small' onClick={save}> Save  </Button>

               </div>
              </div> 
              </div>
    </div>
    )
  }
export default NewJob;