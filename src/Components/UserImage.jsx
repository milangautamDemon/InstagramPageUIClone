/* eslint-disable react/prop-types */
export const UserImage = ({image, height, width, feature}) => {
    return (
        <img src={image} className={`stories ${width} ${height} rounded-full ring-2 ${feature} ring-offset-2`} />
    )
}