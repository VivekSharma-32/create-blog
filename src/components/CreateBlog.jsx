import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./createBlog.css";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (title === "" || description === "" || content === "") {
        alert("All fields are required!");
      } else {
        alert(
          `Title: ${title}.\nDescription: ${description}.\nContent: ${content}`
        );
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Create Blog</h1>
      <div className="horizontal-line"></div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="title">Title</label>
          <input
            className="input-field"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="Description">Description</label>
          <input
            className="input-field"
            type="text"
            placeholder="Title"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label htmlFor="Content">Content</label>
          <ReactQuill theme="snow" value={content} onChange={setContent} />
        </div>
        <div className="btn">
          <button className="create-btn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
