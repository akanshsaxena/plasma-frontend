import React, { useReducer } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const action = (state, dispatch) => {
  switch (dispatch.type) {
    case "change_email":
      return { ...state, email: dispatch.payload, errorMessage: "" };
    case "change_password":
      return { ...state, password: dispatch.payload, errorMessage: "" };
    case "login_err":
      return { ...state, errorMessage: dispatch.payload };
    default:
      return state;
  }
};
export default function SignIn() {
  const history = useHistory();
  const [state, dispatch] = useReducer(action, {
    email: "",
    password: "",
    errorMessage: "",
  });
  const { email, password, errorMessage } = state;
  const handleClick = async (e) => {
    e.preventDefault();
    if (email === "" || password === "")
      dispatch({ type: "login_err", payload: "All fields are mandatory" });
    else {
      try {
        const params = JSON.stringify({ email, password });
        const response = await axios.post(
          "http://localhost:5000/account/signin",
          params,
          {
            headers: { "content-type": "application/json" },
          }
        );
        const data = await response.data;
        if (data.status === "success") {
          localStorage.setItem("token", data.token);
          if (data.message === "first login") history.push("details");
          else history.push("dashboard");
        } else {
          dispatch({ type: "login_err", payload: data.message });
        }
      } catch (err) {
        dispatch({ type: "login_err", payload: "Something went wrong" });
      }
    }
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="email"
            placeholder="Email ID"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "change_email", payload: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "change_password", payload: e.target.value })
            }
          />
        </label>
        <br />

        <button onClick={handleClick}>Sign In</button>
        {errorMessage.length > 0 && (
          <p style={{ color: "red" }}>{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
