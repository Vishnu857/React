import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleprovider } from "../config/firebase";
const Authenticate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(auth?.currentUser?.email)

  const signin = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const signinwithgoogle = async () => {
    await signInWithPopup(auth, googleprovider);
    // console.log(auth?.currentUser?.photoURL)
  };
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue " onClick={signin}>
        signin
      </button>
      <button className="bg-orange" onClick={logout}>
        LogOut
      </button>
      <button className="bg-yellow" onClick={signinwithgoogle}>
        signin with google
      </button>
    </div>
  );
};

export default Authenticate;
