import React from "react";
import "../style/linkComponent.css";
import { handleIcon } from "../utils/handleIcon";
import allDropdownOptions from "../utils/allDropdownOptions";

type Props = {
  profileImage?: string;
  name?: string;
  surname?: string;
  email: string;
  links: ILink[];
};

interface ILink {
  link: string;
  icon: string;
  id: string;
}

const LinkComponent = ({
  profileImage,
  name,
  surname,
  email,
  links,
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
    <div className="link-component">
      <div className="link-component-content-content">
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

        <div
          style={{
            width: "16rem",
            background: surname && name ? "#fff" : "transparent",
            textAlign: "center",
            height: "2.5rem",
          }}
        >
          {name && surname && (
            <p className="link-component-name">{`${name} ${surname}`}</p>
          )}
        </div>
        {email && (
          <div
            style={{
              width: "16rem",
              background: "#fff",
              textAlign: "center",
            }}
          >
            <p className="link-component-email">{email}</p>
          </div>
        )}
        {links && links.length > 0 && (
          <div className="link-component-links">
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

export default LinkComponent;
