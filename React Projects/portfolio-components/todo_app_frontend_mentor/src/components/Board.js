import React, { useContext } from "react";
import "../style/board.css";
import ThemeContext from "../ThemeContext";
import Column from "./Column";
import CustomButton from "./CustomButton";
import eyeIcon from "../assets/images/icon-show-sidebar.svg";

const Board = ({ columns, addNewColumn, isSidebarOpen, setIsSidebarOpen }) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            className={`board ${
                columns.length === 0 && "board-empty"
            } board-${theme}`}
        >
            {columns.length > 0 ? (
                columns.map(({ id, columnName, dotColor, tasks }) => (
                    <Column
                        key={id}
                        columnName={columnName}
                        dotColor={dotColor}
                        tasks={tasks}
                    />
                ))
            ) : (
                <>
                    <p className="headingM">
                        This board is empty. Create a new column to get started.
                    </p>
                    <CustomButton
                        text="Add New Column"
                        callback={() => {
                            console.log("Add New Column");
                        }}
                        // callback={addNewColumn}
                        type="PrimaryL"
                        width="175px"
                        plus
                    />
                </>
            )}
            {/* 
                TODO!!!
            {columns.length > 0 && <NewColumnButton/>} */}

            {!isSidebarOpen && (
                <div
                    className="sidebar-toggle-button"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    <img src={eyeIcon} alt="sidebar toggler" />
                </div>
            )}
        </div>
    );
};

export default Board;
