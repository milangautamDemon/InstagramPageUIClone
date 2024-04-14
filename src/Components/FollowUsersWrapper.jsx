import { FollowUserFeatures } from "./FollowUserFeatures";
import image10 from "../image/blackcat.png";
import { FollowSuggestion } from "./FollowSuggestion";
import { FollowMapping } from "./FollowMapping";
import { AuthorizeHelpDesk } from "./AuthorizeHelpDesk";

const userName = "catvarystp"
const userNickName = "CALVARYST";
const height = "h-12";
const width="w-12"
const feature = "ring-slate-300";
const iconName = "Switch";
const textSize = "text-md lg:text-lg"
const btnFeature = "text-blue-500 mb-4";

export const FollowUsersWrapper = () => {
    return (
        <div className="follow-users-wrapper my-8 ml-2 md:mx-4 lg:mx-8  xl:w-[20%]">
            <FollowUserFeatures userName={userName} userNickName={userNickName} height={height} width={width} feature={feature} iconName={iconName} image={image10} textSize={textSize} btnFeature={btnFeature}/>

            <FollowSuggestion />
            <FollowMapping />
            <AuthorizeHelpDesk />
        </div>
    )
}