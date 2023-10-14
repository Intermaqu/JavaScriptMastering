import React from "react";
import CustomButton from "../components/CustomButton";
import LinkComponent from "../components/LinkComponent";
import { handleIcon } from "../utils/handleIcon";
import "../style/previewPage.css";
import allDropdownOptions from "../utils/allDropdownOptions";

interface Props {
  email: string;
  links: ILink[];
  name?: string;
  profileImage?: string;
  surname?: string;
  handleClosePreview: (value: boolean) => void;
}

interface ILink {
  link: string;
  icon: string;
  id: string;
}

const PreviewPage = ({
  email,
  links,
  name,
  profileImage,
  surname,
  handleClosePreview,
}: Props) => {
  const openInNewTab = (url: string) => {
    if (url === "") return;
    if (url.includes("http://") || url.includes("https://"))
      return window.open(url, "_blank", "noopener,noreferrer");

    const newWindow = window.open(
      `http://${url}`,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="preview-page">
      <div className="preview-page-header-wrapper">
        <div className="preview-page-header">
          <img src={handleIcon("largeLogo")} alt="DevLinks Logo" />
          <CustomButton
            type="secondary"
            text="Edit"
            width="fit-content"
            onClick={() => handleClosePreview(false)}
          />
        </div>
      </div>
      <div className="preview-page-content">
        <div
          style={
            profileImage !== ""
              ? {
                  backgroundImage: `url(${profileImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                }
              : {}
          }
          className="link-component-content-content-profile"
        />

        {name && surname && (
          <p className="headingM preview-page-name">{`${name} ${surname}`}</p>
        )}
        {email && <p className="bodyM preview-page-mail">{email}</p>}
        {links && links.length > 0 && (
          <div className="preview-page-links">
            {links.map((link) => (
              <div
                className="link-component-link"
                style={{
                  background: allDropdownOptions.find(
                    (option) => option.icon === link.icon
                  )!.background,
                  color: allDropdownOptions.find(
                    (option) => option.icon === link.icon
                  )!.color,
                  borderWidth: `${
                    link.icon === "frontendMentor" ? "1px" : "0px !important"
                  }`,
                }}
                key={link.id}
                onClick={() => openInNewTab(link.link)}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.button === 1 && openInNewTab(link.link);
                }}
              >
                <img
                  src={handleIcon(link.icon)}
                  alt={link.link}
                  style={{
                    filter: `${
                      link.icon !== "frontendMentor"
                        ? "invert(100%) sepia(0%) saturate(1000%) hue-rotate(35deg) brightness(1000%) contrast(103%)"
                        : "none"
                    }`,
                  }}
                />
                <div className="link-component-link-text">{link.icon}</div>
                <img
                  src={handleIcon("arrowRight")}
                  alt="arrow-right"
                  style={{
                    filter: `${
                      link.icon === "frontendMentor"
                        ? "invert(43%) sepia(42%) saturate(0%) hue-rotate(259deg) brightness(97%) contrast(94%)"
                        : "invert(0%) sepia(0%) saturate(1000%) hue-rotate(35deg) brightness(1000%) contrast(103%)"
                    }`,
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewPage;
