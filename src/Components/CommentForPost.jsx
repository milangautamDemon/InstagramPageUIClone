import { useContext, useState } from "react";
import { DisplayIcon } from "./DisplayIcon";
import { commentContext } from "../commentContext/commentContext";

export const CommentForPost = () => {

    const {comments, setComments} = useContext(commentContext);
    const [commentState, setCommentState] = useState("");


    const handleAddComment = (e) => {
        if (commentState.trim() !== "") {
            setComments([...comments, commentState]);
            setCommentState("");
        }
        e.preventDefault();
    }

    return (
        <div className="comment-box px-4 py-2 border-gray-200 border-t-2 flex justify-between items-center">
            <div className="add-comments flex gap-2">
                <DisplayIcon icon="fa-regular text-xl fa-face-laugh" />
                <input type="text" placeholder="Add a comment..." className="active:border-0" onChange={(e)=>setCommentState(e.target.value)} value={commentState
                } />
            </div>
            <div className="post-comment text-blue-400" onClick={handleAddComment}>Post</div>

        </div>
        
    )
}