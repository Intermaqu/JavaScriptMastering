import { useState, useRef, useEffect } from "react";
import List from "./List";
import { nanoid } from "nanoid";
import "../styles/table.css";


const Table = (props) => {
  const [lists, setLists] = useState([]);
  const [addNewList, setAddNewList] = useState(false);
  const [titleOfNewList, setTitleOfNewList] = useState("");
  const handleNewList = () => {
    setAddNewList(true);
  };
  const inputRef = useRef(null);

  const handleChangeTitle = (e) => {
    setTitleOfNewList(e.target.value);
  };

  const abortNewList = () => {
    setAddNewList(false);
    setTitleOfNewList("");
  };

  const submitNewList = () => {
    setLists([...lists, { id: nanoid(), title: titleOfNewList }]);
    abortNewList();
  };

  const submitNewListWithEnterKey = (e) => {
    if (e.key === "Enter") {
      submitNewList();
    }
  };

  useEffect(() => {
    if (addNewList) {
      inputRef.current.focus();
    }
  }, [addNewList]);

  return (
    <div className="table">
      <h1>Tablica 1</h1>
      {lists.map((list) => (
        <List name={list.title} id={list.id} key={list.id} />
      ))}
      <div className="new-list">
        {addNewList ? (
          <div className="add-new-list">
            <input
              ref={inputRef}
              type="text"
              placeholder="Wprowadź tytuł listy"
              value={titleOfNewList}
              onChange={handleChangeTitle}
              onKeyPress={submitNewListWithEnterKey}
              className="title-new-list"
            />
            <button onClick={submitNewList} className="submit-new-list">
              Dodaj Listę
            </button>
            <img
              src="./cancel-icon.svg"
              onClick={abortNewList}
              className="abort-new-list"
            />
          </div>
        ) : (
          <div className="create-new-list" onClick={handleNewList}>
            <img src="plus-icon.svg" />
            <p>Dodaj kolejną listę</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
