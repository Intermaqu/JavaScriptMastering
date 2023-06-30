import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../ThemeContext";
import CustomCheckbox from "./CustomCheckbox";
import CustomDropdown from "./CustomDropdown";
import "../style/inspectTask.css";

const InspectTask = ({
    task: { taskName, description, subtasks, id },
    columns,
    status,
    setIsInspectTaskShown,
    handleEditTask,
}) => {
    const theme = useContext(ThemeContext);
    const [currentSubtasks, setCurrentSubtasks] = useState(subtasks);
    const [currentStatus, setCurrentStatus] = useState(status);

    const handleChangeSubtasks = (subtaskId) => {
        const newSubtasks = currentSubtasks.map((subtask) => {
            if (subtask.id === subtaskId) {
                return {
                    ...subtask,
                    status: !subtask.status,
                };
            }
            return subtask;
        });
        handleEditTask(
            taskName,
            description,
            newSubtasks,
            {
                columnId: status.columnId,
                columnName: status.columnName,
            },
            status.columnId,
            id,
        );
        setCurrentSubtasks(newSubtasks);
    };

    const handleChangeStatus = (newStatus) => {
        handleEditTask(
            taskName,
            description,
            currentSubtasks,
            {
                columnId: newStatus.id,
                columnName: newStatus.columnName,
            },
            status.columnId,
            id,
        );

        setCurrentStatus(newStatus);
    };

    const handleChangeTask = (payload) => {
        // console.log("Payload:", payload);

        if (payload.id) {
            // payload = {
            //     id: payload.id,
            //     columnName: payload.columnName,
            // }

            handleEditTask(
                taskName,
                description,
                currentSubtasks,
                {
                    columnId: payload.id,
                    columnName: payload.columnName,
                },
                currentStatus.columnId,
                id,
            );

            setCurrentStatus(payload);
            // TEMPORARY FIX
            setIsInspectTaskShown(false);
            return;
        }

        // payload = subtaskId
        if (typeof payload === "string") {
            const newSubtasks = currentSubtasks.map((subtask) => {
                if (subtask.id === payload) {
                    return {
                        ...subtask,
                        status: !subtask.status,
                    };
                }
                return subtask;
            });
            // console.log("newSubtasks:", newSubtasks);

            handleEditTask(
                taskName,
                description,
                newSubtasks,
                {
                    columnId: currentStatus.id,
                    columnName: currentStatus.columnName,
                },
                currentStatus.id,
                id,
            );
            setCurrentSubtasks(newSubtasks);
            return;
        }
    };

    // useEffect(() => {
    //     console.log("USEEFFECT CURRENTSTATUS", currentStatus);
    // }, [currentStatus]);

    // useEffect(() => {
    //     console.log("USEEFFECT CURENTSUBTASKS", currentSubtasks);
    // }, [currentSubtasks]);

    return (
        <div
            className="overlay"
            onMouseDown={() => setIsInspectTaskShown(false)}
        >
            <div
                className={`inspect-task inspect-task-${theme}`}
                onMouseDown={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="inspect-task-header">
                    <p className={`headingL inspect-task-heading-${theme}`}>
                        {taskName}
                    </p>
                    <div
                        className="header__options"
                        onClick={() => console.log("Hamburger Clicked!!!")}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <p className="bodyL">{description}</p>
                <div className="inspect-task-section">
                    <p
                        className={`bodyM inspect-task-form-label-${theme}`}
                    >{`Subtasks (${
                        currentSubtasks.filter((subtask) => subtask.status)
                            .length
                    } of ${currentSubtasks.length})`}</p>
                    {currentSubtasks.map(({ id, subtaskName, status }) => {
                        return (
                            <CustomCheckbox
                                key={id}
                                text={subtaskName}
                                checked={status}
                                onClickCheck={handleChangeTask}
                                additionalParam={id}
                            />
                        );
                    })}
                </div>
                <div className="inspect-task-section">
                    <p className={`bodyM inspect-task-form-label-${theme}`}>
                        Current Status
                    </p>
                    <CustomDropdown
                        options={columns}
                        value={currentStatus}
                        setValue={handleChangeTask}
                    />
                </div>
            </div>
        </div>
    );
};

export default InspectTask;
