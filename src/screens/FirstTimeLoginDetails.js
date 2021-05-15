import React, { useState } from "react";
import AddRequest from "../components/AddRequest";
import DonorDetails from "../components/DonorDetails";
export default function FirstTimeLoginDetails() {
  const [isDonor, setIsDonor] = useState(false);

  const handleChange = () => {
    setIsDonor(!isDonor);
  };
  return (
    <div>
      <h1>Welcome, User!</h1>
      <h3>Please select your profile type</h3>
      <input type="checkbox" checked={isDonor} onChange={handleChange} />
      {isDonor ? <DonorDetails /> : <AddRequest />}
    </div>
  );
}
