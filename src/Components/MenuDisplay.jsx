/* eslint-disable react/prop-types */

import { DisplayIcon } from "./DisplayIcon"


export const MenuDisplay = ({icon, iconTitle}) => {
        return(
            <>
                <div className="menu-component flex flex-row gap-4 items-center font-medium text-xs md:text-sm lg:text-lg text-slate-900">
                    <DisplayIcon icon={icon} />
                    <span className="menu-icon-title">{iconTitle}</span>
                </div>
            </>
        )
   
}