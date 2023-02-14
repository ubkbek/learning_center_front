import React, { useEffect, useState } from "react";

const StudentForm = () => {
  const [groups, setGroups] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/groups`)
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, password, phone, group_id } = e.target;

    fetch(`http://localhost:9999/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
        phone: phone.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data) alert("Did not join");
        alert("Student added succesfully!");

        fetch(`http://localhost:9999/studentGroups`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            student_id: data.user_id,
            group_id: id,
          }),
        });
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    name.value = null;
    password.value = null;
    phone.value = null;
    group_id.value = null;
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4">
      <input
        className="form-control"
        name="name"
        type="text"
        placeholder="name"
        required
      />
      <input
        className="form-control"
        name="password"
        type="password"
        placeholder="password"
        required
      />
      <input
        className="form-control"
        type="tel"
        name="phone"
        placeholder="998-99-123-45-54"
        required
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
      />

      <select
        onChange={(e) => setId(e.target.value)}
        name="group_id"
        className="form-control"
      >
        <option value="" selected disabled hidden>
          Select group
        </option>
        {groups.map((group) => (
          <option key={group.id} value={group.id}>
            {group.title}
          </option>
        ))}
      </select>
      <button className="btn btn-success px-5">Add</button>
    </form>
  );
};

export default StudentForm;
