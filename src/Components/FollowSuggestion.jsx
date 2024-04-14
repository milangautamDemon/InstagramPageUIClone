import { UserNickName } from "./UserNickName";
import { BtnIcon } from "./BtnIcon";
export const FollowSuggestion = () => {
    return (
        <div className="user-next-page border-y-2 py-4 border-gray-300 lg:border-none lg:flex lg:flex-row lg:justify-between lg:items-center gap-2">
            <UserNickName userNickName="Suggestion For You"/>
            <BtnIcon iconName="See All" feature="text-black text-bold" />
        </div>
    )
}