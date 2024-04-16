/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { menuListsContext } from '../commentContext/menuListsContext';
import { MenuDisplay } from './MenuDisplay';
import { InstaRedBall } from './InstaRedBall';
export const InstaMenuMapping = () => {
    const menulists = useContext(menuListsContext);
    return (
        <div className="menu-lists flex flex-col gap-6 h-96">
                    {
                    menulists.map((menu, index)=><MenuDisplay key={index} icon={menu.icon} iconTitle={menu.iconTitle} />)
                    }
                    <InstaRedBall /> 
        </div> 
    )
}