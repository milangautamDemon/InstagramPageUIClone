import { InstaPage } from './InstaPage';
import { InstaMenuWrapper } from './InstaMenuWrapper';
import { FollowUsersWrapper } from './FollowUsersWrapper';

export const InstaHomePage = () => {
    return (
        <div className="insta-main-container flex flex-row h-full w-dvw bg-gray-50">
            <InstaMenuWrapper />
            <InstaPage />
            <FollowUsersWrapper />
        
        </div>
    )
}