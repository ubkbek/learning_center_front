import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header/header";
import { useLogin } from "../../context/autentification";
import AddHomework from "../../components/modals/addHomework";
const Teacher = () => {
  const [token] = useLogin();
  const [teacherGroups, setTeacherGroups] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9999/teacherGroups", {
      headers: {
        access_token: token,
      },
    })
      .then((res) => res.json())
      .then((data) => setTeacherGroups(data));
  }, [token]);

  const handleId = (e) => {
    setId(e.target.id);
    setOpen(true);
  };

  return (
    <div>
      <Header />
      <h2 className="mb-3 text-warning mt-5">Your groups</h2>

      {teacherGroups.length > 0 && (
        <ul className="p-0 m-0">
          {teacherGroups.map((group) => (
            <li
              key={group.id}
              className="d-flex justify-content-between bg-light mb-2 p-2 rounded"
            >
              <div className="d-flex align-items-center w-50 justify-content-between">
                <p className="m-0 h6 me-3">{group.title}</p>
                <p className="m-0 me-3">{group.course}</p>
              </div>

              <button
                onClick={handleId}
                id={group.id}
                className="btn btn-success"
              >
                Add homework
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && <AddHomework group_id={id} />}
    </div>
  );
};

export default Teacher;
