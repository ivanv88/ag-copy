import React, { createContext, useState } from 'react';


export const ColorContext = createContext();

const ColorContextProvider = (props) => {
    const [color, setColor] = useState("#d8d8da");
        return (
        <ColorContext.Provider value={{color, setColor}} >
            { props.children }
        </ColorContext.Provider>
    )
}

export default ColorContextProvider;