import Joi from "joi";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [errorValidation, setErrorValidation] = useState([]);
  const [loding, setLoding] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function validatLoginForm() {
    let schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
        .required(),
      password: Joi.string()
        .pattern(
          new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{6,12}$")
        )
        .required(),
    });
    return schema.validate(user, { abortEarly: false });
  }

  const getUserData = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };
  async function submitData(e) {
    e.preventDefault();
    setLoding(true);
    let validatForm = validatLoginForm();
    if (validatForm.error) {
      setErrorValidation(validatForm.error.details);
      setLoding(false);
    } else {
      <div>Login It Was Wompleted</div>;
      setLoding(false);
    }
    console.log(validatForm);
  }
  return (
    <>
      {" "}
      <div className="w-50 mx-auto p-2 m-5">
        <h1>Login Now</h1>
        {errorValidation.map((error, i) =>
          i === 1 ? (
            <div key={i} className="alert py-2 alert-danger">
              {error.message}
            </div>
          ) : (
            <div key={i} className="alert py-2 alert-danger">
              Password Invalid
            </div>
          )
        )}
        <form onSubmit={submitData}>
          <label type="email" htmlFor="email">
            Email :
          </label>
          <input
            onChange={getUserData}
            className="form-control mb-2"
            id="email"
            name="email"
          />
          <label htmlFor="password">password :</label>
          <input
            onChange={getUserData}
            type="password"
            className="form-control mb-2"
            id="password"
            name="password"
          />

          <Link to="/" className="btn btn-outline-primary">
            {loding === true ? (
              <i className="fas fa-spinner fa-spin"></i>
            ) : (
              "Login"
            )}
          </Link>
        </form>
      </div>
    </>
  );
}
