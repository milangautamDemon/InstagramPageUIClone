import { FollowUserFeatures } from "./FollowUserFeatures";
import followUserImage1 from "../image/images9.jpeg";
import followUserImage2 from "../image/images3.jpeg";
import followUserImage3 from "../image/images6.jpeg";
import followUserImage4 from "../image/images8.jpeg";
import followUserImage5 from "../image/images7.jpeg";

const followUser = [
    {
        userName: "cthurmanrea",
        userNickName: "Followed by theoriginalavery",
        newheight: "h-8",
        width: "w-8",
        feature: "ring-red-500",
        iconName: "Follow",
        image: followUserImage1,
        textSize: "text-md",
        btnFeature: "font-medium text-blue-300"
    },
    {
        userName: "border_wulf",
        userNickName: "Followed by danielleh + 6 more",
        newheight: "h-8",
        width: "w-8",
        feature: "ring-red-500",
        iconName: "Follow",
        image: followUserImage2,
        textSize: "text-md",
        btnFeature: "font-medium text-blue-300"
    },
    {
        userName: "the_first_tutle",
        userNickName: "Followed by callie + 3 more",
        newheight: "h-8",
        width: "w-8",
        feature: "ring-red-500",
        iconName: "Follow",
        image: followUserImage3,
        textSize: "text-md",
        btnFeature: "font-medium text-blue-300"
    },
    {
        userName: "amazing_nepal",
        userNickName: "Suggested for you",
        newheight: "h-8",
        width: "w-8",
        feature: "ring-red-500",
        iconName: "Follow",
        image: followUserImage4,
        textSize: "text-md",
        btnFeature: "font-medium text-blue-300"
    },
    {
        userName: "ramarau",
        userNickName: "Followed by ramcharan + 2 more",
        newheight: "h-8",
        width: "w-8",
        feature: "ring-red-500",
        iconName: "Follow",
        image: followUserImage5,
        textSize: "text-md",
        btnFeature: "font-medium text-blue-300"
    }
]

export const FollowMapping = () => {
    return (
        <div className="user-next-page flex flex-col gap-4 my-4">
            {
                followUser.map((user, index)=>
                    <FollowUserFeatures key={index} userName={user.userName} userNickName={user.userNickName} height={user.newheight} width={user.width} feature={user.feature} iconName={user.iconName} image={user.image} textSize={user.textSize} btnFeature={user.btnFeature}/>
                )
            }
        </div>
    )
}