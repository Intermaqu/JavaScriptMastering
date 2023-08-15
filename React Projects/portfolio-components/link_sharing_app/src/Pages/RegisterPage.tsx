import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { handleIcon } from "../utils/handleIcon";
import "../style/loginPage.css";
import CustomButton from "../components/CustomButton";

type Props = {
  setIsRegisterShown: (isRegisterShown: boolean) => void;
};

interface RegisterData {
  email: string;
  password: string;
  password2: string;
}

const RegisterPage = ({ setIsRegisterShown }: Props) => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    email: "",
    password: "",
    password2: "",
  });
  const [isValidForm, setIsValidForm] = useState<boolean>(true);

  const handlePasswordErrorMessage = (text: string, text2?: string) => {
    if (text === "") return "Can't be empty";

    if (text.length < 8) return "Password must be at least 8 characters";

    if (text2 !== undefined && text !== text2)
      return "Password should be identical";

    return "Please check again";
  };

  const handleEmailErrorMessage = (text: string) => {
    if (text === "") return "Can't be empty";

    if (text.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$") === null)
      return "Email is not valid";
    return "Please check again";
  };

  const handleEditData = (key: string, value: string) => {
    setIsValidForm(true);
    setRegisterData({
      ...registerData,
      [key]: value,
    });
  };

  const isValid = (name: string, value: string) => {
    if (name === "email") {
      if (value === "") {
        return false;
      }

      if (
        value.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$") === null
      ) {
        return false;
      }
      return true;
    }

    if (name === "password") {
      if (value === "") {
        return false;
      }
      if (value.length < 8) {
        return false;
      }
      if (registerData.password !== registerData.password2) {
        return false;
      }
      return true;
    }
  };

  const validateForm = () => {
    // console.log("validate");
    // console.log(registerData.email);
    // console.log(registerData.password);
    // console.log(registerData.password2);

    if (
      registerData.email === "" ||
      registerData.password === "" ||
      registerData.password2 === "" ||
      registerData.password !== registerData.password2 ||
      registerData.password.length < 8 ||
      registerData.password2.length < 8
    ) {
      setIsValidForm(false);
      return;
    }

    const userDataStringified = JSON.stringify({
      email: registerData.email,
      password: registerData.password,
      name: "",
      surname: "",
      photo: "",
      links: [],
    });

    setIsValidForm(true);
    localStorage.setItem(registerData.email, userDataStringified);
    setIsRegisterShown(false);
  };

  return (
    <div className="loginPage">
      <div className="loginPage-logo-container">
        <img src={handleIcon("largeLogo")} alt="DevLinks Logo" />
      </div>
      <div className="loginPage-form-container">
        <div className="loginPage-form-container-header">
          <p className="headingM">Create account</p>
          <p className="bodyM">Let's get you started sharing your links!</p>
        </div>
        <div className="loginPage-form-container-body">
          <div>
            <p className="bodyS">Email address</p>
            <CustomInput
              value={registerData.email}
              onChangeValue={handleEditData}
              placeholder="email"
              width="100%"
              type="email"
              name="email"
              isValid={isValidForm || isValid("email", registerData.email)}
              icon="email"
              errorMessage={handleEmailErrorMessage(registerData.email)}
            />
          </div>
          <div>
            <p className="bodyS">Create Password</p>
            <CustomInput
              value={registerData.password}
              onChangeValue={handleEditData}
              placeholder="password"
              width="100%"
              type="password"
              name="password"
              isValid={
                isValidForm || isValid("password", registerData.password)
              }
              icon="password"
              errorMessage={handlePasswordErrorMessage(
                registerData.password,
                registerData.password2
              )}
            />
          </div>
          <div>
            <p className="bodyS">Confirm Password</p>
            <CustomInput
              value={registerData.password2}
              onChangeValue={handleEditData}
              placeholder="password"
              width="100%"
              type="password"
              name="password2"
              isValid={
                isValidForm || isValid("password", registerData.password2)
              }
              icon="password"
              errorMessage={handlePasswordErrorMessage(
                registerData.password2,
                registerData.password
              )}
              onKeyPress={validateForm}
            />
          </div>
          <p className="bodyS">Password must contains at least 8 characters</p>
          <CustomButton
            text="Create new account"
            width="100%"
            onClick={validateForm}
          />
          <p className="bodyM loginPage-form-container-body-register">
            Already have an account?{" "}
            <span
              className="register-link"
              onClick={() => setIsRegisterShown(false)}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
