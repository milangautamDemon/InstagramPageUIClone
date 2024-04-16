import { DisplayIcon } from "./DisplayIcon";
import { useContext, useState } from "react";
import { loveCountContext } from "../commentContext/loveCountContext";

const icons = [ "fa-regular fa-comment", "fa fa-send-o" ];

export const UserValueBar = () => {
    const {loveCount, setLoveCount} = useContext(loveCountContext);
    const [loveColor, setLoveColor] =useState("")

    const handleLoveCount = (e) => {
        loveColor===""?[setLoveColor("text-red-600"), setLoveCount(loveCount + 1)]:setLoveColor("");
        e.preventDefault();
    }
    return(

        <div className="value-bar flex flex-row justify-between items-center mx-4">

            <div className="newsFeed-value-icons flex items-center gap-1">
                <div className="love-icon">
                    <i className={`fa fa-solid fa-heart menu-icons ${loveColor}`} onClick={handleLoveCount} ></i>
                </div>
                <div className="flex gap-1">
                    {
                        icons.map((icon, index)=><DisplayIcon key={index} icon={icon} />)
                    }  
                </div>
            </div>

            <div className="img-slide-bar flex flex-row gap-1 mr-8">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            </div>
            <div className="newsFeed-bookmark">
                <i className="fa-regular fa-bookmark"></i>
            </div>
        </div>
    )
}