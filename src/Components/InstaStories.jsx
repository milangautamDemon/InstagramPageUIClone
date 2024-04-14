import { InstaStoriesMapping } from "./InstaStoriesMapping"

import image1 from "../image/images1.jpeg";
import image2 from "../image/images2.jpg";
import image3 from "../image/images6.jpeg";
import image4 from "../image/images7.jpeg";
import image5 from "../image/images9.jpeg";


const userStories =[
    {
        image: image1,
        userName: "jonathan"
    
    },
    {
        image: image2,
        userName: "johnnyut..."
    
    },
    {
        image: image3,
        userName: "nepaldairy"
    
    },
    {
        image: image4,
        userName: "temples..."
    
    },
    {
        image: image5,
        userName: "Natureg.."
    
    }

]


export const InstaStories = () => {
    return (
        <div className="user-stories-wrapper w-[96%] bg-white py-4 px-4 rounded-md border-2 border-solid border-gray-300 flex flex-row justify-start gap-4 xl:gap-8">
            <InstaStoriesMapping userLists={userStories} />
        </div>
    )
}