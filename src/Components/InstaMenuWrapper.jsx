import { InstaHeading } from './InstaHeading';
import { InstaMenuMapping } from './InstaMenuMapping';
import { MenuDisplay } from './MenuDisplay';

const menulists = [
    {icon: "fa-home", iconTitle: "Home"},
    {icon: "fa-search", iconTitle: "Search"},
    {icon: "fa-bandcamp", iconTitle: "Explore"},
    {icon: "fab fa-facebook-messenger", iconTitle: "Messages"},
    {icon: "fa-regular fa-heart", iconTitle: "Notification"},
    {icon: "fa-plus-square", iconTitle: "Create"},
    {icon: "fa-solid fa-circle-user", iconTitle: "Profile"} 
    ];

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
                <InstaMenuMapping menulists={menulists} />
            </div>
            <div className="more-menu-wrapper">
                <MenuDisplay icon="fa-solid fa-bars" iconTitle="More" />
            </div>
        </div>
       
    )
}