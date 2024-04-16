/* eslint-disable react/prop-types */
import { useState } from "react";
import { commentContext } from "../commentContext/commentContext";

export const CommentProvider = ({children}) => {

    const [comments, setComments] = useState([])
    return(
        <commentContext.Provider value={{comments, setComments}}>{children}</commentContext.Provider>
    )
    
}