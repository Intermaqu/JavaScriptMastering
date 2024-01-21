import logo from "./assets/images/logo.svg"
import avatar from "./assets/images/image-avatar.jpg"
import moon from "./assets/images/icon-moon.svg"
import sun from "./assets/images/icon-sun.svg"
import trashCan from "./assets/images/icon-delete.svg"

export const handleImage = (name: string) => {
    switch (name) {
        case "logo":
            return logo
        case "avatar":
            return avatar
        case "moon":
            return moon
        case "sun":
            return sun
        case "trashCan":
            return trashCan
        default:
            return ""
    }
}