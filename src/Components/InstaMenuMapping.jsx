/* eslint-disable react/prop-types */
import { MenuDisplay } from './MenuDisplay';
import { InstaRedBall } from './InstaRedBall';
export const InstaMenuMapping = ({menulists}) => {
    return (
        <div className="menu-lists flex flex-col gap-6 h-96">
                    {
                    menulists.map((menu, index)=><MenuDisplay key={index} icon={menu.icon} iconTitle={menu.iconTitle} />)
                    }
                    <InstaRedBall /> 
        </div> 
    )
}