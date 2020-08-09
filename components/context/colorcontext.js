import React, { createContext, useState } from 'react';


export const ColorContext = createContext();

const ColorContextProvider = (props) => {
    const [color, setColor] = useState("#e8e8e8");
        return (
        <ColorContext.Provider value={{color, setColor}} >
            { props.children }
        </ColorContext.Provider>
    )
}

export default ColorContextProvider;