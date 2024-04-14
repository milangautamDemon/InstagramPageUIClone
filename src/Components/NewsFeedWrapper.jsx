import { CommentForPost } from "./CommentForPost";
import { CommentOnPost } from "./CommentOnPost";
import { UserViewDate } from "./PostViewDate";


// import image1 from "../image/images1.jpeg";
// import image2 from "../image/images2.jpg";
// import image3 from "../image/images6.jpeg";
// import image4 from "../image/images7.jpeg";
// import image5 from "../image/images9.jpeg";


import { UserDetailWrapper } from "./UserDetailWrapper";
import { UserPostLikedDetails } from "./UserPostLikedDetails";
import { UserPostedImageWrapper } from "./UserPostedImageWrapper";
import { UserPostedPara } from "./UserPostedPara";
import { UserValueBar } from "./UserValueBar";




// const userStories =[
//     {
//         image: image1,
//         userName: "jonathan"
    
//     },
//     {
//         image: image2,
//         userName: "johnnyut..."
    
//     },
//     {
//         image: image3,
//         userName: "nepaldairy"
    
//     },
//     {
//         image: image4,
//         userName: "temples..."
    
//     },
//     {
//         image: image5,
//         userName: "Natureg.."
    
//     }

// ]


export const NewsFeedWrapper = () => {
    return (
        <div className="newsFeed-wrapper w-[96%] h-full  flex flex-col">
            
            <div className="user-newsFeed flex flex-col gap-2 bg-white xs:h-[60dvh] w-full py-2 rounded-md border-2 border-solid border-gray-300">

                <UserDetailWrapper />
                <UserPostedImageWrapper />
                <UserValueBar />
                <UserPostLikedDetails />
                <UserPostedPara />
                <CommentOnPost />
                <UserViewDate />
                <CommentForPost />

            </div>

        </div>
    )
}