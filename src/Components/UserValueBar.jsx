import { DisplayIcon } from "./DisplayIcon";

const icons = ["fa-regular fa-heart", "fa-regular fa-comment", "fa fa-send-o" ];

export const UserValueBar = () => {
    return(

        <div className="value-bar flex flex-row justify-between items-center mx-4">
            <div className="newsFeed-value-icons flex gap-1">
                {
                    icons.map((icon, index)=><DisplayIcon key={index} icon={icon} />)
                }  
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