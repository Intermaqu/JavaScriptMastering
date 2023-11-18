import iconLink from "../assets/images/icon-link.svg";
import youtube from "../assets/images/icon-youtube.svg";
import github from "../assets/images/icon-github.svg";
import linkedin from "../assets/images/icon-linkedin.svg";
import upload from "../assets/images/icon-upload-image.svg";
import largeLogo from "../assets/images/logo-devlinks-large.svg";
import smallLogo from "../assets/images/logo-devlinks-small.svg";
import eye from "../assets/images/icon-profile-details-header.svg"
import email from "../assets/images/icon-email.svg";
import password from "../assets/images/icon-password.svg";
import profile from "../assets/images/icon-profile-details-header.svg";
import arrowRight from "../assets/images/icon-arrow-right.svg";
import codepen from "../assets/images/icon-codepen.svg";
import codewars from "../assets/images/icon-codewars.svg";
import devTo from "../assets/images/icon-devto.svg";
import facebook from "../assets/images/icon-facebook.svg";
import frontendMentor from "../assets/images/icon-frontend-mentor.svg";
import twitch from "../assets/images/icon-twitch.svg";
import twitter from "../assets/images/icon-twitter.svg";
import gitlab from "../assets/images/icon-gitlab.svg";
import freeCodeCamp from "../assets/images/icon-freecodecamp.svg";
import hashnode from "../assets/images/icon-hashnode.svg";
import stackoverflow from "../assets/images/icon-stack-overflow.svg";
import emptyPhone from "../assets/images/illustration-empty.svg";

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
    case "profile":
      return profile;
    case "arrowRight":
      return arrowRight;
    case "codepen":
      return codepen;
    case "codewars":
      return codewars;
    case "devTo":
      return devTo;
    case "facebook":
      return facebook;
    case "frontendMentor":
      return frontendMentor;
    case "twitch":
      return twitch;
    case "twitter":
      return twitter;
    case "gitlab":
      return gitlab;
    case "freeCodeCamp":
      return freeCodeCamp;
    case "hashnode":
      return hashnode;
    case "stackoverflow":
      return stackoverflow;
    case "empty-board":
      return emptyPhone;
    case "eye":
      return eye;
    default:
      return iconLink;
  }
};

export const handleFormatName = (name: string) => {
  switch (name) {
    case "youtube":
      return "Youtube";
    case "github":
      return "Github";
    case "linkedin":
      return "LinkedIn";
    case "codepen":
      return "Codepen";
    case "codewars":
      return "Codewars";
    case "devTo":
      return "Dev.to";
    case "facebook":
      return "Facebook";
    case "frontendMentor":
      return "Frontend Mentor";
    case "twitch":
      return "Twitch";
    case "twitter":
      return "Twitter";
    case "gitlab":
      return "Gitlab";
    case "freeCodeCamp":
      return "FreeCodeCamp";
    case "hashnode":
      return "Hashnode";
    case "stackoverflow":
      return "Stack Overflow";
    default:
      return "ERROR";
  }
};
