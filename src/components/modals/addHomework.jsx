import React from "react";

const AddHomework = ({ group_id, setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content } = e.target;

    fetch("http://localhost:9999/homeworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        content: content.value,
        group_id,
      }),
    });

    window.location.href = "/teacher";
  };

  return (
    <div className="w-100 bg-secondary d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0">
      <form className="w-25" onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="title"
          type="text"
          placeholder="Title"
          required
        />
        <textarea
          className="form-control mb-2"
          name="content"
          cols="30"
          rows="10"
          required
          placeholder="Enter homework description"
        ></textarea>
        <button className="btn btn-success form-control">Add homework</button>
      </form>
    </div>
  );
};

export default AddHomework;
