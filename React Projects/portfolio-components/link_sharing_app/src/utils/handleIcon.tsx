import iconLink from "../assets/images/icon-link.svg";
import youtube from "../assets/images/icon-youtube.svg";
import github from "../assets/images/icon-github.svg";
import linkedin from "../assets/images/icon-linkedin.svg";
import upload from "../assets/images/icon-upload-image.svg";
import largeLogo from "../assets/images/logo-devlinks-large.svg";
import smallLogo from "../assets/images/logo-devlinks-small.svg";
import email from "../assets/images/icon-email.svg";
import password from "../assets/images/icon-password.svg";

export const handleIcon = (icon: string) => {
  switch (icon) {
    case "youtube":
      return youtube;
    case "github":
      return github;
    case "linkedin":
      return linkedin;
    case "upload":
      return upload;
    case "largeLogo":
      return largeLogo;
    case "smallLogo":
      return smallLogo;
    case "email":
      return email;
    case "password":
      return password;
    default:
      return iconLink;
  }
};
