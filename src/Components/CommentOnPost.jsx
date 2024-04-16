import { useContext, useState } from "react"
import { commentContext } from "../commentContext/commentContext";


export const CommentOnPost = () => {
    const {comments} = useContext(commentContext)
    const [visible, setVisible] = useState("hidden")
    const [hidden, setHidden] = useState("visible")

    const handleViewComment = (e) => {
        comments.length>0?setVisible("visible"):setVisible("hidden");
        comments.length>0?setHidden("hidden"):setHidden("visible");
        e.preventDefault();
    }
    const handleCloseComment = (e) => {
        setVisible("hidden");
        setHidden("visible");
        e.preventDefault();
    }


    return (
        <div className="comments-container">
            <div className={`comment-lists px-4 text-gray-500 ${hidden}`}  onClick={handleViewComment}>
                View {comments.length} comments
            </div>
            {/* <div className={`view-comment font-bold px-4 ${hidden}`} onClick={handleViewComment}>
                View Comments
            </div> */}
            <div className={`comment-container flex justify-between items-start px-4 ${visible}`}>
                <div className="comments">
                    {comments.map((comment, index) => (
                            <div key={index}>{comment}</div>
                    ))}
                </div>
                <div className="view-comment text-blue-400 font-medium" onClick={handleCloseComment}>
                    Close Comments
                </div>
            </div>
        </div>
       
    )
}