import "./App.css";
import ThemeContext from "./ThemeContext";
import React, { useState } from "react";
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

function App() {
    const [theme, setTheme] = useState("light");
    const [state, setState] = useState(data.data);

    const [isAddNewTaskShown, setIsAddNewTaskShown] = useState(false);
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
        const columnIdx = state[selectedBoard].columns.findIndex(
            ({ id }) => id === column.id,
        );
        const taskIdx =
            state[selectedBoard].columns[columnIdx].tasks.length > 0
                ? state[selectedBoard].columns[columnIdx].tasks.at(-1).id + 1
                : 1;
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

        const mewState = state.map((board) => {
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

        setState(mewState);
        setIsAddNewTaskShown(false);
    };

    const handleAddColumn = () => {
        console.log("Add New Column");
    };

    return (
        <ThemeContext.Provider value={theme}>
            <main className={`App ${theme}`}>
                {isSidebarOpen && (
                    <Sidebar
                        boards={data.data}
                        selectBoard={handleSelectBoard}
                        selectedId={selectedBoard}
                        toggleTheme={toggleTheme}
                        hideSidebar={() => setIsSidebarOpen(false)}
                        isSidebarOpen={isSidebarOpen}
                    />
                )}
                <div className="content">
                    <Header
                        isSidebarOpen={isSidebarOpen}
                        addNewTask={() => setIsAddNewTaskShown(true)}
                        boardName={state[selectedBoard].boardName}
                    />
                    <Board
                        columns={state[selectedBoard].columns}
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                        addNewColumn={handleAddColumn}
                    />
                </div>
            </main>
            {isAddNewTaskShown && (
                <NewTaskForm
                    columns={state[selectedBoard].columns}
                    setIsAddNewTaskShown={setIsAddNewTaskShown}
                    handleAddTask={handleAddTask}
                />
            )}
        </ThemeContext.Provider>
    );
}

export default App;
