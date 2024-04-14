/* eslint-disable react/prop-types */
export const BtnIcon = ({iconName, btnFeature}) => {
    return (
        <div className={`btn-icon text-md md:text-lg ${btnFeature}`}>{iconName}</div>
    )
}