import image7 from "../image/images8.jpeg";

export const UserPostedImageWrapper = () => {
    return(
        <div className="user-image">
            <div className="img w-full h-40 ">
                <img src={image7} className="w-full h-[12rem] object-cover" />  
            </div>
            <div className="images-viewer flex justify-between z-10 -translate-y-20">
                <div className="view-previous-items w-8 h-8 bg-gray-300 flex justify-center items-center rounded-full relative ">
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="view-next-items w-8 h-8 bg-gray-300 flex justify-center items-center rounded-full relative ">
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
    )
}