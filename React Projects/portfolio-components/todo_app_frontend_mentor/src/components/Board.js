import React, { useContext, useEffect, useState, useRef } from "react";
import "../style/board.css";
import ThemeContext from "../ThemeContext";
import Column from "./Column";
import CustomButton from "./CustomButton";
import eyeIcon from "../assets/images/icon-show-sidebar.svg";

const Board = ({
    columns,
    isSidebarOpen,
    setIsSidebarOpen,
    setIsAddNewColumnShown,
}) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isSpaceClicked, setIsSpaceClicked] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(null);
    const boardRef = useRef(null);

    const theme = useContext(ThemeContext);

    const handleMouseDown = (e) => {
        setIsMouseDown(true);
        setStartX(e.pageX - boardRef.current.offsetLeft);
        setScrollLeft(boardRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsMouseDown(false);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        if (!isSpaceClicked) return;
        e.preventDefault();
        const x = e.pageX - boardRef.current.offsetLeft;
        const walk = (x - startX) * 1;
        boardRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const handleSpacePressed = (e) => {
            if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
                setIsSpaceClicked(true);
            }
        };
        const handleSpaceReleased = (e) => {
            if (e.key === " " || e.code === "Space" || e.keyCode === 32) {
                setIsSpaceClicked(false);
            }
        };
        document.addEventListener("keydown", handleSpacePressed);
        document.addEventListener("keyup", handleSpaceReleased);

        return () => {
            document.removeEventListener("keydown", handleSpacePressed);
            document.removeEventListener("keyup", handleSpaceReleased);
        };
    }, []);

    return (
        <div
            className={`board ${
                columns.length === 0 && "board-empty"
            } board-${theme} ${!isSidebarOpen && "board-sidebar-hidden"}`}
            ref={boardRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{
                cursor:
                    isSpaceClicked && isMouseDown
                        ? "grabbing"
                        : isSpaceClicked
                        ? "grab"
                        : "default",
            }}
        >
            {columns.length > 0 ? (
                <div className="board-scrollable-columns">
                    {columns.map(({ id, columnName, dotColor, tasks }) => (
                        <Column
                            key={id}
                            columnName={columnName}
                            dotColor={dotColor}
                            tasks={tasks}
                            columnId={id}
                        />
                    ))}
                    <div
                        className={`column board--add-column board--add-column-${theme}`}
                        onClick={() => setIsAddNewColumnShown(true)}
                    >
                        <p className="headingXL">+ New Column</p>
                    </div>
                </div>
            ) : (
                <>
                    <p className={`headingL board-empty-text`}>
                        This board is empty. Create a new column to get started.
                    </p>
                    <CustomButton
                        text="Add New Column"
                        onClick={() => {
                            console.log("Add New Column");
                        }}
                        // callback={addNewColumn}
                        type="PrimaryL"
                        width="175px"
                        plus
                    />
                </>
            )}

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
