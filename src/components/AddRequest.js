import React, { useReducer, useRef } from "react";

const action = (state, dispatch) => {
  switch (dispatch.type) {
    case "update":
      return { ...state, [dispatch.field]: dispatch.payload, error: "" };
    case "error":
      return { ...state, error: dispatch.payload };
    default:
      return state;
  }
};
export default function AddRequest() {
  const [state, dispatch] = useReducer(action, {
    patient: "",
    age: null,
    blood: null,
    gender: null,
    unit: null,
    address1: "",
    address2: "",
    city: "",
    pin: null,
    additionalInfo: "",
    error: "",
  });
  const previewDiv = useRef(null);
  const handlePreviewClick = (e) => {
    e.preventDefault();
    if (previewDiv.current.style.display === "block")
      previewDiv.current.style.display = "none";
    else {
      if (
        patient === "" ||
        age === null ||
        gender === "" ||
        blood === "" ||
        address1 === "" ||
        city === "" ||
        pin === null
      )
        dispatch({
          type: "error",
          field: "error",
          payload: "* Marked fields are mandatory",
        });
      else {
        previewDiv.current.style.display = "block";
      }
    }
  };
  const {
    patient,
    age,
    blood,
    gender,
    unit,
    address1,
    address2,
    city,
    pin,
    additionalInfo,
    error,
  } = state;
  return (
    <div>
      <h2>Add a new request</h2>
      <form>
        <label>
          <div>
            <input
              type="text"
              placeholder="Patient Name"
              value={patient}
              name="patient"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <input
              type="number"
              placeholder="Age"
              value={age}
              name="age"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <input
              type="text"
              placeholder="Blood group required"
              value={blood}
              name="blood"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <input
              type="text"
              placeholder="Units"
              value={unit}
              name="unit"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              name="gender"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <input
              type="text"
              placeholder="Address Line 1"
              value={address1}
              name="address1"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <input
              type="text"
              placeholder="Address Line 1"
              value={address2}
              name="address2"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <select></select>
          </div>
        </label>
        <label>
          <div>
            <select></select>
          </div>
        </label>
        <label>
          <div>
            <input
              type="text"
              placeholder="City"
              value={city}
              name="city"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <input
              type="number"
              placeholder="PIN"
              max={6}
              value={pin}
              name="pin"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <textarea
              placeholder="Additional Info"
              maxLength={300}
              value={additionalInfo}
              name="additionalInfo"
              onChange={(e) =>
                dispatch({
                  type: "update",
                  field: e.target.name,
                  payload: e.target.value,
                })
              }
            />
          </div>
        </label>
        {error.length > 0 && <p>{error}</p>}
        <button onClick={handlePreviewClick}>Preview</button>
      </form>
      <div id="preview-div" ref={previewDiv} style={{ display: "none" }}>
        <h1>Request Preview</h1>
        <div>
          <div>
            <h4>Patient</h4>
            <h3>{patient}</h3>
          </div>
          <div>
            <h4>Age</h4>
            <h3>{age}</h3>
          </div>
          <div>
            <h4>Gender</h4>
            <h3>{gender}</h3>
          </div>
          <div>
            <h4>Plasama Blood group</h4>
            <h3>{blood}</h3>
          </div>
          <div>
            <h4>Unit</h4>
            <h3>{unit}</h3>
          </div>
          <div>
            <h4>Address Line 1</h4>
            <h3>{address1}</h3>
          </div>
          {address2.length > 0 && (
            <div>
              <h4>Address Line 2</h4>
              <h3>{address2}</h3>
            </div>
          )}
          <div>
            <h4>City</h4>
            <h3>{city}</h3>
          </div>
          <div>
            <h4>PIN</h4>
            <h3>{pin}</h3>
          </div>
          {additionalInfo.length > 0 && (
            <div>
              <h4>Additional Info</h4>
              <h3>{additionalInfo}</h3>
            </div>
          )}
        </div>
        <div>
          <button>Submit Request</button>
          <button onClick={handlePreviewClick}>Back</button>
        </div>
      </div>
    </div>
  );
}
