import logo from "./assets/images/logo.svg"


export const handleImage = (name: string) => {
    switch (name) {
        case "logo":
            return logo
        default:
            return ""
    }
}