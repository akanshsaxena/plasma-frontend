import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
export default function AuthScreen() {
  const [bool, setBool] = useState(true);
  const handleClick = (e) => {
    setBool((value) => !value);
  };
  return (
    <div>
      {bool ? <h2>Sign In</h2> : <h2>Sign Up</h2>}
      {bool ? <SignIn /> : <SignUp />}
      <input type="checkbox" checked={bool} onChange={handleClick} />
    </div>
  );
}
