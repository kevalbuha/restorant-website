import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Fix: Prevent the default form submission

    try {
      console.log(JSON.stringify({ credentials }));
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials), // Send the whole credentials object
      });

      const json = await response.json();
      console.log(json, "json");

      if (!json.success) {
        alert("Enter valid Email and Password");
      }
      if (json.success) {
        localStorage.setItem("authtoken", json.authToken);
        console.log(localStorage.getItem("authtoken", json.authToken));
        navigate("/");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div className="bg-dark text-white vh-100">
      {" "}
      <div className="p-5 bg-dark text-white vh-100">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-white">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Log In
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
