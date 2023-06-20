import React, { useContext } from "react";
import "../style/task.css";
import ThemeContext from "../ThemeContext";

const Task = ({ name, subtasks }) => {
    const theme = useContext(ThemeContext);

    return (
        <div
            className={`task task-${theme}`}
            onClick={() => {
                console.log(subtasks.map(({ subtaskName }) => subtaskName));
            }}
        >
            <p className={`headingM task--title-${theme}`}>{name}</p>
            <p className="bodyM task--subtasks">
                {`${subtasks.filter(({ status }) => status).length} of
                ${subtasks.length} subtasks`}
            </p>
        </div>
    );
};

export default Task;
