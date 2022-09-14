import React from "react";
import "../style/animal.css";

const Animal = (props) => {
  const genderImage = props.gender === "male" ? "men-line" : "women-line";

  return (
    <div className="animal">
      <img src={props.image} className="animal--image" />
      <div className="animal--info">
        <p className="animal--name">
          {props.name}
          
        </p>
        <img
            src={`./${genderImage}.png`}
            className={`${genderImage} animal--gender`}
        />
        <p className="animal--age">{props.age}</p>
      </div>
      <div className="animal--description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Animal;
