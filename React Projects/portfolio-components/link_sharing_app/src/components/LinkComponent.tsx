import React from "react";
import "../style/linkComponent.css";
import { handleIcon } from "../utils/handleIcon";

type Props = {
  profileImage?: string;
  name?: string;
  email?: string;
  links?: ILink[];
};

interface ILink {
  link: string;
  icon: string;
  id: string;
}

const LinkComponent = ({ profileImage, name, email, links }: Props) => {
  return (
    <div className="link-component">
      <div className="link-component-content-content">
        {profileImage ? (
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
        ) : (
          <div className="link-component-content-content-profile-placeholder"></div>
        )}
        {name && (
          <div
            style={{
              width: "16rem",
              background: "#fff",
              textAlign: "center",
            }}
          >
            <p className="link-component-name">{name}</p>
          </div>
        )}
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
              <div className="link-component-link" key={link.id}>
                <img src={handleIcon(link.icon)} alt={link.link} />
                <div className="link-component-link-text">{link.icon}</div>
                <img src={handleIcon("arrowRight")} alt="arrow-right" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkComponent;
