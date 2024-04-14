/* eslint-disable react/prop-types */
export const UserNickName = ({textSize, userNickName}) => {
    return (
        <p className={`nick-name text-gray-500 ${textSize}`}>
            {userNickName}
        </p>
    )
}