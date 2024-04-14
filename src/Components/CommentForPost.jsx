import { DisplayIcon } from "./DisplayIcon";

export const CommentForPost = () => {
    return (
        <div className="comment-box px-4 py-2 border-gray-200 border-t-2 flex justify-between items-center">
            <div className="add-comments flex gap-2">
                <DisplayIcon icon="fa-regular text-xl fa-face-laugh" />
                <input type="text" placeholder="Add a comment..." className="active:border-0" />
            </div>
            <div className="post-comment text-blue-400">Post</div>
        </div>
    )
}