import { UserImage } from "./UserImage"
import { UserName } from "./UserName"

const imageRing = "ring-red-400";
/* eslint-disable react/prop-types */
export const StoryUserList = ({ userName, image, flexDirection, features, height, width}) => {
    return(
        <div className={`user-stories flex ${flexDirection}  ${features}`}>
            <UserImage image={image} height={height} width={width} feature={imageRing} />
            
            <UserName userName={userName} />
        </div>
    )
}