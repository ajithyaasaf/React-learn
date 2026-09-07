import { useEffect, useState } from "react";
import employees from "../data/employee";

function Table() {
  const [employe, setEmployee] = useState();
  useEffect(() => {
    setEmployee(employees);
  }, []);

  function handleDelete(id) {}
  return (
    <div style={{ color: "black" }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => {
            return (
              <tr key={data.id || data.name}>
                <td>{data.name}</td>
                <td>{data.role}</td>
                <td>{data.number}</td>
                <td>{data.age}</td>
                <td>
                  <button>edit</button>
                  <button onClick={() => handleDelete(data.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
