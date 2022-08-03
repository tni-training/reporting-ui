import React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

class Newjobs extends React.Component {
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
    save=()=>{
        {console.log(this.state.form)}
        this.setState({form: false})
        // Here write code for save input
    }
    render(){
  return (
       <div className='form'>
                <div className='title'>
                <label>Name</label> 
                <label>Connector </label>
                <label>Destination</label>
                </div>
                <div >
                <TextField id="standard-basic" label="Standard" variant="standard" size='small' /><br></br>
                <TextField id="standard-basic" label="Standard" variant="standard" size='small' /><br></br>
                <TextField id="standard-basic" label="Standard" variant="standard" size='small'/><br></br>
               <div className='save-button'> 
               <Button variant='contained' color='primary'size='small' onClick={this.save}>Save</Button></div>
                </div> 
    </div>
  )
}
}

export default Newjobs;
