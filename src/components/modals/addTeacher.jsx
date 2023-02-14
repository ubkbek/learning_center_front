import React, { useEffect } from "react";
import { useState } from "react";
const AddTeacher = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courses]);

  // const handleTeacher = (e) => {
  //     e.preventDefault()
  //     console.log('salom');
  //     const { name, password, phone, cource } = e.target

  //     console.log(name, password, phone, cource);
  // }

  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add teacher
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={() => console.log("salom")}>
                <button className="btn btn-success">add</button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
