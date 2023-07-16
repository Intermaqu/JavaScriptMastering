import React, { useEffect, useState } from "react";
import "../style/uploadPhoto.css";
import { handleIcon } from "../utils/handleIcon";

const CustomUploadPhoto = () => {
    const [photo, setPhoto] = useState(null);

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file);
        });
    };

    const handleUploadPhoto = (e) => {
        const image = e.target.files[0];
        getBase64(image).then((base64) => {
            localStorage.setItem("photo", base64);
            // console.debug("file stored", base64);
            setPhoto(base64);
        });
    };

    useEffect(() => {
        const localPhoto = localStorage.getItem("photo");
        // console.log("localPhoto:", localPhoto);
        if (localPhoto && Object.keys(localPhoto).length > 0) {
            setPhoto(localPhoto);
        }
    }, []);

    // useEffect(() => {
    //     console.log("photo:", photo);
    // }, [photo]);

    return (
        <div className="custom-upload-photo">
            <label
                className={`custom-upload-photo-label custom-upload-photo-label-${
                    photo ? "uploaded" : "not-uploaded"
                }`}
                style={
                    photo && {
                        backgroundImage: `url(${photo})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        objectFit: "cover",
                        backgroundRepeat: "no-repeat",
                    }
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
                    {photo ? "Change Photo" : "+ Upload Photo"}
                </p>
            </label>
            <div className="custom-upload-photo-text">
                <span className="bodyM">
                    {photo ? "Image Uploaded" : "Image Not Uploaded"}
                </span>
            </div>
        </div>
    );
};

export default CustomUploadPhoto;
