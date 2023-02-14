import React, { useEffect, useState } from "react";
import AddCourse from "./modals/addCourse";

const CourseAdmin = () => {
  const [courses, setCourses] = useState([]);

  // edit
  const handleEdit = (e) => {
    const { id } = e.target;

    const title = prompt("Enter new title...");
    let price = prompt("Enter new price...") - 0;

    price = isNaN(price) ? null : price;

    fetch(`http://localhost:9999/courses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.toString().trim(),
        price: price,
      }),
    });
  };

  // delete
  const handleDelete = (e) => {
    const id = e.target.id;
    fetch(`http://localhost:9999/courses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch("http://localhost:9999/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courses]);

  return (
    <div className="w-100 ms-5">
      <div className="d-flex justify-content-between mb-4">
        <h2 className="text-warning">Courses</h2>
        <AddCourse />
      </div>

      {courses.length > 0 && (
        <ul className="p-0 fs-5">
          {courses.map((item) => (
            <li
              key={item.id}
              className="d-flex justify-content-between border-bottom mb-2"
            >
              <p>{item.title}</p>
              <div className="d-flex align-content-center">
                <p>{item.price} so'm</p>
                <p
                  onClick={handleDelete}
                  id={item.id}
                  className="btn btn-danger ms-2 p-0 px-2"
                >
                  Delete
                </p>
                <p
                  onClick={handleEdit}
                  id={item.id}
                  className="btn btn-secondary ms-2 p-0 px-2"
                >
                  Edit
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseAdmin;
