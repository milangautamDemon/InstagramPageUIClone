
import { NewsFeedWrapper } from "./NewsFeedWrapper"
import { InstaStories } from "./InstaStories";

export const InstaPage = () => {
    return (
        <div className="flex justify-end md:w-[65%] lg:w-[50%]">
            <div className="insta-page h-full w-[400px] lg:w-[450px] xl:w-[550px] py-5 flex flex-col items-center md:items-end gap-4 overflow-hidden">
                <InstaStories />
                <NewsFeedWrapper />
                {/* <NewsFeedWrapper /> */}
            </div>
        </div>
    )
}