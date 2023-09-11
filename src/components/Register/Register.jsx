import React, { useState } from "react";

export default function Register() {
  const [user, setuser] = useState({
    first_Name: "",
    last_Name: "",
    age: 0,
    email: "",
  });

  function getUser(e) {
    let myUser = { ...user };
    myUser.first_Name = e.target.value;
    setuser(myUser);
    console.log(user);
  }

  function submitRegister(e) {
    e.preventDefault();
    console.log("submitRegister");
  }
  return (
    <div className="container pt-5 mb-5">
      <h3 className="mt-5 fw-bold">Register Now</h3>

      <form onSubmit={submitRegister}>
        <label htmlFor="first_Name">first_Name :</label>
        <input
          onChange={getUser}
          type="text"
          className="form-control my-3"
          name="first_Name"
          id="first_Name"
        />

        <label htmlFor="last_Name">last_Name :</label>
        <input
          onChange={getUser}
          type="text"
          className="form-control my-3"
          name="last_Name"
          id="last_Name"
        />

        <label htmlFor="age">age :</label>
        <input
          onChange={getUser}
          type="number"
          className="form-control my-3"
          name="age"
          id="age"
        />

        <label htmlFor="email">email :</label>
        <input
          onChange={getUser}
          type="email"
          className="form-control my-3"
          name="email"
          id="email"
        />

        <label htmlFor="password">password :</label>
        <input
          onChange={getUser}
          type="password"
          className="form-control my-3"
          name="password"
          id="password"
        />
        <button type="submit" className="btn btn-outline-blue">
          Register
        </button>
      </form>
    </div>
  );
}
