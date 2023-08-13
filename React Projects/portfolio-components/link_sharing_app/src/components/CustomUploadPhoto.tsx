import React, { useState } from "react";
import "../style/uploadPhoto.css";
import { handleIcon } from "../utils/handleIcon";

interface CustomUploadPhotoProps {
  handleChangePhoto: (image: string) => void;
  photo?: string;
}

const CustomUploadPhoto = ({
  handleChangePhoto,
  photo,
}: CustomUploadPhotoProps) => {
  const [localPhoto, setLocalPhoto] = useState<string>(photo || "");

  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleUploadPhoto = (e: any) => {
    const image = e.target.files[0];
    // console.log("image:", image);
    getBase64(image).then((base64: any) => {
      console.log(base64);
      setLocalPhoto(base64);
      handleChangePhoto(base64);
    });
  };

  return (
    <div className="custom-upload-photo">
      <label
        className={`custom-upload-photo-label custom-upload-photo-label-${
          localPhoto ? "uploaded" : "not-uploaded"
        }`}
        style={
          localPhoto !== ""
            ? {
                backgroundImage: `url(${localPhoto})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "cover",
                backgroundRepeat: "no-repeat",
              }
            : {}
        }
      >
        <input
          type="file"
          onChange={(e) => handleUploadPhoto(e)}
          accept="image/png, image/jpeg"
        />
        <img
          src={handleIcon("upload")}
          alt="icon-upload"
          className="custom-upload-photo-icon"
        />
        <p className="headingS">
          {localPhoto ? "Change Photo" : "+ Upload Photo"}
        </p>
      </label>
      <div className="custom-upload-photo-text">
        <span className="bodyS">
          {/* {localPhoto ? "Image Uploaded" : "Image Not Uploaded"} */}
          Image must be below 1024x1024px. Use PNG or JPG format.
        </span>
      </div>
    </div>
  );
};

export default CustomUploadPhoto;
