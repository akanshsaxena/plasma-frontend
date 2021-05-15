import React, { useReducer } from "react";
import axios from "axios";

const action = (state, dispatch) => {
  switch (dispatch.type) {
    case "change_email":
      return { ...state, email: dispatch.payload, errorMessage: "" };
    case "change_password":
      return { ...state, password: dispatch.payload, errorMessage: "" };
    case "change_name":
      return { ...state, name: dispatch.payload };
    case "login_err":
      return { ...state, errorMessage: dispatch.payload };
    default:
      return state;
  }
};
export default function SignIn() {
  const [state, dispatch] = useReducer(action, {
    email: "",
    password: "",
    name: "",
    errorMessage: "",
  });
  const { email, password, name, errorMessage } = state;
  const handleClick = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      dispatch({ type: "login_err", payload: "All fields are mandatory" });
    } else {
      try {
        const params = JSON.stringify({ name, email, password });
        const response = await axios.post(
          "http://localhost:5000/account/signup",
          params,
          {
            headers: { "content-type": "application/json" },
          }
        );
        const data = await response.data;
        if (data.status === "success") {
          alert("Account created successfully");
        } else {
          dispatch({ type: "login_err", payload: data.message });
        }
      } catch (err) {
        dispatch({ type: "login_err", payload: "Something went wrong." });
      }
    }
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="text"
            placeholder="Full Name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "change_name", payload: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          <input
            type="email"
            placeholder="Email ID"
            autoComplete="off"
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
        {errorMessage.length > 0 && (
          <p style={{ color: "red" }}>{errorMessage}</p>
        )}
        <button onClick={handleClick}>Sign Up</button>
      </div>
    </div>
  );
}
