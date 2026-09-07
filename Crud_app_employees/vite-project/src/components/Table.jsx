import { useEffect, useState } from "react";
import employees from "../data/employee";

function Table() {
  const [employe, setEmployee] = useState([]);
  const [user, setUser] = useState(
    {
      name: "",
      role: "",
      number: "",
      age: ""
    }
  )


  function createUser(e) {
    setUser(user.name = e.target.value)
    console.log(user)
  }
  function creatUser(e) {

    console.log(e.target.value)
  }

  useEffect(() => {
    setEmployee(employees);
  }, []);


  // below s the one version i tried to do delte it works but tried direct appeoach inside the button itself 
  /*   function handleDelete(id) {
      console.log(id)
      let filteredemployees =
        employe.filter((data) => {
          return data.id !== id
        })
      setEmployee(filteredemployees)
    } */
  return (
    <div style={{ color: "black" }}>
      <form action="" className="form">
        <label htmlFor="">name</label>
        <input type="text" onChange={(e) => createUser(e)} />
        <label htmlFor="">role</label>
        <input type="text" onChange={(e) => createUser(e)} />
        <label htmlFor="">number</label>
        <input type="number" onChange={(e) => createUser(e)} />
        <label htmlFor="">age</label>
        <input type="number" onChange={(e) => createUser(e)} />
        <button onClick={() => creatUser}>submit</button>
      </form>
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
          {employe.map((data) => {
            return (
              <tr key={data.id || data.name}>
                <td>{data.name}</td>
                <td>{data.role}</td>
                <td>{data.number}</td>
                <td>{data.age}</td>
                <td>
                  <button>edit</button>
                  <button onClick={() => {

                    setEmployee(employe.filter((e) => {
                      return e.id !== data.id
                    }))
                  }}>Delete</button>
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
