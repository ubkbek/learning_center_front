import React, { useEffect } from "react";
import { useState } from "react";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/groups`)
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  return (
    <div>
      <h2 className="mb-3 h3">All groups: </h2>
      {groups.length > 0 && (
        <ul className="p-0 m-0">
          {groups.map((group) => (
            <li className="border rounded bg-light p-3 mb-2">
              <p className="m-0">
                <strong>Group title: </strong>
                {group.title}
              </p>
              <p className="m-0">
                <strong>Teacher: </strong>
                {group.teacher}
              </p>
              <p className="m-0">
                <strong>Course: </strong>
                {group.course}
              </p>
              <p className="m-0">
                <strong>Phone: </strong>
                {group.phone}
              </p>
              <p className="m-0">
                <strong>Course price: </strong>
                {group.price} so'm
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllGroups;
