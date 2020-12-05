import React from 'react'
import './ColorForm.css'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'

function ColorForm(){
    return(
        <div className='colorform' style={{backgroundColor:'white'}}>
            <h3> List of Colors</h3>
            <TextField
                margin='normal'
                fullWidth
                autoFocus
            />
             <Button style={{width:'100%'}}variant="contained" color='primary' onClick>Add Color</Button>
        </div>
    )
}

export default ColorForm