import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { handleIcon } from "../utils/handleIcon";
import "../style/loginPage.css";
import CustomButton from "../components/CustomButton";

type Props = {
  setIsLoggedIn: (isLogin: boolean) => void;
  setUserData: (userData: IUserData) => void;
  setIsRegisterShown: (isRegisterShown: boolean) => void;
};

interface IUserData {
  name?: string;
  surname?: string;
  email: string;
  password: string;
  photo?: string;
  links?: ILink[];
}

interface ILink {
  link: string;
  icon: string;
  id: string;
}

type LoginData = {
  email: string;
  password: string;
};

const LoginPage = ({
  setIsLoggedIn,
  setUserData,
  setIsRegisterShown,
}: Props) => {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });
  const [isValidForm, setIsValidForm] = useState<boolean>(true);

  const handleEditData = (key: string, value: string) => {
    setIsValidForm(true);
    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const validateForm = () => {
    console.log("validate");
    console.log(loginData.email);
    console.log(loginData.password);

    if (loginData.email === "" || loginData.password === "") {
      setIsValidForm(false);
      return;
    }

    const localStorageData = localStorage.getItem(loginData.email);

    if (localStorageData === null) {
      setIsValidForm(false);
      return;
    }

    const parsedData = JSON.parse(localStorageData);
    if (parsedData.password !== loginData.password) {
      setIsValidForm(false);
      return;
    }

    setIsLoggedIn(true);
    setUserData(parsedData);
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
      return true;
    }
  };

  const handleEmailErrorMessage = (text: string) => {
    if (text === "") return "Can't be empty";

    if (text.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$") === null)
      return "Email is not valid";
    return "Please check again";
  };

  const handlePasswordErrorMessage = (text: string, text2?: string) => {
    if (text === "") return "Can't be empty";

    if (text.length < 8) return "Password must be at least 8 characters";

    return "Please check again";
  };

  return (
    <div className="loginPage">
      <div className="loginPage-logo-container">
        <img src={handleIcon("largeLogo")} alt="DevLinks Logo" />
      </div>
      <div className="loginPage-form-container">
        <div className="loginPage-form-container-header">
          <p className="headingM">Login</p>
          <p className="bodyM">
            Add your details below to get back into the app
          </p>
        </div>
        <div className="loginPage-form-container-body">
          <div>
            <p className="bodyS">Email address</p>
            <CustomInput
              name="email"
              value={loginData.email}
              onChangeValue={handleEditData}
              placeholder="email"
              width="100%"
              type="email"
              isValid={isValidForm || isValid("email", loginData.email)}
              icon="email"
              errorMessage={handleEmailErrorMessage(loginData.email)}
            />
          </div>
          <div>
            <p className="bodyS">Password</p>
            <CustomInput
              value={loginData.password}
              name="password"
              onChangeValue={handleEditData}
              placeholder="password"
              width="100%"
              type="password"
              isValid={isValidForm || isValid("email", loginData.password)}
              icon="password"
              errorMessage={handlePasswordErrorMessage(loginData.password)}
              onKeyPress={validateForm}
            />
          </div>
          <CustomButton text="Login" width="100%" onClick={validateForm} />
          <p className="bodyM loginPage-form-container-body-register">
            Don't have an account?{" "}
            <span
              className="register-link"
              onClick={() => setIsRegisterShown(true)}
            >
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
