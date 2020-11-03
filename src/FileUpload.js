import React, { useState } from "react";


export class FileUpload extends React.Component {
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.props.onImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    return (
      <>
        <div className="img-holder ">
          <label htmlFor="input" className="card-body">
            <img src={this.props.Img} alt="" id="img" className="card-img" />
          </label>
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          id="input"
          onChange={this.imageHandler}
        />
      </>
    );
  }
}

export default FileUpload;
