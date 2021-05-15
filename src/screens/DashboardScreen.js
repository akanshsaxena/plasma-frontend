import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function DashboardScreen() {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token") === null) history.push("/");
  }, []);
  return <h1>Welcome</h1>;
}
