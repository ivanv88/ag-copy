import React, { createContext, useState } from 'react';


export const ServiceNavContext = createContext();

const ServiceNavContextProvider = (props) => {
    const [active, setActive] = useState();
        return (
        <ServiceNavContext.Provider value={{active, setActive}} >
            { props.children }
        </ServiceNavContext.Provider>
    )
}

export default ServiceNavContextProvider;