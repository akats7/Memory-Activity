import React, {createContext} from 'react'

const defaultColors = ['green','lightblue','red','yellow','purple'];
export const ColorsContext = createContext();

export default function ColorsProvider(props){
    // let {view, reset, flipBox, didWin} = VisibleState(visible);
    return (
        <ColorsContext.Provider value ={{view, reset, flipBox, didWin}}>
            {props.children}
        </ColorsContext.Provider>
    )
}
