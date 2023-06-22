import React, { useContext } from "react";
import "../style/header.css";
import logoLight from "../assets/images/logo-light.svg";
import logoDark from "../assets/images/logo-dark.svg";
import ThemeContext from "../ThemeContext";
import CustomButton from "./CustomButton";

const Header = ({ isSidebarOpen, addNewTask, boardName }) => {
    const theme = useContext(ThemeContext);

    const logo = theme === "light" ? logoDark : logoLight;

    return (
        <div
            className={`header header-${theme} ${
                !isSidebarOpen && "header-sidebar-closed"
            }`}
        >
            {!isSidebarOpen && (
                <div className={`header__logo header__logo-${theme}`}>
                    <img src={logo} alt="logo" />
                </div>
            )}
            <div
                className={`header__title-${theme} headingXL ${
                    !isSidebarOpen && "header__title-border"
                }`}
            >
                {boardName}
            </div>
            <CustomButton
                type="PrimaryL"
                text="Add new task"
                onClick={addNewTask}
                plusIcon={true}
                width="165px"
            />
            <div
                className="header__options"
                onClick={() => console.log("Hamburger Clicked!!!")}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;
