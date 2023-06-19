import React from "react";
import "../style/task.css";

const Task = ({ name, subtasks }) => {
    return (
        <div
            className="task"
            onClick={() => {
                console.log(subtasks.map(({ subtaskName }) => subtaskName));
            }}
        >
            <p className="headingM">{name}</p>
            <p className="bodyM task--subtasks">
                {`${subtasks.filter(({ status }) => status).length} of
                ${subtasks.length} subtasks`}
            </p>
        </div>
    );
};

export default Task;
