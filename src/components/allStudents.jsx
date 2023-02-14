import React, { useEffect } from "react";
import { useState } from "react";

const AllStudents = () => {
  const [students, setAllStudents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/students`)
      .then((res) => res.json())
      .then((data) => setAllStudents(data));
  }, [students]);

  return (
    <div>
      <h2 className="h4 mb-2">All students</h2>
      {students.length > 0 && (
        <ul className="p-0 m-0 mb-5">
          {students.map((student) => (
            <li className="border p-3 rounded mb-2 bg-light">
              <p className="m-0">
                <strong>Name: </strong>
                {student.name}
              </p>
              <p className="m-0">
                <strong>Group: </strong>
                {student.group}
              </p>
              <p className="m-0">
                <strong>Phone number: </strong>
                {student.phone}
              </p>
              <p className="m-0">
                <strong>Password: </strong>
                {student.password}
              </p>
              <p className="m-0">
                <strong>Name: </strong>
                {student.name}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllStudents;
