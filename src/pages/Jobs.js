import react from 'react';
import Newjob from './New-job';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import './pages.css';
import React from 'react';



class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          form : false,
        };
      }
    entry_forms=()=>{
        this.setState({form: !this.state.form})
    }
    save=()=>{
        this.setState({form: false})
        // Here write code for save input
    }
    cancel=()=>{
        this.setState({form: false})
      }
    render(){
    
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
                onClick={this.entry_forms}>New Job</Button>
                </div>
            </div>
            
            <div className='jobs-table'>
            {this.state.form &&
            <Newjob save={this.save} cancel={this.cancel}/> 
            } 
          
        <table className={this.state.form ? 'table1' : 'table'}>
            <tbody>
        <tr>    
            <th>Action</th>
            <th>Submission Id</th>
            <th>Message</th>
            <th>Jar params</th>
            <th>Server Spark Version</th>
            <th>Is Accepted</th>
            <th>Status</th>
            <th>Is Completed</th>
            <th>Created At</th>
            <th>Modify At</th>
            <th><EditIcon/></th>
            <th><DeleteIcon/></th>
        </tr>

        {/* code for table after backend connect in systematic way this is dummy one */}
        <tr>    
            <td className='entry'>XYZ</td>
            <td className='entry'>123</td>
            <td className='entry'>Hello</td>
            <td className='entry'>Word</td>
            <td className='entry'>2.12</td>
            <td className='entry'>2</td>
            <td className='entry'>Process</td>
            <td className='entry'>2</td>
            <td className='entry'>......</td>
            <td className='entry'>.....</td>
            <td className='entry'><EditIcon/></td>
            <td className='entry'><DeleteIcon/></td>
        </tr>
        <tr>    
            <td className='entry'>XYZ</td>
            <td className='entry'>123</td>
            <td className='entry'>Hello</td>
            <td className='entry'>Word</td>
            <td className='entry'>2.12</td>
            <td className='entry'>2</td>
            <td className='entry'>Process</td>
            <td className='entry'>2</td>
            <td className='entry'>......</td>
            <td className='entry'>.....</td>
            <td className='entry'><EditIcon/></td>
            <td className='entry'><DeleteIcon/></td>
        </tr>
        <tr>    
            <td className='entry'>XYZ</td>
            <td className='entry'>123</td>
            <td className='entry'>Hello</td>
            <td className='entry'>Word</td>
            <td className='entry'>2.12</td>
            <td className='entry'>2</td>
            <td className='entry'>Process</td>
            <td className='entry'>2</td>
            <td className='entry'>......</td>
            <td className='entry'>.....</td>
            <td className='entry'><EditIcon/></td>
            <td className='entry'><DeleteIcon/></td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
    );
    }
}


export default Jobs;

