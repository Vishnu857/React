import React, { useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const empref = collection(db, "employee");

  const addrecord = async () => {
    if (name != "" && role != "") {
      await addDoc(empref, { name: name, role: role });
    } else {
      alert("Enter the details properly");
    }``
  };
  return (
    <div>
      <input
        className="border p-2 mr-3"
        placeholder="Name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 mt-3"
        placeholder="role"
        type="text"
        onChange={(e) => setRole(e.target.value)}
      />
      <br />
      <br />

      <button className=" rounded p-2  bg-green" onClick={addrecord}>
        Add Employee
      </button>
    </div>
  );
};

export default AddEmployee;
