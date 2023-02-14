import React, { useEffect, useState } from "react";
import { useLogin } from "../../context/autentification";
import Header from "../../components/header/header";

const Student = () => {
  const [token] = useLogin();
  const [studentGroups, setStudentGroups] = useState([]);
  const [homeworks, setHomeworks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9999/studentGroups", {
      headers: {
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setStudentGroups(data));
  }, [token]);

  const handleClick = (e) => {
    console.log(e.target.id);
    fetch(`http://localhost:9999/groupHomeworks/${e.target.id}`)
      .then((res) => res.json())
      .then((data) => setHomeworks(data));
  };

  return (
    <div className="w-100">
      <Header />
      <h2 className="mb-4 text-warning">Your groups</h2>

      {studentGroups.length > 0 && (
        <ul className="p-0 m-0">
          {studentGroups.map((groups) => (
            <li
              key={groups.id}
              className="d-flex justify-content-between w-50 bg-light p-3 border rounded align-items-center"
            >
              <p className="m-0">
                <strong>{groups.title}</strong>
              </p>
              <button
                onClick={handleClick}
                id={groups.group_id}
                className="btn btn-warning"
              >
                Homeworks
              </button>
            </li>
          ))}
        </ul>
      )}

      {homeworks.length > 0 && (
        <ul className="p-0 m-0 mt-4">
          {homeworks.map((homework) => (
            <li key={homework.id} className="border rounded bg-light mb-2 p-3">
              <p>
                <strong>{homework.title}</strong> - {homework.content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Student;
