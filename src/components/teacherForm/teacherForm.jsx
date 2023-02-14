import React, { useEffect, useState } from "react";

const TeacherForm = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courses]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, password, phone, course } = e.target;

    fetch(`http://localhost:9999/teachers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value.trim(),
        password: password.value.trim(),
        phone: phone.value.trim(),
        course: course.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.data) {
          alert("Teacher exists");
        }
      });

    name.value = null;
    password.value = null;
    phone.value = null;
    course.value = null;

    window.location.href = "/admin/teachers";
  };

  return (
    <form onSubmit={handleSubmit} className="w-100 d-flex gap-1 mb-4" id="form">
      <input
        className="form-control"
        name="name"
        type="text"
        placeholder="Add teacher name..."
        autoComplete="off"
        required
      />
      <input
        className="form-control "
        name="password"
        type="password"
        placeholder="Add password..."
        autoComplete="off"
        required
      />
      <input
        className="form-control "
        type="tel"
        id="phone"
        name="phone"
        placeholder="998-99-123-45-54"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
        required
      />
      <select name="course" className="form-control h-100" required>
        <option disabled hidden selected value="">
          Select course...
        </option>
        {courses.map((course) => (
          <option value={course.id} key={course.id}>
            {course.title}
          </option>
        ))}
      </select>
      <button className="btn btn-success h-100 px-5">add</button>
    </form>
  );
};

export default TeacherForm;
