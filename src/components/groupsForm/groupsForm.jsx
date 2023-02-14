import React, { useEffect } from "react";
import { useState } from "react";

const GroupsForm = () => {
  const [courses, setCourses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courseId, setCourseId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9999/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [courses]);

  const handleSelect = (e) => {
    setCourseId(e.target.value);
    fetch(`http://localhost:9999/courseTeachers/${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, teacher_id, course } = e.target;

    fetch(`http://localhost:9999/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        teacher_id: teacher_id.value,
        course_id: courseId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.data) {
          alert("Did not join ):");
        }
      });

    title.value = null;
    course.value = null;
    teacher_id.value = null;

    window.location.href = "/admin/groups";
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input
          className="form-control"
          name="title"
          type="text"
          placeholder="Enter group name..."
          required
        />
        <select
          onChange={handleSelect}
          name="course"
          className="form-control"
          required
        >
          <option value="" selected disabled hidden>
            Select coures
          </option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
        <select name="teacher_id" className="form-control" required>
          <option value="" selected disabled hidden>
            Select Teacher
          </option>
          {teachers.map((teacher) => (
            <option key={teacher.user_id} value={teacher.user_id}>
              {teacher.user_name}
            </option>
          ))}
        </select>
        <button className="btn btn-success px-5">Add</button>
      </form>
    </div>
  );
};

export default GroupsForm;
