import React from "react";
import "../style/profileDetails.css";
import CustomButton from "./CustomButton";
import CustomUploadPhoto from "./CustomUploadPhoto";

type Props = {
  image?: string;
  name?: string;
  surname?: string;
  email?: string;
  handleChangeUserData?: (name: string, value: string) => void;
  saveUserDataToLocalStorage?: () => void;
  handleLogout: () => void;
};

const ProfileDetails = ({
  image,
  name,
  surname,
  email,
  handleChangeUserData,
  saveUserDataToLocalStorage,
  handleLogout,
}: Props) => {
  return (
    <div className="profile-details-wrapper">
      <div className="profile-details">
        <p className="headingM">Profile Details</p>
        <p className="bodyM">
          Add your details to create a personal touch to your profile.
        </p>
        <div className="profile-details-content">
          <div className="profile-details-content-image">
            <CustomUploadPhoto />
          </div>
          <div className="profile-details-content-user-data"></div>
        </div>
      </div>
      <div className="profile-details-buttons">
        <CustomButton
          text="Logout"
          type="dangerous"
          width="fit-content"
          onClick={() => handleLogout()}
        />
        <CustomButton
          text="Save"
          type="primary"
          width="fit-content"
          onClick={() => saveUserDataToLocalStorage!()}
        />
      </div>
    </div>
  );
};

export default ProfileDetails;
