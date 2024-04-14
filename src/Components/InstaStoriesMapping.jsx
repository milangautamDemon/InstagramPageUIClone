/* eslint-disable react/prop-types */

import { StoryUserList } from "./StoryUserList";

const flexDirection = "flex-col";
const features = "justify-between items-center gap-2"
const height = "h-12";
const width = "w-12"

export const InstaStoriesMapping = ({userLists}) => {
    return (
       <>
        {
            userLists.map((userstory, index)=> <StoryUserList key={index} image={userstory.image} userName={userstory.userName} height={height} width={width} flexDirection={flexDirection} features={features} />) 
        } 
                
        </>
    )
}

