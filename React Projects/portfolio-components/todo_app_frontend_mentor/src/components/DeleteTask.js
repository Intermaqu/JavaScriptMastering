import React, { useContext } from "react";
import CustomButton from "./CustomButton";
import ThemeContext from "../ThemeContext";
import "../style/deleteTask.css";

const DeleteTask = ({
    task,
    handleDeleteTask,
    setIsDeleteTaskShown,
    columnId,
}) => {
    const theme = useContext(ThemeContext);

    return (
        <div className="overlay">
            <div className={`delete-task delete-task-${theme}`}>
                <p className="headingL font-red">Delete this task?</p>
                <p className="bodyL">
                    {`Are you sure you want to delete the '${task.taskName}' task and its subtasks? This action cannot be reversed`}
                </p>
                <div className="delete-task-buttons">
                    <CustomButton
                        text="Delete"
                        type="Destructive"
                        onClick={() => {
                            handleDeleteTask(task.id, columnId);
                            setIsDeleteTaskShown(false);
                        }}
                        width="200px"
                    />
                    <CustomButton
                        text="Cancel"
                        type="Secondary"
                        onClick={() => setIsDeleteTaskShown(false)}
                        width="200px"
                    />
                </div>
            </div>
        </div>
    );
};

export default DeleteTask;
