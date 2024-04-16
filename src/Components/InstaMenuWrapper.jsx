
import { InstaHeading } from './InstaHeading';
import { InstaMenuMapping } from './InstaMenuMapping';
import { MenuDisplay } from './MenuDisplay';

export const InstaMenuWrapper = () => {
    return (
        <div
         className="insta-menu-container   
           h-[98dvh] 
           bg-white
            flex 
            flex-col 
            justify-between
             border-solid
              border-slate-300 
              border-e-2 md:h-[98dvh] 
              xl:w-[13%]
              lg:w-1/5
              sm:w-1/5
              py-6 px-4">
            <div className="insta-menu-lists-wrapper flex flex-col gap-8 ">
                <InstaHeading />
                <InstaMenuMapping />
            </div>
            <div className="more-menu-wrapper">
                <MenuDisplay icon="fa-solid fa-bars" iconTitle="More" />
            </div>
        </div>
       
    )
}