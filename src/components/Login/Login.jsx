import React, { useState } from "react";

export default function Login() {
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
  return (<>
    <div className="container vh-100 pt-5">
      <h3 className="mt-5 fw-bold">Login</h3>

      <form onSubmit={submitRegister}>

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
 </>);
}
