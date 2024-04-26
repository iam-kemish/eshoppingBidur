// import React from "react";
import { useNavigate } from "react-router-dom";

const ItemList = ({ title, desc, image, category, Price }) => {
  const handleDesc = useNavigate();
  console.log(title);
  const handleDescriptionPage = (e) => {
    e.preventDefault();
    handleDesc("/Desc", { state: { title, desc, image, category, Price } });
  };

  function addSpacesToWords(str) {
    const wordsArray = str.split(" ");

    const reqStr = wordsArray.join(" ");

    const spacedString = reqStr.replace(/\./g, ". \n");

    return spacedString;
  }

  return (
    <div>
      <div className="card" style={{ width: "18rem", height: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Title: {title}</h5>
          <p className="card-text">Category: {category}</p>
          <p className="card-text">
            Price: <strong>{Price}</strong>
          </p>

          <p>
            <strong></strong> {addSpacesToWords(desc)}
          </p>
          <button onClick={handleDescriptionPage} className="btn btn-primary">
            Read full details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
