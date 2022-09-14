import React, { useDebugValue, useEffect, useRef, useState } from "react";
import Post from "./Post";
import { nanoid } from "nanoid";
import "../styles/list.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const List = (props) => {
  const [posts, setPosts] = useState([]);
  const [addNewPost, setAddNewPost] = useState(false);
  const [titleOfNewPost, setTitleOfNewPost] = useState("");
  const inputRef = useRef(null);

  const createNewPost = () => {
    setAddNewPost(true);
  };

  const submitNewPost = () => {
    setPosts([...posts, { id: nanoid(), title: titleOfNewPost }]);
    abortNewPost();
  };

  const submitNewPostWithEnterKey = (e) => {
    if (e.key === "Enter") {
      submitNewPost();
    }
  };

  const abortNewPost = () => {
    setAddNewPost(false);
    setTitleOfNewPost("");
  };

  const handleChangeTitle = (e) => {
    setTitleOfNewPost(e.target.value);
  };

  const deletePost = (id) => {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  const handleDragAndDrop = (result) => {
    if (!result.destination) return;

    const items = Array.from(posts);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPosts(items);
  };

  useEffect(() => {
    addNewPost && inputRef.current.focus();
  }, [addNewPost]);

  return (
    <div className="list-wrapper">
      <div className="list">
        <h1>{props.name}</h1>
        <DragDropContext onDragEnd={handleDragAndDrop}>
          <Droppable droppableId={props.id}>
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {posts.map(({id, title}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Post
                            id={id}
                            title={title}
                            deletePost={deletePost}
                          />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        <div className="add-post">
          {addNewPost ? (
            <div className="add-new-post">
              <input
                ref={inputRef}
                type="text"
                placeholder="Wprowadź tytuł posta"
                value={titleOfNewPost}
                onChange={handleChangeTitle}
                onKeyPress={submitNewPostWithEnterKey}
                className="title-new-post"
              />
              <button onClick={submitNewPost} className="submit-new-post">
                Dodaj Post
              </button>
              <img
                src="./cancel-icon.svg"
                onClick={abortNewPost}
                className="abort-new-post"
              />
            </div>
          ) : (
            <span onClick={createNewPost} className="create-new-post">
              <img src="plus-icon.svg" />
              <p>Dodaj Post</p>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
