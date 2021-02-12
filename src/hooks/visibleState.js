import React, {useState} from 'react'
import random from '../randomize'
import ColorContext from '../context/colors.context'

export default function VisibleState(init){
    let colorsList = random([...init,...init])
    let blankMatrix = colorsList.map((x) => 0);
    let [view, setView] = useState({colors:colorsList, solvedBoxes:blankMatrix, flippedBoxes:[{index: -1,color:''},{index: -1,color:''}],clickCount: 0 , edit: true});
    return {
        view: view,
        reset: () => {
            let boxes = random(colorsList)
            setView({colors:boxes,solvedBoxes:blankMatrix,flippedBoxes: [{index: -1,color:''},{index: -1,color:''}],clickCount:0, edit: true})
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
            setView({...view,solvedBoxes: boxes, flippedBoxes: flipped, clickCount: (view.clickCount + 1), edit: false})
                if(flipped[1].index != -1){
                    setTimeout(() => {
                    if(flipped[0].color == flipped[1].color){
                        boxes[flipped[0].index] = boxes[flipped[1].index] = 1    
                    }
                    flipped = [{index: -1,color:''},{index: -1,color:''}]; 
                    setView({...view,solvedBoxes: boxes, flippedBoxes: flipped,clickCount:(view.clickCount + 1)}) 
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