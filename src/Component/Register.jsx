import Joi from "joi";
import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Register() {
  const [errorValidation, setErrorValidation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
  });

  function validateRegisterForm() {
    const schema = Joi.object({
      first_name: Joi.string().min(3).max(15).required(),
      last_name: Joi.string().min(3).max(10).required(),
      age: Joi.number().min(18).max(80).required(),
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
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };

  async function submitData(e) {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    const validateForm = validateRegisterForm();

    if (validateForm.error) {
      setErrorValidation(validateForm.error.details);
      setLoading(false);
    } else {
      setSuccessMessage("Registration completed successfully!");
      setErrorValidation([]);
      setLoading(false);
    }
  }

  return (
    <div className="w-75 mx-auto p-2 m-5">
      <h1>Register Now</h1>
      {successMessage && (
        <div className="alert py-2 alert-success">{successMessage}</div>
      )}
      {errorValidation.map((error, i) => (
        <div key={i} className="alert py-2 alert-danger">
          {error.message}
        </div>
      ))}
      <form onSubmit={submitData}>
        <label htmlFor="first_name">First Name:</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control mb-2"
          id="first_name"
          name="first_name"
        />
        <label htmlFor="last_name">Last Name:</label>
        <input
          onChange={getUserData}
          type="text"
          className="form-control mb-2"
          id="last_name"
          name="last_name"
        />
        <label htmlFor="age">Age:</label>
        <input
          onChange={getUserData}
          type="number"
          className="form-control mb-2"
          id="age"
          name="age"
        />
        <label htmlFor="email">Email:</label>
        <input
          onChange={getUserData}
          type="email"
          className="form-control mb-2"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          onChange={getUserData}
          type="password"
          className="form-control mb-2"
          id="password"
          name="password"
        />
        <Link to="login">
        <button type="submit" className="btn btn-outline-primary">
          {loading ? <i className="fas fa-spinner fa-spin"></i> : "Register"}
        </button>
        </Link>
      </form>
    </div>
  );
}
