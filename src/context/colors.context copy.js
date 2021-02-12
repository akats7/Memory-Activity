import React, {createContext} from 'react'
import ColorState from '../hooks/colorsState'
const defaultColors = ['green','lightblue','red','yellow','purple','orange'];
export const ColorsContext = createContext();

export function ColorsProvider(props){
    let {colors} = ColorState();
    return (
        <ColorsContext.Provider value ={{colors}}>
            {props.children}
        </ColorsContext.Provider>
    )
}

