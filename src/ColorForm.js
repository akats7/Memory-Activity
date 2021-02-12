import React, {useContext} from 'react'
import './ColorForm.css'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button'
import {ColorsContext} from './context/colors.context'

function ColorForm(){
    let {color} = useContext(ColorsContext);
  
    let colorFields = color.map((color) => (
        <TextField
                value = {color.color}
                margin='normal'
                fullWidth
                autoFocus
        />
    ))
    return(
        <div className='colorform' style={{backgroundColor:'white'}}>
            <h3> List of Colors</h3>
            {colorFields}
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