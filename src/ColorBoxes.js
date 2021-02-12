import React, {useState, useEffect,useContext} from 'react'
import Box from './Box'
import './ColorBoxes.css'
import Button from '@material-ui/core/Button'
import VisibleState from './hooks/visibleState'
import {ColorsContext} from './context/colors.context'


function ColorBoxes(props){
    let {color} = useContext(ColorsContext);
    console.log(color)
    let {view,reset,flipBox,didWin} = VisibleState(color)
    
    let grid = view.colors.map((color,index) => (
       <Box flip={()=>{(view.solvedBoxes[index] == 0 && 
            (index != view.flippedBoxes[0].index && index != view.flippedBoxes[1].index) && 
            !(view.flippedBoxes[1].index != -1 && view.flippedBoxes[0] != -1)  ) 
            && flipBox(index,color.color)}} 
            color={ (view.solvedBoxes[index] || index == view.flippedBoxes[0].index || index == view.flippedBoxes[1].index) ? 
            color.color :"black"}/>
    ))

    return(
        <div>
        <h1 style={{textAlign: 'center'}}>Memory Game</h1>
        <h4 style={{textAlign: 'center'}}>{didWin() && 'YOU WIN! '}{`Clicked ${view.clickCount} times`}</h4>
        <div className='grid'>
            {grid}
        </div>
        <Button style={{width:'100%'}}variant="contained" color='primary' onClick={() => {
            reset()
        }}>Reset</Button>
        </div>
    )

}

export default ColorBoxes