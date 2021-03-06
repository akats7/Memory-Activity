import React, {createContext} from 'react'
import ColorState from '../hooks/colorsState'
const defaultColors = ['green','lightblue','red','yellow','purple','orange'];
export const ColorsContext = createContext();

export function ColorsProvider(props){
    let {color} = ColorState();
    console.log(color)
    return (
        <ColorsContext.Provider value ={{color}}>
            {props.children}
        </ColorsContext.Provider>
    )
}


