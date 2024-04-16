import { useContext } from "react"
import { commentContext } from "../commentContext/commentContext"
import { FaRegComments } from "react-icons/fa6";
import { BsEnvelopePaperHeart } from "react-icons/bs";
import { loveCountContext } from "../commentContext/loveCountContext";


export const InstaHeading = () => {
    const {comments} = useContext(commentContext);
    const {loveCount} = useContext(loveCountContext);
    return (
        <>
          <div className="Insta-heading font-bold lg:text-xl text-lg border-b-2">Instagram</div>
          <div className="comments flex gap-4 items-center">
            <FaRegComments />
            <div className="comments-length font-bold">
                Comments {comments.length}
            </div>
          </div>

          <div className="love flex gap-4  items-center">
            <BsEnvelopePaperHeart />
            <div className="love-length font-bold ">
                React By {loveCount}
            </div>
          </div>
        </>
    )
}