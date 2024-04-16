/* eslint-disable react/prop-types */
import { menuListsContext } from "../commentContext/menuListsContext";

export const MenuListsProvider = ({children}) => {
    const menulists = [
        {icon: "fa-home", iconTitle: "Home"},
        {icon: "fa-search", iconTitle: "Search"},
        {icon: "fa-bandcamp", iconTitle: "Explore"},
        {icon: "fab fa-facebook-messenger", iconTitle: "Messages"},
        {icon: "fa-regular fa-heart", iconTitle: "Notification"},
        {icon: "fa-plus-square", iconTitle: "Create"},
        {icon: "fa-solid fa-circle-user", iconTitle: "Profile"} 
        ];

    return(
        <menuListsContext.Provider value={menulists}>
            {children}
        </menuListsContext.Provider>
    )
}