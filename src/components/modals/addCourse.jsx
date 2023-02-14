import React from "react";
const AddCourse = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, price } = await e.target;

    fetch("http://localhost:9999/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        price: price.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    title.value = null;
    price.value = null;

    window.location.href = "/admin/courses";
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning text-white rounded-1 px-4 py-2"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add course
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add course
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} id="add-course">
                <input
                  className="d-block mb-3 form-control"
                  name="title"
                  type="text"
                  placeholder="Add course title..."
                  autoComplete="off"
                  required
                />

                <input
                  className="form-control"
                  name="price"
                  type="number"
                  placeholder="Add course price..."
                  autoComplete="off"
                  required
                  min={1}
                  max={20000000}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                form="add-course"
                className="btn btn-success"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
