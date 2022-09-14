import "../styles/post.css";

const Post = (props) => {
  return (
    <div
      className="post"
    >
      <p>{props.title}</p>
      <img
        src="trash-can-icon.svg"
        height="100%"
        onClick={() => props.deletePost(props.id)}
      />
    </div>
  );
};

export default Post;
