import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../../context/context";

function Login({ emails, ids }) {
  const Auth = useContext(AuthContext);
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (emails.includes(data["email"])) {
      Auth.login();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          ref={register({ required: true, minLength: 7 })}
          aria-describedby="emailHelp"
          name="email"
        />
        {errors.username && errors.username.type === "required" && (
          <small id="emailHelp" className="form-text " style={{ color: "red" }}>
            User Info is Safe.
          </small>
        )}
        {errors.username && errors.username.type === "minLength" && (
          <small id="emailHelp" className="form-text " style={{ color: "red" }}>
            min length is 7 characters
          </small>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          ref={register}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          name="save"
          className="form-check-input"
          id="exampleCheck1"
          ref={register}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
