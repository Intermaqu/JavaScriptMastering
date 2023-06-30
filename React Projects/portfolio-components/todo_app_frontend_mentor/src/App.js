import "./App.css";
import ThemeContext from "./ThemeContext";
import InspectTaskContext from "./InspectTaskContext";
import React, { useEffect, useState } from "react";
import CustomButton from "./components/CustomButton";
import CustomCheckbox from "./components/CustomCheckbox";
import CustomInput from "./components/CustomInput";
import CustomDropdown from "./components/CustomDropdown";
import Task from "./components/Task";
import Column from "./components/Column";
import Board from "./components/Board";
import data from "./data.json";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NewTaskForm from "./components/NewTaskForm";
import NewBoard from "./components/NewBoard";
import EditTaskForm from "./components/EditTaskForm";
import colorPalette from "./utils/colorPalette";

import { getId } from "./utils/generateId";
import InspectTask from "./components/InspectTask";
import NewColumn from "./components/NewColumn";

function App() {
    const [theme, setTheme] = useState("light");
    const [state, setState] = useState(data.data);

    const [isAddNewTaskShown, setIsAddNewTaskShown] = useState(false);
    const [isAddNewBoardShown, setIsAddNewBoardShown] = useState(false);
    const [isInspectTaskShown, setIsInspectTaskShown] = useState(false);
    const [isAddNewColumnShown, setIsAddNewColumnShown] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedBoard, setSelectedBoard] = useState(state[1].id);
    const [inspectedTask, setInspectedTask] = useState(null);

    // ON CREATE BOARD SWITCH TO IT
    // MARK SUBTASK AS DONE NOT WORKING

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const handleSelectBoard = (id) => {
        // console.log(id);
        setSelectedBoard(id);
    };

    const handleAddTask = ({ taskName, description, column, subtasks }) => {
        const taskIdx = getId();
        const subtasksWithoutPlaceholder = subtasks.map((subtask) => ({
            id: subtask.id,
            subtaskName: subtask.subtaskName,
            status: subtask.status,
        }));

        const newTask = {
            id: taskIdx,
            taskName,
            subtasks: subtasksWithoutPlaceholder,
            description,
        };

        const newState = state.map((board) => {
            if (board.id !== selectedBoard) return board;

            const newColumns = board.columns.map((col) => {
                if (col.id !== column.id) return col;

                return {
                    ...col,
                    tasks: [...col.tasks, newTask],
                };
            });
            return {
                ...board,
                columns: newColumns,
            };
        });

        setState(newState);
        setIsAddNewTaskShown(false);
    };

    const handleInspectTask = (obj) => {
        if (obj === null) {
            setIsInspectTaskShown(false);
            setInspectedTask(null);
            return;
        }

        const { taskId, columnId } = obj;
        const board = state.find((board) => board.id === selectedBoard);
        const column = board.columns.find((column) => column.id === columnId);

        const task = column.tasks.find((task) => task.id === taskId);
        setInspectedTask({ task, columnId });
        setIsInspectTaskShown(true);
    };

    const handleEditTask = (
        title,
        description,
        subtasks,
        status,
        previousColumnId,
        taskId,
    ) => {
        const currentBoard = state.find((board) => board.id === selectedBoard);

        // console.log(
        //     "Status.columnId",
        //     status.columnId,
        //     "previousColumnId",
        //     previousColumnId,
        //     "\nstatus:",
        //     status,
        // );

        if (status.columnId === previousColumnId) {
            const newColumns = currentBoard.columns.map((column) => {
                if (column.id !== status.columnId) return column;
                // console.log(
                //     "BEFORE  columnId === previousColumnId:",
                //     column.tasks,
                // );

                // console.log("subtasks in app: ", subtasks);

                const newColumn = {
                    ...column,
                    tasks: column.tasks.map((task) => {
                        if (task.id !== taskId) return task;

                        return {
                            ...task,
                            taskName: title,
                            description: description,
                            subtasks: subtasks,
                        };
                    }),
                };

                // console.log(
                //     "AFTER columnId === previousColumnId:",
                //     newColumn.tasks,
                // );
                return newColumn;
            });
            setState(
                state.map((board) => {
                    if (board.id === selectedBoard)
                        return { ...board, columns: newColumns };
                    return board;
                }),
            );
            return;
        }

        const columnsAfterRemovingTask = currentBoard.columns.map((column) => {
            if (column.id !== previousColumnId) return column;

            const newColumn = {
                ...column,
                tasks: column.tasks.filter((task) => task.id !== taskId),
            };

            return newColumn;
        });

        const columnsAfterAddingTask = columnsAfterRemovingTask.map(
            (column) => {
                if (column.id !== status.columnId) return column;
                // console.log("BEFORE:", column.tasks);
                const newColumn = {
                    ...column,
                    tasks: [
                        ...column.tasks,
                        {
                            id: taskId,
                            taskName: title,
                            description: description,
                            subtasks: subtasks,
                        },
                    ],
                };
                // console.log("AFTER:", newColumn.tasks);
                return newColumn;
            },
        );

        const newState = state.map((board) => {
            if (board.id === selectedBoard)
                return { ...board, columns: columnsAfterAddingTask };
            return board;
        });

        setState(newState);
    };

    const handleAddBoard = (boardName, columns) => {
        console.log(boardName);
        console.log(columns);
        const newColumns = columns.map((column, index) => ({
            id: getId(),
            columnName: column,
            tasks: [],
            dotColor: colorPalette[index],
        }));
        const newState = [
            ...state,
            { id: getId(), boardName, columns: newColumns },
        ];
        setState(newState);
        setIsAddNewBoardShown(false);
    };

    const handleAddColumn = (columnName) => {
        const newStates = state.map((board) => {
            if (board.id !== selectedBoard) return board;

            const newColumns = [
                ...board.columns,
                {
                    id: getId(),
                    columnName: columnName,
                    tasks: [],
                    dotColor: colorPalette[board.columns.length],
                },
            ];

            return {
                ...board,
                columns: newColumns,
            };
        });

        setState(newStates);
        setIsAddNewColumnShown(false);
    };

    useEffect(() => {
        console.log("New State: ", state);
    }, [state]);

    // useEffect(() => {
    //     setState(data.data);
    //     setDataLoaded(true);
    // }, []);

    // useEffect(() => {
    //     for (let i = 0; i < 3; i++) console.log(`,\n"id": "${getId()}"`);
    // }, []);
    return (
        <ThemeContext.Provider value={theme}>
            <InspectTaskContext.Provider value={handleInspectTask}>
                <main
                    className={`App ${theme}`}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") {
                            setIsAddNewTaskShown(false);
                            setIsAddNewBoardShown(false);
                        }
                    }}
                >
                    {isSidebarOpen && (
                        <Sidebar
                            // boards={state.data}
                            boards={state}
                            selectBoard={handleSelectBoard}
                            selectedId={selectedBoard}
                            toggleTheme={toggleTheme}
                            hideSidebar={() => setIsSidebarOpen(false)}
                            isSidebarOpen={isSidebarOpen}
                            setIsAddNewBoardShown={setIsAddNewBoardShown}
                        />
                    )}
                    <div className="content">
                        <Header
                            isSidebarOpen={isSidebarOpen}
                            addNewTask={() => setIsAddNewTaskShown(true)}
                            boardName={
                                state.find(({ id }) => id === selectedBoard)
                                    .boardName
                            }
                        />
                        <Board
                            columns={
                                state.find(({ id }) => id === selectedBoard)
                                    .columns
                            }
                            isSidebarOpen={isSidebarOpen}
                            setIsSidebarOpen={setIsSidebarOpen}
                            addNewColumn={handleAddColumn}
                            handleInspectTask={handleInspectTask}
                            setIsAddNewColumnShown={setIsAddNewColumnShown}
                        />
                    </div>
                </main>
                {isAddNewTaskShown && (
                    <NewTaskForm
                        columns={
                            state.find(({ id }) => id === selectedBoard).columns
                        }
                        setIsAddNewTaskShown={setIsAddNewTaskShown}
                        handleAddTask={handleAddTask}
                    />
                    // <EditTaskForm
                    //     columns={state[selectedBoard].columns}
                    //     setIsEditTaskShown={setIsAddNewTaskShown}
                    //     columnName="Todo"
                    //     columnId={1}
                    //     task={state[selectedBoard].columns[0].tasks[0]}
                    //     handleEditTask={handleEditTask}
                    // />
                )}

                {isAddNewBoardShown && (
                    <NewBoard
                        setIsAddNewBoardShown={setIsAddNewBoardShown}
                        handleAddBoard={handleAddBoard}
                    />
                )}
                {isInspectTaskShown && inspectedTask !== null && (
                    <InspectTask
                        task={inspectedTask?.task}
                        columns={
                            state.find((board) => board.id === selectedBoard)
                                .columns
                        }
                        status={{
                            columnId: inspectedTask?.columnId,
                            columnName: state
                                .find(({ id }) => id === selectedBoard)
                                .columns.find(
                                    ({ id }) => id === inspectedTask?.columnId,
                                ).columnName,
                        }}
                        setIsInspectTaskShown={setIsInspectTaskShown}
                        handleEditTask={handleEditTask}
                    />
                )}
                {isAddNewColumnShown && (
                    <NewColumn
                        setIsAddNewColumnShown={setIsAddNewColumnShown}
                        handleAddColumn={handleAddColumn}
                    />
                )}
            </InspectTaskContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
