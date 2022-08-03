import react from 'react';
import Newjobs from '../components/New-jobs';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import './pages.css';
import React from 'react'



class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          form : false,
        };
      }
    entry_forms=()=>{
        {console.log(this.state.form)}
        this.setState({form: !this.state.form})
    }
    render(){
    
    return (
        <div className='jobs-main'>
        <div className='jobs-first-part'>
        <h1>Jobs</h1>
        <Button
             variant='contained' 
             color='primary'
             size='small'  
            startIcon ={<AddIcon/>}
             onClick={this.entry_forms}>New Connections</Button>
        </div>
        <div className='jobs-table'>
            {this.state.form &&
            <Newjobs/> 
            } 
          
        {/* code for table after backend connect in systematic way this is dummy one */}
        <table className='table'>
        <tr>    
            <th>Name</th>
            <th>Connector</th>
            <th>Destination</th>
            <th>Last Sync</th>
            <th>Status</th>
            <th>Edit/Delete</th>
        </tr>
        <tr>
    <td>ABC</td>
    <td>XYZ</td>
    <td>abc</td>
    <td>xyz</td>
    <td><input type="checkbox"/></td>
    <td><EditIcon/>&nbsp;&nbsp;<DeleteIcon/>
        </td>
        {/* <Button variant="outlined" startIcon={<EditIcon />} ></Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}></Button> */}
  </tr>

        </table>
        </div>
        </div>
    );
    }
}


export default Jobs;

