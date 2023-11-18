import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import "../style/customizeLinks.css";
// import {nanoid} from nanoid
import AddLinkComponent from "./AddLinkComponent";
import { handleIcon } from "../utils/handleIcon";
import { ILink } from "../Models/interfaces";

type Props = {
  links: ILink[];
  handleRemoveLink: (id: string) => void;
  handleChangeLink: (id: string, link: ILink) => void;
  handleAddNewLink: () => void;
  saveUserDataToLocalStorage: () => void;
  view: string;
};

const CustomizeLinksComponent = ({
  links,
  handleRemoveLink,
  handleChangeLink,
  handleAddNewLink,
  saveUserDataToLocalStorage,
  view
}: Props) => {
  // const [links, setLinks] = useState<ILink[]>(props.links);

  return (
    <div className={view === "desktop" ? "customize-links-wrapper-desktop" : "customize-links-wrapper-mobile" }>
      <div className="customize-links">
        <p className="headingM">Customize your links</p>
        <p className="bodyM">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <div className="customize-links-links">
          <CustomButton
            text="+ Add Link"
            type="secondary"
            onClick={() => {
              handleAddNewLink();
            }}
          />
          {links.length > 0 ? (
            links.map((link: ILink, index: number) => (
              <AddLinkComponent
                link={link}
                index={index + 1}
                handleRemove={handleRemoveLink}
                handleChangeLink={handleChangeLink}
                key={link.id}
              />
            ))
          ) : (
            <div className="customize-links-links customize-links-links-empty">
              <img
                src={handleIcon("empty-board")}
                alt="empty-board"
                className="empty-board"
                style={{
                  height: "10rem",
                  marginBottom: "1rem",
                }}
              />
              <p className="headingM">Let's get you started</p>
              <p className="bodyM">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We're here to help
                you share your profiles with everyone!
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="customize-links-buttons">
        <CustomButton
          text="Save"
          type="primary"
          width="fit-content"
          onClick={() => saveUserDataToLocalStorage()}
          isDisabled={links.length === 0}
        />
      </div>
    </div>
  );
};

export default CustomizeLinksComponent;
