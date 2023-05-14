import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import AddEmployee from "./AddEmployee";

const Employee = () => {
  const [Employeelist, setEmployeelist] = useState([]);
  const [showComponent, setShowComponent] = useState(false);
  const empref = collection(db, "employee");
  // let i       = 0;
  useEffect(() => {
    const getemployee = async () => {
      try {
        const employees = await getDocs(empref);
        const filtereddata = employees.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        // console.log(filtereddata);
        setEmployeelist(filtereddata);
      } catch (err) {
        // console.error(err);
      }
    };
    getemployee();
  }, []);
  const toggleComponent = () => {
    setShowComponent((prevState) => !prevState); // toggle the value of showComponent
  };
  return (
    <div>
      <button className="bg-green p-2 m-3 rounded" onClick={toggleComponent}>
        {showComponent ? "cancel" : "Add Employee"}
      </button>
      {showComponent && <AddEmployee />}
      <div className="overflow-x">
        <table className="table-auto overflow-scroll">
          <thead className="bg-orange border">
            <tr>
              <th className="border">sno</th>
              <th className="border">Name</th>
              <th className="border">Role</th>
            </tr>
          </thead>
          <tbody>
            {Employeelist.map((employee, index) => (
              <tr key={employee.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{employee.name}</td>
                <td className="border p-2">{employee.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
