import React, {useState} from 'react'
import random from '../randomize'

export default function VisibleState(init){
    // let colorsList = init
    // let visibleMatrix = colorsList.map((x) => 0);
    let [view, setView] = useState({solvedBoxes:init, flippedBoxes:[{index: -1,color:''},{index: -1,color:''}],clickCount: 0 });
    return {
        view: view,
        // setBoard: () => {
            
        // },
        reset: () => {
            let boxes = random(init)
            setView({solvedBoxes:boxes,flippedBoxes: [{index: -1,color:''},{index: -1,color:''}],clickCount:0})
        },
        flipBox:(index,color) => {
            let flipped = [...view.flippedBoxes]
            let boxes = [...view.solvedBoxes]
            console.log(flipped)
            console.log(boxes)
             if(flipped[0].index == -1){
                flipped[0] = {index:index,color:color}
            }
            else if(flipped[1].index == -1){
                flipped[1] = {index:index,color:color}
            }
            setView({solvedBoxes: boxes, flippedBoxes: flipped, clickCount: (view.clickCount + 1)})
                if(flipped[1].index != -1){
                    setTimeout(() => {
                    if(flipped[0].color == flipped[1].color){
                        boxes[flipped[0].index] = boxes[flipped[1].index] = 1    
                    }
                    flipped = [{index: -1,color:''},{index: -1,color:''}]; 
                    setView({solvedBoxes: boxes, flippedBoxes: flipped,clickCount:(view.clickCount + 1)}) 
               },500) }
        },
        didWin(){
            for(let el of view.solvedBoxes){
                if(!el){
                    return false;
                }
                return true
            }
        }


    }

}