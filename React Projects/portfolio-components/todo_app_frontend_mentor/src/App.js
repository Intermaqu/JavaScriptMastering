import "./App.css";
import ThemeContext from "./ThemeContext";
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

import { getId } from "./utils/generateId";

function App() {
    const [theme, setTheme] = useState("light");
    // const [state, setState] = useState(null);
    const [state, setState] = useState(data.data);
    // const [dataLoaded, setDataLoaded] = useState(false);

    const [isAddNewTaskShown, setIsAddNewTaskShown] = useState(false);
    const [isAddNewBoardShown, setIsAddNewBoardShown] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedBoard, setSelectedBoard] = useState(1);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const handleSelectBoard = (id) => {
        console.log(id);
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

    const handleEditTask = (
        title,
        description,
        subtasks,
        status,
        previousColumnId,
        id,
    ) => {
        id = id || status.id;

        const currentBoard = state.data[selectedBoard];

        const boardAfterRemovingTask = currentBoard.columns.map((column) => {
            if (column.id !== previousColumnId) return column;

            const newColumn = column.filter((task) => task.id !== id);

            return newColumn;
        });

        const boardAfterAddingTask = boardAfterRemovingTask.columns.map(
            (column) => {
                if (column.id !== status.id) return column;

                const newColumn = [
                    ...column,
                    {
                        id: id,
                        taskName: title,
                        description: description,
                        subtasks: subtasks,
                    },
                ];

                return newColumn;
            },
        );

        const newState = state.map((board, index) => {
            if (index === selectedBoard) return boardAfterAddingTask;
            return board;
        });

        setState(newState);
    };

    const handleAddBoard = (boardName, columns) => {
        console.log(boardName);
        console.log(columns);
        const newColumns = columns.map((column) => ({
            id: getId(),
            columnName: column,
            tasks: [],
        }));
        const newState = [
            ...state,
            { id: getId(), boardName, columns: newColumns },
        ];
        setState(newState);
        setIsAddNewBoardShown(false);
    };

    const handleAddColumn = () => {
        console.log("Add New Column");
    };

    useEffect(() => {
        console.log(state);
    }, [state]);

    // useEffect(() => {
    //     setState(data.data);
    //     setDataLoaded(true);
    // }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <main className={`App ${theme}`}>
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
                            state.find(({ id }) => id === selectedBoard).columns
                        }
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        addNewColumn={handleAddColumn}
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
        </ThemeContext.Provider>
    );
}

export default App;
