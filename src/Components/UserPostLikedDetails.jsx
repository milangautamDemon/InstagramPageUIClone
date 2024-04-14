import likedUserImg1 from "../image/images5.jpeg";
import likedUserImg2 from "../image/images4.jpeg";

export const UserPostLikedDetails = () => {
    return(
        <div className="like-details flex text-slate-900 mx-4 gap-4 ">
            <img src={likedUserImg1} className="w-6 h-6 rounded-full z-10 ring-2 ring-gray-50" />
            <p className="likedUserName  px-1 md:px-3">Liked by  <strong>calvarymv</strong> and <strong>others</strong></p>
            <img src={likedUserImg2} className="w-6 h-6 rounded-full -translate-x-[970%] md:-translate-x-[18rem] md:visible  sm:invisible" />
        </div>
                    
    )
}