import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Enter Login
        <input type="text" />
      </label>
      <br></br>
      <label htmlFor="">
        Enter Password
        <input type="text" />
      </label>
      <br></br>
      <button>Log in</button>
    </div>
  );
};

export default LoginPage;
