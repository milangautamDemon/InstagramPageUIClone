import { StoryUserList } from "./StoryUserList";
import image1 from "../image/images1.jpeg";

export const UserDetailWrapper = () => {
    return(
        <div className="users-detail-wrapper flex flex-row justify-between  mx-4 items-center">
            <div className="user flex flex-row py-2">
                <StoryUserList image={image1} userName="jonathan" height="h-8" width="w-8" flexDirection="flex-row" justifyType="flex-start" features="gap-4 items-center" />
            </div>
            <i className="fa-solid fa-ellipsis"></i>
        </div>
    )
}