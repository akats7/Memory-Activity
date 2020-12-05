import React, {useState, useEffect} from 'react'
import Box from './Box'
import './ColorBoxes.css'
import Button from '@material-ui/core/Button'
import VisibleState from './hooks/visibleState'


function ColorBoxes({colors}){
    let colorsList = [...colors]
    let visible = colorsList.map((x) => 0)
    let {view, reset, flipBox, didWin} = VisibleState(visible);
      
    let grid = colorsList.map((color,index) => (
       <Box flip={()=>{(view.solvedBoxes[index] == 0 && 
            (index != view.flippedBoxes[0].index && index != view.flippedBoxes[1].index) && 
            !(view.flippedBoxes[1].index != -1 && view.flippedBoxes[0] != -1)  ) 
            && flipBox(index,color)}} 
            color={ (view.solvedBoxes[index] || index == view.flippedBoxes[0].index || index == view.flippedBoxes[1].index) ? 
            color :"black"}/>
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