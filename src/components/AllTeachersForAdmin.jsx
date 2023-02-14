import React, { useEffect, useState } from "react";

const AllTeachersForAdmin = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/teachers`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div>
      <h2 className="h4">Teachers</h2>
      {teachers.length > 0 && (
        <ul className="p-0 m-0">
          {teachers.map((teacher) => (
            <li
              key={teacher.id}
              className="border mb-2 me-2 p-2 bg-light rounded"
            >
              <p>
                <strong>Name:</strong> {teacher.name}
              </p>
              <p>
                <strong>Phone:</strong> {teacher.phone}
              </p>
              <p>
                <strong>Specieal:</strong> {teacher.course}
              </p>
              <p>
                <strong>Price:</strong> {teacher.price} so'm
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllTeachersForAdmin;
