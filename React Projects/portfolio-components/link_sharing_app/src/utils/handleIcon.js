import iconLink from "../assets/images/icon-link.svg";
import youtube from "../assets/images/icon-youtube.svg";
import github from "../assets/images/icon-github.svg";
import linkedin from "../assets/images/icon-linkedin.svg";
import upload from "../assets/images/icon-upload-image.svg";

export const handleIcon = (icon) => {
    switch (icon) {
        case "youtube":
            return youtube;
        case "github":
            return github;
        case "linkedin":
            return linkedin;
        case "upload":
            return upload;
        default:
            return iconLink;
    }
};
