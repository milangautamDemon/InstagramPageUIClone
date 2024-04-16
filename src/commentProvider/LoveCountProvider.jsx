/* eslint-disable react/prop-types */

import { useState } from "react";
import { loveCountContext } from "../commentContext/loveCountContext";

export const LoveCountProvider = ({children}) => {
    const [loveCount, setLoveCount] = useState(0);
    return(
        <loveCountContext.Provider value={{loveCount, setLoveCount}}>
            {children}
        </loveCountContext.Provider>
    )
} 