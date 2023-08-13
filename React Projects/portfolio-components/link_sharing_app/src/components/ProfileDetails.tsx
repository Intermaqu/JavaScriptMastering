import React from "react";
import "../style/profileDetails.css";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import CustomUploadPhoto from "./CustomUploadPhoto";

type Props = {
  image?: string;
  name?: string;
  surname?: string;
  email: string;
  photo?: string;
  handleChangeUserData: (name: string, value: string) => void;
  saveUserDataToLocalStorage: () => void;
  handleLogout: () => void;
  handleChangePhoto: (photo: string) => void;
};

const ProfileDetails = ({
  image,
  name,
  surname,
  email,
  photo,
  handleChangeUserData,
  saveUserDataToLocalStorage,
  handleLogout,
  handleChangePhoto,
}: Props) => {
  const [localName, setLocalName] = React.useState<string>(name || "");
  const [localSurname, setLocalSurname] = React.useState<string>(surname || "");

  const handleLocalNameChange = (name: string, value: string) => {
    setLocalName(value);
    handleChangeUserData("name", value);
  };

  const handleLocalSurnameChange = (name: string, value: string) => {
    setLocalSurname(value);
    handleChangeUserData("surname", value);
  };

  return (
    <div className="profile-details-wrapper">
      <div className="profile-details">
        <p className="headingM">Profile Details</p>
        <p className="bodyM">
          Add your details to create a personal touch to your profile.
        </p>
        <div className="profile-details-content">
          <div className="profile-details-content-image">
            <p className="bodyS">Profile picture</p>
            <CustomUploadPhoto
              handleChangePhoto={handleChangePhoto}
              photo={photo}
            />
          </div>
          <div className="profile-details-content-user-data">
            <div className="profile-details-user-input-wrapper">
              <p className="bodyM">Name</p>
              <CustomInput
                value={localName}
                onChangeValue={handleLocalNameChange}
                name={"name"}
                placeholder={"Name"}
              />
            </div>
            <div className="profile-details-user-input-wrapper">
              <p className="bodyM">Surname</p>
              <CustomInput
                value={localSurname}
                onChangeValue={handleLocalSurnameChange}
                name={"surname"}
                placeholder={"Surname"}
              />
            </div>
          </div>
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
          onClick={() => saveUserDataToLocalStorage()}
        />
      </div>
    </div>
  );
};

export default ProfileDetails;
