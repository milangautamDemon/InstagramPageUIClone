/* eslint-disable react/prop-types */
import { UserImage } from "./UserImage"
import { UserName } from "./UserName";
import { BtnIcon } from "./BtnIcon";
import { UserNickName } from "./UserNickName";

export const FollowUserFeatures = ({userName, userNickName, height, width, feature, iconName, image , textSize, btnFeature}) => {
    return (
        <div className="user-next-page flex flex-col gap-1 items-start lg:flex-row lg:justify-between lg:items-center">
            <div className="page-owner-details flex flex-col gap-4 items-start lg:flex-row lg:justify-between lg:items-center">
                <UserImage image={image} height={height} width={width} feature={feature} />
                <div className="page-owner-name row row-col items-center">
                    <UserName userName={userName} />
                    <UserNickName userNickName={userNickName} textSize={textSize} />
                </div>
            </div>
            <BtnIcon iconName={iconName} btnFeature={btnFeature}/>
            </div>
    )
}