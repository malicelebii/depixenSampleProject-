import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import FileUpload from "./FileUpload";
import gorsel from "./gorsel.PNG";

function App() {
  const [Title, setTitle] = useState("New Title");
  const [Description, setDescription] = useState("New Description");
  const [Image, setImage] = useState(gorsel);

  let onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  let onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  let onImage = (img) => {
    setImage(img);
  };

  const [lastTitle, setlastTitle] = useState("New Title");
  const [lastDescription, setlastDescription] = useState("New Description");
  const [lastImage, setlastImage] = useState(gorsel);

  let onSubmit = () => {
    setlastTitle(Title);
    setlastDescription(Description);
    setlastImage(Image);
    setTitle("New Title");
    setDescription("New Description");
    setImage(gorsel);
  };

  return (
    <div className="container">
      <div className="col-md-6">
        <div className="card">
          <input
            className="card-title"
            type="text"
            defaultValue="Title"
            value={Title}
            onChange={onTitleChange}
          />
          <textarea
            type="text"
            defaultValue="Description"
            cols="5"
            rows="5"
            value={Description}
            onChange={onDescriptionChange}
          />
          <div className="card-body">
            <FileUpload onImage={onImage} Img={Image} />
            <button
              type="button"
              class="btn btn-success"
              onClick={onSubmit}
              style={{ display: "flex", float: "right" }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <div className="col-md-6">
        <div className="card">
          <div className="card-title">{lastTitle}</div>
          <br></br>
          {lastDescription}
          <br></br>
          <div className="card-body">
            <img src={lastImage} className="card-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
